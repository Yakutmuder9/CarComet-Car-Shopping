import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { stateOptions } from "../assets/base/data";
import axios from "axios";

const CarVINandTrim = [
  {
    vin: "1GCEC14X44Z224678",
    trims: [
      {
        id: 1,
        name: "Base",
        year: 2004,
        make: "Chevrolet",
        model: "Silverado 1500",
        body: "Regular Cab Pickup",
        engine: "4.3L V6",
        transmission: "4-speed automatic",
        drive_type: "RWD",
      },
      {
        id: 2,
        name: "LS",
        year: 2004,
        make: "Chevrolet",
        model: "Silverado 1500",
        body: "Regular Cab Pickup",
        engine: "4.8L V8",
        transmission: "4-speed automatic",
        drive_type: "RWD",
      },
      {
        id: 3,
        name: "LT",
        year: 2004,
        make: "Chevrolet",
        model: "Silverado 1500",
        body: "Regular Cab Pickup",
        engine: "5.3L V8",
        transmission: "4-speed automatic",
        drive_type: "RWD",
      },
    ],
  },
  {
    vin: "2GCEC14X44Z224678",
    trims: [
      {
        id: 1,
        name: "Camrey",
        year: 2004,
        make: "Chevrolet",
        model: "Silverado 1500",
        body: "Regular Cab Pickup",
        engine: "4.3L V6",
        transmission: "4-speed automatic",
        drive_type: "RWD",
      },
      {
        id: 2,
        name: "Corolla",
        year: 2004,
        make: "Chevrolet",
        model: "Silverado 1500",
        body: "Regular Cab Pickup",
        engine: "4.8L V8",
        transmission: "4-speed automatic",
        drive_type: "RWD",
      },
      {
        id: 3,
        name: "Avalon",
        year: 2004,
        make: "Chevrolet",
        model: "Silverado 1500",
        body: "Regular Cab Pickup",
        engine: "5.3L V8",
        transmission: "4-speed automatic",
        drive_type: "RWD",
      },
    ],
  },
];

export const MakeForm = () => {
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [trim, setTrim] = useState("");
  const [visibleOptions, setVisibleMakeOptions] = useState(false);
  const now = new Date();
  const currentYear = now.getFullYear();
  const years = Array.from({ length: currentYear - 1999 }, (_, i) => 2000 + i);

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleMakeChange = (event) => {
    setMake(event.target.value);
  };
  const handleModelChange = (event) => {
    setModel(event.target.value);
  };
  const handleTrimChange = (event) => {
    setTrim(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(year, make, model, trim);
  };
  console.log(year);
  return (
    <div className="by-vin">
      <form onSubmit={handleFormSubmit}>
        <select name="year" value={year} onChange={handleYearChange}>
          <option >Select Year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        {year > 0 && (
          <select name="make" value={make} onChange={handleMakeChange}>
            <option >Select Make *</option>
            <option value="13">Name</option>
            <option value="15">Name</option>
            {/* {visibleOptions.map((make) => (
              <option key={make} value={make}>
                {make}
              </option>
            ))} */}
          </select>
        )}
        {make > 0 && (
          <select name="model" value={model} onChange={handleModelChange}>
            <option >Select Model</option>
            <option value="12">Name</option>
            <option value="13">Name</option>
            {/* {visibleOptions.map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))} */}
          </select>
        )}
        {model > 0 && (
          <select name="trim" value={trim} onChange={handleTrimChange}>
            <option>Select Trim </option>
            <option value="12">Name</option>
            <option value="13">Name</option>
            {/* {visibleOptions.map((trim) => (
              <option key={trim} value={trim}>
                {trim}
              </option>
            ))} */}
          </select>
        )}
        <br />
        <button type="submit" className="btn" disabled={!(trim > 0)}>
          Get You car Offer
        </button>
      </form>
    </div>
  );
};

export const VINForm = () => {
  const [vin, setVin] = useState("");
  const [trims, setTrims] = useState([]);
  const [selectedTrim, setSelectedTrim] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showTrimSelect, setShowTrimSelect] = useState(false);

  useEffect(() => {
    if (!vin) {
      setShowTrimSelect(false);
      return;
    }
    setIsLoading(true);
    axios
      // .get(`https://example.com/api/cars?vin=${vin}`)
      .get(`https://jsonplaceholder.typicode.com/todos`)
      .then((response) => {
        const matchingTrims = CarVINandTrim.filter((obj) => obj.vin === vin);
        if (matchingTrims.length > 0) {
          const firstMatch = matchingTrims.find((tr) => tr.trims);

          setTrims(firstMatch.trims);
          setSelectedTrim(firstMatch.trims[0]);
          setShowTrimSelect(true);
        } else {
          setShowTrimSelect(false);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [vin]);

  const handleVinChange = (event) => {
    setVin(event.target.value);
  };

  const handleTrimChange = (event) => {
    setSelectedTrim(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // setIsLoading(true);
    // axios
    //   .get(`https://example.com/api/cars?vin=${vin}`)
    //   .then((response) => {
    //     setTrims(response.data.trims);
    //     setSelectedTrim(response.data.trims[0]);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   })
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
    console.log(vin, selectedTrim);
  };

  return (
    <div className="by-vin">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          id="vin"
          name="vin"
          value={vin}
          onChange={handleVinChange}
          placeholder="VIN *"
        />
        <br />

        {showTrimSelect && trims.length > 0 && (
          <>
            <select
              id="trim"
              name="trim"
              value={selectedTrim}
              onChange={handleTrimChange}
            >
              {trims.map((trim) => (
                <option key={trim.id} value={trim.name}>
                  {trim.name}
                </option>
              ))}
            </select>
            <br />
          </>
        )}

        <button
          className="btn"
          type="submit"
          disabled={!showTrimSelect || isLoading}
        >
          {isLoading ? "Loading..." : "Get You car Offer"}
        </button>
      </form>
    </div>
  );
};

export const PlateForm = () => {
  const [selectedState, setSelectedState] = useState("");
  const [plate, setPlate] = useState("");

  const handleVinChange = (event) => {
    setPlate(event.target.value);
  };
  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(plate, selectedState);
  };

  return (
    <div className="by-vin">
      <form onSubmit={handleFormSubmit}>
        <input
          placeholder="License Plate *"
          value={plate}
          onChange={handleVinChange}
        />
        <select
          id="state-select"
          value={selectedState}
          onChange={handleStateChange}
        >
          {stateOptions.map((state) => (
            <option key={state.value} value={state.value}>
              {state.label}
            </option>
          ))}
        </select>
        <br />
        <button type="submit" className="btn">
          Get You car Offer
        </button>
      </form>
    </div>
  );
};

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([
    "Toyota Camrey",
    "Honda CRV",
    "Marchedis",
    "RAM Truck",
    "Volvo",
  ]);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    inputRef.current.focus();
    suggestionsRef.current.style.display = "none";
  };

  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(inputValue.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target)
      ) {
        suggestionsRef.current.style.display = "none"; // hide the suggestions
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className="container">
      <div className="search-cars-field">
        <div className="input-wrapper">
          <input
            type="text"
            id="input-field"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Find your loved car by make , model and keyword"
            ref={inputRef}
          />
          {inputValue && (
            <ul className="suggestions" ref={suggestionsRef}>
              {filteredSuggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}

          <button onClick={() => console.log("bthClicked!")}>
            <FaSearch /> Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
