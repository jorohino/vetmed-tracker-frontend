import { React } from "react";
import author from "../../assets/author.jpg";
import "./About.css";

function About({}) {
  return (
    <div className="about">
      <img
        className="about__author-image"
        src={author}
        alt="Author: Josh H."
      ></img>
      <div className="about__author-info">
        <h1 className="about__title">About the author</h1>
        <p className="about__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}

export default About;
