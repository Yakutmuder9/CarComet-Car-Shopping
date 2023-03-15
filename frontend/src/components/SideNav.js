import { useEffect, useRef, useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { initialSearchState, sideNavData } from "../assets/base/data";

const initialToggleState = Array(sideNavData.length).fill(false);

const AccordionItem = (props) => {
  const { isOpen, onToggle, data, onSearchChange, searchState } = props;
  const [showAll, setShowAll] = useState(false);

  const filteredSearchState = searchState?.filter(
    (item) => item.id === data.id
  );

  const handleInputChange = (event, subId) => {
    const { id, value, checked, type } = event.target;
    const newState = [...searchState];

    const index = newState.findIndex((item) => item.id === Number(id));

    console.log(
      "val",
      value,
      "check",
      checked,
      "type",
      type,
      "id",
      id,
      "subId",
      subId,
      "index",
      index
    );

    if (index !== -1) {
      if (type === "checkbox") {
        newState[index].status[subId - 1].checked = checked;
      } else {
        // console.log("main val", newState[id - 1].status[subId - 1].value);
        newState[index].value = value;
      }
      onSearchChange(newState, id, value, checked);
    }
  };

  // const handleInputChange = (event, id, subId) => {
  //   const { id, value, checked, type } = event.target;
  //   const newState = [...searchState];

  //   const index = newState.findIndex((item) => item.id === Number(id));

  //   if (index !== -1) {
  //     if (type === "checkbox") {
  //       // console.log("sd", newState[index].status , "all", searchState, "che" , checked);

  //       newState[index].status = checked;
  //     } else {
  //       newState[index].value = value;
  //     }
  //     onSearchChange(newState, id, value, checked);
  //   }
  // };
  return (
    <div className="accordion">
      <div className="toggler" onClick={onToggle}>
        <label htmlFor="labelTitle">{data.title}</label>

        <div className="labeltitle">
          <span>
            
            {filteredSearchState.map((item, i) => (
              <small key={i}>{item.value}</small>
            ))}
          </span>{" "}
          {isOpen ? <BiChevronUp /> : <BiChevronDown />}
        </div>
      </div>

      {isOpen && (
        <div className="submenu">
          {filteredSearchState.map((item) => (
            // cheack the filed types
            <div key={item.id} className={data.component}>
              {data.component === "select" && (
                <div className="select-field">
                  <small htmlFor="selectlab">{data.label}</small>
                  <select
                    className="select"
                    name={item.id}
                    id={item.id}
                    value={item.value}
                    onChange={handleInputChange}
                  >
                    {data.submenu.map((choic) => (
                      <option key={choic.id} value={choic.value}>
                        {choic.value}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {data.component === "range" && (
                <div className="range-slider-container">
                  <small>{data.label}</small>
                  <input
                    type="range"
                    min="0"
                    max="2500"
                    step="5"
                    id={item.id}
                    value={item.value}
                    onChange={handleInputChange}
                    className="range-slider"
                  />
                </div>
              )}

              {data.component === "checkbox" && (
                <>
                  {data.submenu.slice(0, 5).map((list) => (
                    <div className="checkbox-field" key={list.id}>
                      <small>
                        {list.name}({list.total})
                      </small>
                      <input
                        type="checkbox"
                        name={list.name}
                        id={item.id}
                        value={list.name}
                        checked={list.checked}
                        onChange={(e) => handleInputChange(e, list.id)}
                      />
                    </div>
                  ))}

                  {!showAll && (
                    <small
                      onClick={() => setShowAll(true)}
                      className="see-more"
                    >
                      See more ..
                    </small>
                  )}

                  {showAll && (
                    <>
                      {data.submenu.slice(5).map((list) => (
                        <div className="checkbox-field" key={list.id}>
                          <small>
                            {list.name}({list.total})
                          </small>
                          <input
                            type="checkbox"
                            name={list.name}
                            id={item.id}
                            value={list.name}
                            checked={list.checked}
                            onChange={(e) =>
                              handleInputChange(e,  list.id)
                            }
                          />
                        </div>
                      ))}
                    </>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const SideNav = () => {
  const [searchState, setSearchState] = useState(initialSearchState);
  const [isOpen, setIsOpen] = useState(initialToggleState);
  const togglerRef = useRef(null);

  //car condition
  const [activeTab, setActiveTab] = useState(1);
  const tabNames = ["Used", "New", "Cirtified"];

 
  const handleTabClick = (index, tabName) => {
    setActiveTab(index);
    const newState = [...initialSearchState];
    console.log("old", newState[13] );
    newState[13].value = tabName;
    console.log("changed", newState);
  };

  const handleToggle = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  // handle all search change
  const handleSearchChange = (event, id, value, checked) => {
    // console.log("id", id, "val", value, "che", checked);

    setSearchState((prevState) => {
      // Find the index of the item to update
      const index = prevState.findIndex((item) => item.id === Number(id));

      // Create a new array with the updated item
      const newState = [
        ...prevState.slice(0, index),
        { ...prevState[index], value },
        ...prevState.slice(index + 1),
      ];
      console.log(newState);
      return newState;
    });

    // const { name, value } = event.target;
    // setSearchState({ ...searchState, [name]: value });
  };
 useEffect(() => {
    function handleClickOutside(event) {
      const toggler = togglerRef.current;
      if (isOpen && toggler && !toggler.contains(event.target)) {
        const updatedisOpenState = Array(initialToggleState.length).fill(false);
        setIsOpen(updatedisOpenState);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <div className="car-filter-sidenav" ref={togglerRef}>
      <div className="by-condtion">
        {tabNames.map((tabName, index) => (
          <button
            key={index}
            className="card-box"
            style={{
              background: activeTab === index + 1 ? "#FFD31C" : "",
              color: activeTab === index + 1 ? "#000" : "",
            }}
            onClick={() => handleTabClick((index + 1), tabName)}
          >
            {tabName}
          </button>
        ))}
      </div>
      {sideNavData.map((item, index) => (
        <AccordionItem
          key={item.id}
          isOpen={isOpen[index]}
          data={item}
          onToggle={() => handleToggle(index)}
          onSearchChange={handleSearchChange}
          searchState={searchState}
        />
      ))}
    </div>
  );
};

export default SideNav;