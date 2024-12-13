import { React, useRef, useState } from "react";
import "./SearchForm.css";
import { FaSearch } from "react-icons/fa";

function SearchForm({
  handleSearch,
  handleSuggestionSearch,
  selectedSpecies,
  setSelectedSpecies,
  inputValue,
  setInputValue,
}) {
  const handleChange = (value) => {
    setInputValue(value);
    handleSuggestionSearch(value);
  };

  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <input
        className="search-form__input"
        type="text"
        placeholder="Enter drug name"
        value={inputValue}
        onChange={(e) => handleChange(e.target.value)}
        required
      ></input>
      <div className="search-form__dropdown-container">
        <button
          className="search-form__submit"
          type="button"
          onClick={handleSearch}
        >
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
