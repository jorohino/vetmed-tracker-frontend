import { React } from "react";
import "./Footer.css";

function Footer({}) {
  return (
    <div className="footer">
      <p className="footer__copyright">
        © 2024 VetMed Reaction Tracker, Powered by openFDA API
      </p>
      <div className="footer__links">
        <button className="footer__home-btn">Home</button>
        <button className="footer__t10-btn">TripleTen</button>
        <button className="footer__gh-btn"></button>
        <button className="footer__fb-btn"></button>
      </div>
    </div>
  );
}

export default Footer;
