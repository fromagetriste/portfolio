import React from "react";

const DarkModeButton = ({ isDarkMode }) => {
  return (
    <button className="logo-darkmode">
      {isDarkMode ? (
        <img
          className="logo-darkmode"
          src="/icons/night-icon.svg"
          alt="night-icon"
        />
      ) : (
        <img
          className="logo-darkmode"
          src="/icons/day-icon.svg"
          alt="day-icon"
        />
      )}
    </button>
  );
};

export default DarkModeButton;
