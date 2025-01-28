import React, { useState } from "react";
import { myText, flagz } from "./myText";

const RadioDescription = () => {
  const [langue, setLangue] = useState("english");

  const handleLangueChange = (e) => {
    setLangue(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <>
      {/* ____________________________________________ */}
      <div className="about-me-why-container">
        {/* ____________________________________________ */}

        <div className="about-me-why">
          <div className="about-title">{myText[langue].title1}</div>
          <p className="abt-description">{myText[langue].answer1}</p>
        </div>
        {/* ____________________________________________ */}

        <div className="abt-flags">
          {flagz.map((flag) => (
            <label
              key={flag.tongue}
              htmlFor={flag.tongue}
              className={langue === flag.tongue ? "isChecked" : "notChecked"}
            >
              <input
                id={flag.tongue}
                value={flag.tongue}
                type="radio"
                checked={langue === flag.tongue}
                onChange={handleLangueChange}
                style={{ display: "none" }}
              />
              <img className="radio-drapeaux" src={flag.src} alt="flag" />
            </label>
          ))}
        </div>
        {/* ____________________________________________ */}

        <div className="about-me-why">
          <div className="about-title">{myText[langue].title2}</div>
          <p className="abt-description">{myText[langue].answer2}</p>
        </div>
        {/* ____________________________________________ */}
      </div>
    </>
  );
};

export default RadioDescription;
