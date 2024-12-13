import { React } from "react";
import "./DataCard.css";

function DataCard({ onCardClick, species, ingredient, reaction, frequency }) {
  const handleCardClick = () => {
    onCardClick({ species, ingredient, reaction, frequency });
  };

  return (
    <div className="data-card" onClick={handleCardClick}>
      <div className="data-card__text-container">
        <p className="data-card__species">{species}</p>
        <h1 className="data-card__ingredient">{ingredient}</h1>
        <p className="data-card__reaction">{reaction}</p>
        <p className="data-card__frequency">{frequency}</p>
      </div>
    </div>
  );
}

export default DataCard;
