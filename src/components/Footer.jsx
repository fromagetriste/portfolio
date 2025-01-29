import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="top-arrow">
        <Link to="NavIdForScroll" smooth={true} duration={500}>
          <img
            className="footer-arrow"
            src="/icons/footer/top-arrow.svg"
            alt="arrow to top page"
          />
        </Link>
      </div>
      <div className="footer-bar"></div>
    </div>
  );
};

export default Footer;
