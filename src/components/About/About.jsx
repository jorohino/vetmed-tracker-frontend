import author from "../../assets/author.jpg";
import "./About.css";

function About() {
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
          With nearly a decade of experience working in a veterinary industry,
          <strong> Josh Hinostroza</strong>, the creator of the VetMed Reaction
          Tracker, combines a deep love for animals and a passion for helping
          people. Inspired by the need for accessible, data-driven tools to
          interpret potential drug interactions, he developed this app as a
          capstone project for his software engineering bootcamp with TripleTen.
          As a developer, his primary focus is on creating practical,
          user-friendly applications that serve and engage everyday people,
          rather than abstract frameworks for other developers. Skilled in React
          and API integration, he enjoys building dynamic, interactive, and
          data-driven projects that are both fun and educational. A former
          educator, he aims to create applications that not only inform but also
          inspire curiosity and learning. For him, coding is a field of endless
          creativity and growth, offering the opportunity to learn something new
          every day while delivering tangible solutions that can assist,
          educate, and entertain.
        </p>
      </div>
    </div>
  );
}

export default About;
