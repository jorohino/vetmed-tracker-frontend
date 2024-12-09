import { React, useState } from "react";
import "./SearchForm.css";
import { FaSearch } from "react-icons/fa";

function SearchForm({ onSearch }) {
  const [input, setInput] = useState("");
  const handleInputChange = (e) => {
    setInput(e.target.value);
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
        value={input}
        onChange={handleInputChange}
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
