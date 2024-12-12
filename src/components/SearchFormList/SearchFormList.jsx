import React from "react";
import "./SearchFormList.css";
import SearchFormResult from "../SearchFormResult/SearchFormResult";

export const SearchFormList = ({ results = [], onSuggestionClick }) => {
  const ingredientNames = [];

  console.log("SearchFormList results: ", results);

  const apiResults = Array.isArray(results.results) ? results.results : results;

  apiResults.forEach((result) => {
    if (result.drug) {
      result.drug.forEach((drug) => {
        drug.active_ingredients.forEach((ingredient) => {
          if (!ingredientNames.includes(ingredient.name)) {
            ingredientNames.push(ingredient.name);
          }
        });
      });
    }
  });

  return (
    <div className="search-form-list">
      {ingredientNames.map((name, index) => (
        <SearchFormResult key={index} name={name} onClick={onSuggestionClick} />
      ))}
    </div>
  );
};

export default SearchFormList;
