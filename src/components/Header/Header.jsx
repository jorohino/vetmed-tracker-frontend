import { React } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { FaShieldDog } from "react-icons/fa6";

function Header({}) {
  return (
    <header className="header">
      <div className="header__nav-container">
        <Navigation />
      </div>
      <div className="header__text-container">
        <h1 className="header__title">Using the VetMed Reaction Tracker</h1>
        <p className="header__subtitle">
          This application provides an easy-to-use platform for exploring
          reports of adverse reactions to veterinary drugs in animals. Whether
          you are a member of the veterinary industry, researcher, or simply a
          curious pet owner, this app allows you to dive into documented cases
          to better understand how animals respond to specific medications.
        </p>
        <p className="header__subtitle">
          The tracker pulls data from the Animal & Veterinary API, a subset of
          the openFDA API, specifically the Animal Drug Adverse Events (ADAE)
          dataset -- an ongoing database of reports extending back to 1987.
        </p>
        <p className="header__subtitle">
          In order to streamline information, current data presented in this
          application includes:
        </p>
        <ul className="header__list">
          <li>Species</li>
          <li>Drug information</li>
          <li>Adverse reactions</li>
          <li>Statistics on reaction occurrences</li>
        </ul>
      </div>
      <div className="header__link-container">
        <Link to="/data">
          <button className="header__link">
            Explore the Database
            <br></br>
            <FaShieldDog />
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
