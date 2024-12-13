import { useState } from "react";
import "./DataCardList.css";
import DataCard from "../DataCard/DataCard";
import Preloader from "../Preloader/Preloader";

function DataCardList({ onCardClick, results, setResults, isLoading }) {
  const [visibleCount, setVisibleCount] = useState(4);

  const visibleResults = results.slice(0, visibleCount);

  const resetResults = () => {
    setVisibleCount(4);
    return setResults([]);
  };

  return (
    <div className="data-card-list">
      <div className="data-card-list__header-container">
        <h1 className="data-card-list__header">Search results</h1>
        <button className="data-card-list__reset-btn" onClick={resetResults}>
          Reset
        </button>
      </div>
      {isLoading && (
        <div className="data-card-list__preloader">
          <Preloader />
          <h3 className="data-card-list__preloader-text">Loading data...</h3>
        </div>
      )}

      {!isLoading && results.length === 0 && (
        <div className="data-card-list__empty">
          <h3 className="data-card-list__empty-text">Nothing found.</h3>
        </div>
      )}
      <div className="data-card-list__container">
        {visibleResults.map((result, index) => (
          <DataCard
            key={index}
            species={result.species}
            ingredient={result.ingredient}
            reaction={result.reaction}
            frequency={result.frequency}
            onCardClick={() => onCardClick(result)}
          />
        ))}
      </div>
      {!isLoading && results.length > visibleCount && (
        <button
          className="data-card-list__show-more-btn"
          onClick={() => setVisibleCount((prevCount) => prevCount + 4)}
        >
          Show more
        </button>
      )}
    </div>
  );
}

export default DataCardList;
