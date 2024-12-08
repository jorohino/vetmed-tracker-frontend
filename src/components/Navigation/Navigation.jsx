import { React } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navigation.css";

function Navigation({}) {
  return (
    <div className="navigation">
      <Link to="/">
        <button className="navigation__logo-container">
          <div className="navigation__logo"></div>
          <h1 className="navigation__title">VetMed Reaction Tracker</h1>
        </button>
      </Link>
      <div className="navigation__btn-container">
        <Link to="/">
          <button className="navigation__home-btn">Home</button>
        </Link>
        <Link to="/data">
          <button className="navigation__data-btn">Data</button>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
