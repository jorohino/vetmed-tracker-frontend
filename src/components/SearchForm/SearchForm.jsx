import { React, useRef } from "react";
import "./SearchForm.css";
import { FaSearch } from "react-icons/fa";
import { getSuggestions } from "../../utils/adaeApi";

function SearchForm({ onSearch, setResults, inputValue, setInputValue }) {
  const timeoutRef = useRef(null);

  const handleChange = (value) => {
    setInputValue(value);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (value.trim() !== "") {
      timeoutRef.current = setTimeout(() => {
        getSuggestions(value)
          .then((results) => setResults(results))
          .catch((err) => {
            if (err.message.includes("404")) {
              console.warn("No results found for partial input: ", value);
            } else {
              console.error("Unexpected error: ", err);
            }
          });
      }, 300);
    } else {
      setResults([]);
    }
  };

  const handleSpeciesSelect = (species) => {
    if (onSearch) {
      onSearch({ species });
    }
  };

  return (
    <div className="search-form">
      <input
        className="search-form__input"
        type="text"
        placeholder="Enter drug name"
        value={inputValue}
        onChange={(e) => handleChange(e.target.value)}
      ></input>
      <div className="search-form__dropdown-container">
        <button className="search-form__submit" type="submit">
          Search <span></span>
          <FaSearch />
        </button>
        <div className="search-form__dropdown">
          <ul>
            <li>Dog</li>
            <li>Cat</li>
            <li>Horse</li>
            <li>Cattle</li>
            <li>Pig</li>
            <li>Sheep</li>
            <li>Goat</li>
            <li>Chicken</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
