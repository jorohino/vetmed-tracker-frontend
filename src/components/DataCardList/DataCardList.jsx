import { React } from "react";
import "./DataCardList.css";
import DataCard from "../DataCard/DataCard";

function DataCardList({}) {
  return (
    <div className="data-card-list">
      <h1 className="data-card-list__header">Search results</h1>
      <div className="data-card-list__container">
        <DataCard></DataCard>
        <DataCard></DataCard>
        <DataCard></DataCard>
      </div>
      <button className="data-card-list__show-more-btn">Show more</button>
    </div>
  );
}

export default DataCardList;
