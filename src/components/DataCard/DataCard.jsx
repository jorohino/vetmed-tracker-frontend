import { React } from "react";
import "./DataCard.css";

function DataCard({ data, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(data);
  };

  return (
    <div className="data-card" onClick={handleCardClick}>
      <div className="data-card__text-container">
        <p className="data-card__species">CANINE</p>
        <h1 className="data-card__drug">Ivermectin</h1>
        <p className="data-card__reaction">Vomiting</p>
        <p className="data-card__frequency">
          1345 REPORTS OUT OF 14567 PATIENTS
        </p>
      </div>
    </div>
  );
}

export default DataCard;
