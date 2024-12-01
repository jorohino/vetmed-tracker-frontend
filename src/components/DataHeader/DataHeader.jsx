import { React } from "react";
import "./DataHeader.css";
import Navigation from "../Navigation/Navigation";

function DataHeader({}) {
  return (
    <header className="data-header">
      <div className="data-header__nav-container">
        <Navigation />
      </div>
      <div className="data-header__text-container">
        <p className="data-header__subtitle">Disclaimer:</p>
        <h1 className="data-header__title">Search for data</h1>
      </div>
    </header>
  );
}

export default DataHeader;
