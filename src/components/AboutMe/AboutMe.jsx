import React from "react";
import Card, { cardData } from "./Card";

const AboutMe = () => {
  return (
    <section className="about-container">
      <h1 className="main-title">About me</h1>
      {/* mapping and rendering cards about me : */}
      <div className="cards-container">
        {Object.keys(cardData).map((key) => (
          <Card key={key} cardData={cardData[key]} />
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
