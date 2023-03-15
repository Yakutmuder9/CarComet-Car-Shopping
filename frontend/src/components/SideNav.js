import { useEffect, useRef, useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import {
  carMakes,
  bodyStyleData,
  carEngineTypes,
  carFuelTypes,
  carTransmissionTypes,
  drivetrains,
  bodyColors,
  interiorColors,
  otherOptions,
  yearsArray,
} from "../assets/base/data";

const sideNavData = [
  {
    id: 1,
    title: "Location",
    submenu: {
      title: "distacnce with in",
      min: 0,
      max: 1500,
    },
    component: "range",
    label: "distance",
  },
  {
    id: 2,
    title: "Selected Make",
    submenu: carMakes,
    component: "select",
    label: "Make",
  },
  {
    id: 3,
    title: "Year",
    submenu: yearsArray,
    component: "select",
    label: "select year",
  },
  {
    id: 4,
    title: "Price",
    submenu: {},
    component: "range",
    label: "max price",
  },
  {
    id: 5,
    title: "Milage",
    submenu: {},
    component: "range",
    label: "max mileage",
  },
  {
    id: 6,
    title: "Body Style",
    submenu: bodyStyleData,
    component: "checkbox",
    label: "choose body style",
  },
  {
    id: 7,
    title: "Engine type",
    submenu: carEngineTypes,
    component: "checkbox",
    label: "Engine",
  },
  {
    id: 8,
    title: "Fule Type",
    submenu: carFuelTypes,
    component: "checkbox",
    label: "Fuel Type",
  },
  {
    id: 9,
    title: "Transmission",
    submenu: carTransmissionTypes,
    component: "checkbox",
    label: "Transmission",
  },
  {
    id: 10,
    title: "Drivetrain",
    submenu: drivetrains,
    component: "checkbox",
    label: "Drivetrain",
  },
  {
    id: 11,
    title: "Body Color",
    submenu: bodyColors,
    component: "checkbox",
    label: "Body Color",
  },
  {
    id: 12,
    title: "Interior Color",
    submenu: interiorColors,
    component: "checkbox",
    label: "Interior Color",
  },
  {
    id: 13,
    title: "Other Options",
    submenu: otherOptions,
    component: "checkbox",
    label: "Other Options",
  },
];

const initialToggleState = Array(sideNavData.length).fill(false);

const initialSearchState = [
  {
    id: 1,
    value: 100,
    title: "Location",
  },
  {
    id: 2,
    value: "All",
    title: "Selected Make",
  },
  {
    id: 3,
    value: 2000,
    title: "Year",
  },
  {
    id: 4,
    value: "Any Price",
    title: "Price",
  },
  {
    id: 5,
    value: "Any Mileage",
    title: "Milage",
  },
  {
    id: 6,
    value: "Any Style",
    checked: false,
    title: "Body Style",
  },
  {
    id: 7,
    value: "",
    checked: false,
    title: "Engine type",
  },
  {
    id: 8,
    value: "",
    checked: false,
    title: "Fule Type",
  },
  {
    id: 9,
    value: "",
    checked: false,
    title: "Transmission",
  },
  {
    id: 10,
    value: "",
    checked: false,
    title: "Drivetrain",
  },
  {
    id: 11,
    value: "",
    checked: false,
    title: "Body Color",
  },
  {
    id: 12,
    value: "",
    checked: false,
    title: "Interior Color",
  },
  {
    id: 13,
    value: "",
    checked: false,
    title: "Other Options",
  },
];
function AccordionItem(props) {
  const { isOpen, onToggle, data, onSearchChange, searchState } = props;
  const [showAll, setShowAll] = useState(false);

  const filteredSearchState = searchState.filter((item) => item.id === data.id);

  const handleInputChange = (event) => {
    const { id, value, checked, type } = event.target;
    const newState = [...searchState];
    const index = newState.findIndex((item) => item.id === Number(id));

    if (index !== -1) {
      if (type === "checkbox") {
        newState[index].checked = checked;
      } else {
        console.log("val");
        newState[index].value = value;
        console.log("valu", newState);
      }
      onSearchChange(newState);
    }
  };
  console.log(searchState);

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
                        checked={item.checked}
                        onChange={handleInputChange}
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
                      {data.submenu.map((list) => (
                        <div className="checkbox-field" key={list.id}>
                          <small>
                            {list.name}({list.total})
                          </small>
                          <input
                            type="checkbox"
                            name={list.name}
                            id={list.id}
                            checked={item.checked}
                            onChange={handleInputChange}
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
}

const SideNav = () => {
  const [searchState, setSearchState] = useState(initialSearchState);
  const [isOpen, setIsOpen] = useState(initialToggleState);

  //car condition
  const [activeTab, setActiveTab] = useState(1);
  const tabNames = ["New", "Used", "Cirtified"];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleToggle = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  // handle all search change
  const handleSearchChange = (event, id) => {
    const { value } = event.target;

    setSearchState((prevState) => {
      // Find the index of the item to update
      const index = prevState.findIndex((item) => item.id === id);

      // Create a new array with the updated item
      const newState = [
        ...prevState.slice(0, index),
        { ...prevState[index], value },
        ...prevState.slice(index + 1),
      ];

      return newState;
    });
  };

  return (
    <div className="car-filter-sidenav">
      <div className="by-condtion">
        {tabNames.map((tabName, index) => (
          <button
            key={index}
            className="card-box"
            style={{
              background: activeTab === index + 1 ? "#FFD31C" : "",
              color: activeTab === index + 1 ? "#000" : "",
            }}
            onClick={() => handleTabClick(index + 1)}
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
          searchState={initialSearchState}
        />
      ))}
    </div>
  );
};

export default SideNav;
