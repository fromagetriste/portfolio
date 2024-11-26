import React, { useState } from "react";

const MyProjects = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleRadioChange = () => {
    console.log("handleRadioChange has been clicked");
  };

  return (
    <section className="container-for-margins">
      <div className="title">
        My <span id="projects-gradient">Projects</span>
      </div>
      <div className="sub-title">Here are my 4 highlighted projects</div>
      <div className="my-projects-container">
        <div className="left">
          <div className="buttons-container">
            <input
              type="radio"
              id="option1"
              value="option1"
              checked={"to be filled"}
              onChange={() => handleRadioChange("option1")}
            />
            <label htmlFor="option1">Button 1 </label>
            <input
              type="radio"
              id="option2"
              value="option2"
              checked={"to be filled"}
              onChange={() => handleRadioChange("option2")}
            />
            <label htmlFor="option1">Button 2 </label>
            <input
              type="radio"
              id="option3"
              value="option3"
              checked={"to be filled"}
              onChange={() => handleRadioChange("option3")}
            />
            <label htmlFor="option1">Button 3 </label>
            <input
              type="radio"
              id="option4"
              value="option4"
              checked={"to be filled"}
              onChange={() => handleRadioChange("option4")}
            />
            <label htmlFor="option1">Button 4 </label>
          </div>
          <div className="description">description</div>
        </div>
        <div className="right"></div>
      </div>
    </section>
  );
};

export default MyProjects;
