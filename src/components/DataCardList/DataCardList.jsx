import { React, useState } from "react";
import "./DataCardList.css";
import DataCard from "../DataCard/DataCard";

function DataCardList({ onCardClick, results, setResults }) {
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
      <div className="data-card-list__container">
        {visibleResults.map((result, index) => (
          <DataCard
            key={index}
            species={result.species}
            ingredient={result.ingredient}
            reaction={result.reaction}
            frequency={result.frequency}
            onCardClick={onCardClick}
          />
        ))}
      </div>
      {results.length > visibleCount && (
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
