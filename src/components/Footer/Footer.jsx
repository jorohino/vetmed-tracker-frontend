import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p className="footer__copyright">
        © 2024 VetMed Reaction Tracker,{" "}
        <a href="https://open.fda.gov/">Powered by openFDA API</a>
      </p>
      <div className="footer__links">
        <Link to="/">
          <button className="footer__home-btn">Home</button>
        </Link>
        <a href="https://tripleten.com/">
          <button className="footer__t10-btn">TripleTen</button>
        </a>
        <a href="https://github.com/jorohino">
          <button className="footer__gh-btn"></button>
        </a>
        <a href="https://www.facebook.com/">
          <button className="footer__fb-btn"></button>
        </a>
      </div>
    </div>
  );
}

export default Footer;
