import { React, useRef, useState } from "react";
import "./SearchForm.css";
import { FaSearch } from "react-icons/fa";
import { getSuggestions, getData } from "../../utils/adaeApi";

function SearchForm({
  setResults,
  setSuggestionResults,
  inputValue,
  setInputValue,
}) {
  const [selectedSpecies, setSelectedSpecies] = useState("");
  const timeoutRef = useRef(null);

  const handleChange = (value) => {
    setInputValue(value);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (value.trim() !== "") {
      timeoutRef.current = setTimeout(() => {
        getSuggestions(value)
          .then((results) => setSuggestionResults(results))
          .catch((err) => {
            if (err.message.includes("404")) {
              console.warn("No results found for partial input: ", value);
            } else {
              console.error("Unexpected error: ", err);
            }
          });
      }, 300);
    } else {
      setSuggestionResults([]);
    }
  };

  const handleSpeciesSelect = (species) => {
    setSelectedSpecies(species);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue.trim()) {
      console.alert("No ingredient name provided");
      return;
    }

    getData(inputValue, selectedSpecies)
      .then((results) => {
        console.log("Search results: ", results);
        setResults(results);
      })
      .catch((err) => {
        console.error("Error performing search: ", err);
      });
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
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
          <label>
            <input
              className="search-form__dropdown-radio-btns"
              type="radio"
              name="species"
              value=""
              checked={selectedSpecies === ""}
              onChange={() => setSelectedSpecies("")}
            />
            All
          </label>
          {[
            "Dog",
            "Cat",
            "Horse",
            "Cattle",
            "Pig",
            "Sheep",
            "Goat",
            "Chicken",
          ].map((species) => (
            <label key={species}>
              <input
                className="search-form__dropdown-radio-btns"
                type="radio"
                name="species"
                value={species}
                checked={selectedSpecies === species}
                onChange={() => setSelectedSpecies(species)}
              />
              {species}
            </label>
          ))}
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
