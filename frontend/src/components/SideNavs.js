import { useEffect, useRef, useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { marks, carMakes, bodyStyleData } from "../assets/base/data";

const initialSearchState = [
  {
    condition: "All",
    distance: 0,
    selectedMake: "",
    year: 2000,
    price: "All Price",
    milage: "Any Milage",
    bodyStyle: "Any Style",
    engine: "",
    fuleType: "",
    transmission: "",
    drivetrain: "",
    bodyColor: "",
    interiorColor: "",
    otherOptions: "",
  },
];

const initialToggleState = [
  {
    distance: false,
    selectedMake: false,
    year: false,
    price: false,
    milage: false,
    bodyStyle: false,
    engine: false,
    fuleType: false,
    transmission: false,
    bodyColor: false,
    interiorColor: false,
    drivetrain: false,
    otherOptions: false,
  },
];

const sideNavData = [
  {
    id: 1,
    name: "Location",
    submenu: [
      {
        id: 11,
        subname: "distance",
        value: "",
      },
      {
        id: 12,
        subname: "distance",
        value: "",
      },
    ],
  },
  {
    id: 2,
    name: "Make",
    submenu: [
      {
        id: 21,
        subname: "Totota",
        value: "",
      },
      {
        id: 22,
        subname: "Honda",
        value: "",
      },
      { id: 23, subname: "Honda", value: "" },
    ],
  },
];

const SideNav = () => {
  // All the default Search state value
  const [expanded, setExpanded] = useState(
    Array(initialSearchState.length).fill(false)
  );
  const [searchState, setSearchState] = useState(initialSearchState);



  // car model year
  const now = new Date();
  const currentYear = now.getFullYear();
  const years = Array.from({ length: currentYear - 1999 }, (_, i) => 2000 + i);

  // handle toggle expand and collapse
  const handleExpandClick = (index, key) => {
    setActiveTab(index);
    console.log("index:", index, "key:", key );

    // const newExpanded = [...expanded];
    // setExpanded({
    //   ...expanded,
    //   [key]: !expanded[key],
    // });
  };

  // handle all search change
  const handleSearchChange = (event) => {
    console.log(event);
    const { name, value } = event.target;
    setSearchState({ ...searchState, [name]: value });
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
            onClick={() => handleExpandClick(index + 1, tabName)}
          >
            {tabName}
          </button>
        ))}
      </div>

      {/* <div className={isPriceExpanded ? "by-price expand" : "by-price "}>

      <div className="toggler" onClick={handleClick}>
        <label htmlFor="price">Price</label>
        <div name="price">
          {isPriceExpanded ? (
            <>
              {price}
              <BiChevronUp />
            </>
          ) : (
            <>
              {price}
              <BiChevronDown />
            </>
          )}
        </div>
      </div>

      {isPriceExpanded && (
        <div className="container">
          <input
            type="range"
            min="0"
            max="150000"
            step="250"
            value={price}
            onChange={handlePriceChange}
            className="range-slider"
            list="tickmarks"
          />
        </div>
      )}
    </div> */}

      <ul id="accordion" className="accordion">
        {sideNavData?.map((outerItem) => {
          return (
            <li
              key={outerItem.id}
              className={
                expanded ? "toggle-container expand" : "toggle-container"
              }
            >
              <div className="toggler"  onClick={() => handleExpandClick(index + 1, tabName)}>
                <label htmlFor="listName">
                  {outerItem.leftIcon} {outerItem.name}
                </label>
                <div name="listName">
                  {searchState.year}
                  {expanded ? (
                    <>
                      <BiChevronDown className="icon-down" />
                    </>
                  ) : (
                    <>
                      <BiChevronUp className="icon-up" />
                    </>
                  )}
                </div>
              </div>
              {expanded && (
                <ul className="submenu">
                  {outerItem.submenu.map((innerItem) => {
                    return (
                      <li key={innerItem.id}>
                        {innerItem.subname}
                        <input
                          type="range"
                          min="0"
                          max="150000"
                          step="250"
                          // value={price}
                          // onChange={handlePriceChange}
                          className="range-slider"
                          list="tickmarks"
                        />
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}

        {/* <li>
          <div className="link">
            <MdLocationOn /> Location
            <BiChevronDown className="fa-chevron-down" />
          </div>
          <ul className="submenu">
            <li>
              <a href="#">Photoshop</a>
            </li>
            <li>
              <a href="#">HTML</a>
            </li>
            <li>
              <a href="#">CSS</a>
            </li>
          </ul>
        </li> */}

        {/* <li>
          <div className="link">
            <i className="fa fa-code"></i>Coding
            <i className="fa fa-chevron-down"></i>
          </div>
          <ul className="submenu">
            <li>
              <a href="#">Javascript</a>
            </li>
            <li>
              <a href="#">jQuery</a>
            </li>
            <li>
              <a href="#">Ruby</a>
            </li>
          </ul>
        </li>
        <li>
          <div className="link">
            <i className="fa fa-mobile"></i>Devices
            <i className="fa fa-chevron-down"></i>
          </div>
          <ul className="submenu">
            <li>
              <a href="#">Tablet</a>
            </li>
            <li>
              <a href="#">Mobile</a>
            </li>
            <li>
              <a href="#">Desktop</a>
            </li>
          </ul>
        </li>
        <li>
          <div className="link">
            <i className="fa fa-globe"></i>Global
            <i className="fa fa-chevron-down"></i>
          </div>
          <ul className="submenu">
            <li>
              <a href="#">Google</a>
            </li>
            <li>
              <a href="#">Bing</a>
            </li>
            <li>
              <a href="#">Yahoo</a>
            </li>
          </ul>
        </li> */}
      </ul>
    </div>
  );
};

export default SideNav;

// const [distance, setDistance] = useState(0);
// const [selectedMake, setSelectedMake] = useState("");
// const [year, setYear] = useState(2000);
// const [price, setPrice] = useState("All Price");
// const [milage, setMilage] = useState("Any Milage");
// const [bodyStyle, setBodyStyle] = useState("Any Style");
// const [engine, setEngine] = useState("");
// const [fuleType, setFuleType] = useState("");
// const [transmission, setTransmission] = useState("");
// const [drivetrain, setDrivetrain] = useState("");
// const [bodyColor, setBodyColor] = useState("");
// const [interiorColor, setInteriorColor] = useState("");
// const [otherOptions, setOtherOptions] = useState("");

// // toggler expand state
// const togglerRef = useRef(null);
// const [isDistanceExpand, setIsDistanceExpand] = useState(false);
// const [isSelectedExpand, setIsSelectedMakeExpand] = useState(false);
// const [isYearExpand, setIsYearExpand] = useState(false);
// const [isPriceExpand, setIsPriceExpand] = useState(false);
// const [isMileExpand, setIsMileExpand] = useState(false);
// const [isBodyStyleExpand, setIsBodyStyleExpand] = useState(false);
// const [isEngineExpand, setIsEngineExpand] = useState(false);
// const [isFuelTypeExpand, setIsFuelTypeExpand] = useState(false);
// const [isTransmissionExpand, setIsTransmissionExpand] = useState(false);
// const [isBodyColorExpand, setIsBodyColorExpand] = useState(false);
// const [isInteriorColorExpand, setIsInteriorColorExpand] = useState(false);
// const [isDrivetrainExpand, setIsDrivetrainExpand] = useState(false);
// const [isOtherOptionsExpand, setIsOtherOptionsExpand] = useState(false);
// const handleDistanceClick = () => {
//   setIsDistanceExpand(!isDistanceExpand);
// };
// const handleSelectedClick = () => {
//   setIsSelectedMakeExpand(!isSelectedExpand);
// };
// const handleYearClick = () => {
//   setIsYearExpand(!isYearExpand);
// };
// const handlePriceClick = () => {
//   setIsPriceExpand(!isPriceExpand);
// };
// const handleMileClick = () => {
//   setIsMileExpand(!isMileExpand);
// };
// const handleBodyStyleClick = () => {
//   setIsBodyStyleExpand(!isBodyStyleExpand);
// };
// const handleEngineClick = () => {
//   setIsEngineExpand(!isEngineExpand);
// };
// const handleFuelTypeClick = () => {
//   setIsFuelTypeExpand(!isFuelTypeExpand);
// };
// const handleTransmissionClick = () => {
//   setIsTransmissionExpand(!isTransmissionExpand);
// };
// const handleBodyColorClick = () => {
//   setIsBodyColorExpand(!isBodyColorExpand);
// };
// const handleInteriorColorClick = () => {
//   setIsInteriorColorExpand(!isInteriorColorExpand);
// };
// const handleDrivetrainClick = () => {
//   setIsDrivetrainExpand(!isDrivetrainExpand);
// };
// const handleOtherOptionsClick = () => {
//   setIsOtherOptionsExpand(!isOtherOptionsExpand);
// };

// // All state change handlers
// const handleMakeChange = (event) => {
//   setSelectedMake(event.target.value);
// };
// const handleChange = (event) => {
//   setDistance(event.target.value);
// };
// const handleYearChange = (event) => {
//   setYear(event.target.value);
// };
// const handlePriceChange = (event) => {
//   setPrice(event.target.value);
// };
// const handleMilageChange = (event) => {
//   setMilage(event.target.value);
// };
// const handleBodyStyleChange = (event) => {
//   setBodyStyle(event.target.value);
// };

// useEffect(() => {
//   function handleClickOutside(event) {
//     const toggler = togglerRef.current;

//     if (isPriceExpanded && toggler && !toggler.contains(event.target)) {
//       setIsPriceExpanded(false);
//     }
//     if (isMileExpanded && toggler && !toggler.contains(event.target)) {
//       setIsMileExpanded(false);
//     }
//   }

//   document.addEventListener("mousedown", handleClickOutside);
//   return () => {
//     document.removeEventListener("mousedown", handleClickOutside);
//   };
// }, [isPriceExpanded, isMileExpanded]);
// console.log(BiChevronDown);
// console.log(BiChevronUp);

{
  /* <div className="by-condtion">
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









    <div className="by-distance">
      <div className="distance-card">
        <p>
          <strong>
            <MdLocationOn /> Location
          </strong>{" "}
          <br /> with in {distance} mile
        </p>

        <div className="range-slider-container">
          <input
            type="range"
            min="0"
            max="2500"
            step="5"
            value={distance}
            onChange={handleChange}
            className="range-slider"
            list="tickmarks"
          />
          <datalist id="tickmarks">
            {marks.map((mark) => (
              <option key={mark.value} value={mark.value}>
                {mark.label}
              </option>
            ))}
          </datalist>
        </div>
      </div>
    </div>
    
    
    
    
    {" "}
    <div className="by-make">
      <div className="toggler">
        <label htmlFor="car-select">Make</label>
        <select
          id="car-select"
          name="car-make"
          value={selectedMake}
          onChange={handleMakeChange}
        >
          <option value="">All Makes</option>
          {carMakes.map((make) => (
            <option key={make} value={make}>
              {make}
            </option>
          ))}
        </select>
      </div>
    </div>
    <div className="by-year">
      <div className="toggler">
        <label htmlFor="car-year">Year</label>
        <select name="car-year" value={year} onChange={handleYearChange}>
          <option>Select Year</option>
          
          {
            years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}

        </select>
      </div>
    </div>
    <div className={isPriceExpanded ? "by-price expand" : "by-price "}>
      <div className="toggler" onClick={handleClick}>
        <label htmlFor="price">Price</label>
        <div name="price">
          {isPriceExpanded ? (
            <>
              {price}
              <BiChevronUp />
            </>
          ) : (
            <>
              {price}
              <BiChevronDown />
            </>
          )}
        </div>
      </div>
      {isPriceExpanded && (
        <div className="container">
          <input
            type="range"
            min="0"
            max="150000"
            step="250"
            value={price}
            onChange={handlePriceChange}
            className="range-slider"
            list="tickmarks"
          />
        </div>
      )}
    </div>
    <div className={isMileExpanded ? "by-milage expand" : "by-milage "}>
      <div className="toggler" onClick={handleMileClick}>
        <label htmlFor="milage">Milage</label>
        <div name="milage">
          {isMileExpanded ? (
            <>
              {milage}
              <BiChevronUp />
            </>
          ) : (
            <>
              {milage}
              <BiChevronDown />
            </>
          )}
        </div>
      </div>
      {isMileExpanded && (
        <div className="container">
          <input
            type="range"
            min="0"
            max="500000"
            step="1000"
            value={milage}
            onChange={handleMilageChange}
            className="range-slider"
            list="tickmarks"
          />
        </div>
      )}
    </div>
    <div
      className={
        isBodyStyleExpanded ? "by-bodyStyle expand" : "by-bodyStyle "
      }
    >
      <div className="toggler" onClick={handleBodyStyleClick}>
        <label htmlFor="bodyStyle">Body Style</label>
        <div name="bodyStyle">
          {isBodyStyleExpanded ? (
            <>
              <BiChevronUp />
            </>
          ) : (
            <>
              <BiChevronDown />
            </>
          )}
        </div>
      </div>
      {isBodyStyleExpanded &&
        bodyStyleData?.map((style) => {
          return (
            <div className="body-label" key={style.id}>
              <label htmlFor={style.name}>
                {style.name}({style.total})
              </label>
              <div className="input-filed">
                <input type="checkbox" onChange={handleBodyStyleChange} />
              </div>
            </div>
          );
        })}
    </div>
    <div className="by-bodycolor">
      <div className="toggler">
        <label htmlFor="excolor">Exterior Color</label>
        <div name="excolor">
          {isBodyStyleExpanded ? (
            <>
              <BiChevronUp />
            </>
          ) : (
            <>
              <BiChevronDown />
            </>
          )}
        </div>
      </div>
      {isBodyStyleExpanded && (
        <>
          <div className="body-label">
            <label htmlFor="SUV">SUV</label>
            <div className="input-filed">
              <input type="checkbox" onChange={handleBodyStyleChange} />
            </div>
          </div>
          <div className="body-label">
            <label htmlFor="SUV">SUV</label>
            <div className="input-filed">
              <input type="checkbox" onChange={handleBodyStyleChange} />
            </div>
          </div>
          <div className="body-label">
            <label htmlFor="SUV">SUV</label>
            <div className="input-filed">
              <input type="checkbox" onChange={handleBodyStyleChange} />
            </div>
          </div>
          <div className="body-label">
            <label htmlFor="SUV">SUV</label>
            <div className="input-filed">
              <input type="checkbox" onChange={handleBodyStyleChange} />
            </div>
          </div>
        </>
      )}
    </div>
    <div className="by-engine">
      <div className="toggler">
        {" "}
        <label htmlFor="engintype">Engine Type</label>
        <div name="engintype">
          {isBodyStyleExpanded ? (
            <>
              <BiChevronUp />
            </>
          ) : (
            <>
              <BiChevronDown />
            </>
          )}
        </div>
      </div>
    </div>
    <div className="by-fueltype">
      <div className="toggler">
        <label htmlFor="fueltype">Fuel Type</label>
        <div name="fueltype">
          {isBodyStyleExpanded ? (
            <>
              <BiChevronUp />
            </>
          ) : (
            <>
              <BiChevronDown />
            </>
          )}
        </div>
      </div>
    </div>
    <div className="by-transmision">
      <div className="toggler">
        <label htmlFor="fueltype">Transmission</label>
        <div name="fueltype">
          {isBodyStyleExpanded ? (
            <>
              <BiChevronUp />
            </>
          ) : (
            <>
              <BiChevronDown />
            </>
          )}
        </div>
      </div>
    </div>
    <div className="by-interiorcolor">
      <div className="toggler">
        <label htmlFor="fueltype">Interior Color</label>
        <div name="fueltype">
          {isBodyStyleExpanded ? (
            <>
              <BiChevronUp />
            </>
          ) : (
            <>
              <BiChevronDown />
            </>
          )}
        </div>
      </div>
    </div>
    <div className="by-otheroptions">
      <div className="toggler">
        <label htmlFor="fueltype">Popular Options</label>
        <div name="fueltype">
          {isBodyStyleExpanded ? (
            <>
              <BiChevronUp />
            </>
          ) : (
            <>
              <BiChevronDown />
            </>
          )}
        </div>
      </div>
    </div> */
}
