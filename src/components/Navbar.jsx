import React from "react";
import DarkModeButton from "./DarkModeButton";
import GitHubButton from "./GitHubButton";
import LinkedInButton from "./LinkedInButton";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="left-group">
        <img
          className="logo-dev"
          src="../../public/icons/web-icon.svg"
          alt="dev-icon"
        />
        <div className="text">Damien Gravelle</div>
      </div>
      <ul className="middle-group">
        <li>Home</li>
        <li>Stack</li>
        <li>Demo</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <div className="right-group">
        <DarkModeButton isDarkMode={true} />
        <div className="vertical-bar"></div>
        <LinkedInButton />
        <GitHubButton />
      </div>
    </nav>
  );
};

export default Navbar;
