import { React } from "react";
import "./FeaturedData.css";
import DataCard from "../DataCard/DataCard";

function FeaturedData({ onCardClick }) {
  return (
    <div className="featured-data">
      <h1 className="featured-data__header">Featured Data:</h1>
      <div className="featured-data__container">
        <DataCard onCardClick={onCardClick}></DataCard>
        <DataCard onCardClick={onCardClick}></DataCard>
        <DataCard onCardClick={onCardClick}></DataCard>
        <DataCard onCardClick={onCardClick}></DataCard>
      </div>
    </div>
  );
}

export default FeaturedData;
