import { React } from "react";
import logo from "../../assets/logo.png";
import "./Navigation.css";

function Navigation({}) {
  return (
    <div className="navigation">
      <button className="navigation__logo-container">
        <div className="navigation__logo"></div>
        <h1 className="navigation__title">VetMed Reaction Tracker</h1>
      </button>
      <div className="navigation__btn-container">
        <button className="navigation__home-btn">Home</button>
        <button className="navigation__data-btn">Data</button>
      </div>
    </div>
  );
}

export default Navigation;
