import { React, useState } from "react";
import "./DataHeader.css";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import SearchFormList from "../SearchFormList/SearchFormList";

function DataHeader() {
  const [results, setResults] = useState([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <header className="data-header">
      <div className="data-header__nav-container">
        <Navigation />
      </div>
      <div className="data-header__text-container">
        <p className="data-header__subtitle">Disclaimer:</p>
        <p className="data-header__text">
          The data provided in this application is for informational purposes
          only and is sourced from documented veterinary adverse event reports.
          It should not be used as a substitute for professional veterinary
          advice, diagnosis, or treatment. Always consult a licensed
          veterinarian for specific concerns regarding animal health or
          medication use. The creators of this app are not responsible for any
          decisions made based on the information provided.
        </p>
        <h1 className="data-header__title">Search for data</h1>
        <div className="data-header__search-container">
          <SearchForm
            setResults={setResults}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
          <SearchFormList
            results={results}
            onSuggestionClick={(name) => setInputValue(name)}
          />
        </div>
      </div>
    </header>
  );
}

export default DataHeader;
