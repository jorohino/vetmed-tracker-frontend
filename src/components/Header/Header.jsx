import { React } from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({}) {
  return (
    <header className="header">
      <div className="header__nav-container">
        <Navigation />
      </div>
      <div className="header__text-container">
        <h1 className="header__title">
          Using the Veterinary Adverse Event Tracker
        </h1>
        <p className="header__subtitle">[Explanation of the app and API]</p>
      </div>
    </header>
  );
}

export default Header;
