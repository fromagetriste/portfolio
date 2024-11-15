import React from "react";
import AboutCard, { cardData } from "./AboutCard";

const AboutMe = () => {
  return (
    <section className="about-container">
      <h1 className="main-title">About me</h1>
      <div className="cards-container">
        {Object.keys(cardData).map((key) => (
          <AboutCard key={key} cardData={cardData[key]} />
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
