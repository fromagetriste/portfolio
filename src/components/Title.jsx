import React from "react";

const Title = () => {
  window.addEventListener("load", function () {
    document.querySelector(".title-container").classList.add("fade-in");
  });

  return (
    <div className="title-container">
      <h1 className="main-title">
        Meet your next reliable <br /> <span id="React-JS">React JS</span>{" "}
        developper.
      </h1>
      <h3 className="second-title">
        I am a disciplined and self-taught coder.
      </h3>
    </div>
  );
};

export default Title;
