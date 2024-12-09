import { React, useRef } from "react";
import "./SearchForm.css";
import { FaSearch } from "react-icons/fa";

function SearchForm({ onSearch, setResults, inputValue, setInputValue }) {
  const timeoutRef = useRef(null);

  const fetchData = (value) => {
    const encodedValue = encodeURIComponent(value);

    fetch(
      `https://api.fda.gov/animalandveterinary/event.json?search=drug.active_ingredients.name:${encodedValue}`
    )
      .then((res) => res.json())
      .then((json) => {
        const results = (json.results || []).filter((result) => {
          return (
            result.drug &&
            result.drug.some((drug) =>
              drug.active_ingredients.some(
                (ingredient) =>
                  typeof ingredient.name === "string" &&
                  ingredient.name.toLowerCase().includes(value.toLowerCase())
              )
            )
          );
        });
        console.log("Filtered Results:", results); // Debugging output
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInputValue(value);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (value.trim() !== "") {
      timeoutRef.current = setTimeout(() => {
        fetchData(value);
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
