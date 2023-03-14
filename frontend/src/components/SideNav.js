import { useEffect, useRef, useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { marks, carMakes, bodyStyleData } from "../assets/base/data";

const SideNav = () => {
  const [distance, setDistance] = useState(0);
  const [price, setPrice] = useState("All Price");
  const [milage, setMilage] = useState("Any Milage");
  const [bodyStyle, setBodyStyle] = useState(0);
  const [activeTab, setActiveTab] = useState(1);
  const tabNames = ["New", " Used", "Cirtified"];
  const [selectedMake, setSelectedMake] = useState("");
  const [year, setYear] = useState("");
  const togglerRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMileExpanded, setIsMileExpanded] = useState(false);
  const [isBodyStyleExpanded, setIsBodyStyleExpanded] = useState(false);
  const now = new Date();
  const currentYear = now.getFullYear();
  const years = Array.from({ length: currentYear - 1999 }, (_, i) => 2000 + i);

  const handleMakeChange = (event) => {
    setSelectedMake(event.target.value);
  };
  const handleChange = (event) => {
    setDistance(event.target.value);
  };
  const handleYearChange = (event) => {
    setYear(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleMilageChange = (event) => {
    setMilage(event.target.value);
  };
  const handleBodyStyleChange = (event) => {
    setBodyStyle(event.target.value);
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const handleToggleClick = () => {
    setIsExpanded(!isExpanded);
  };
  const handleMileToggleClick = () => {
    setIsMileExpanded(!isMileExpanded);
  };
  const handleBodyStyleToggleClick = () => {
    setIsBodyStyleExpanded(!isBodyStyleExpanded);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      const toggler = togglerRef.current;

      if (isExpanded && toggler && !toggler.contains(event.target)) {
        setIsExpanded(false);
      }
      if (isMileExpanded && toggler && !toggler.contains(event.target)) {
        setIsMileExpanded(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isExpanded, isMileExpanded]);

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
      </div>{" "}
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
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={isExpanded ? "by-price expand" : "by-price "}>
        <div className="toggler" onClick={handleToggleClick}>
          <label htmlFor="price">Price</label>
          <div name="price">
            {isExpanded ? (
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
        {isExpanded && (
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
        <div className="toggler" onClick={handleMileToggleClick}>
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
        <div className="toggler" onClick={handleBodyStyleToggleClick}>
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
      </div>
    </div>
  );
};

export default SideNav;
