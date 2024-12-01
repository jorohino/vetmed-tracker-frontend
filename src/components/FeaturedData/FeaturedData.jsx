import { React } from "react";
import "./FeaturedData.css";
import DataCard from "../DataCard/DataCard";

function FeaturedData({}) {
  return (
    <div className="news-card-list">
      <h1 className="news-card-list__header">Featured Data:</h1>
      <div className="news-card-list__container"></div>
    </div>
  );
}

export default FeaturedData;
