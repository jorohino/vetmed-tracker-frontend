import { React } from "react";
import "./SearchForm.css";

function SearchForm({}) {
  return (
    <div className="search-form">
      <input
        className="search-form__input"
        type="text"
        placeholder="Enter drug name"
      ></input>
      <button className="search-form__submit" type="submit">
        Search
      </button>
    </div>
  );
}

export default SearchForm;
