import React from "react";
import Card, { cardData } from "./Card";
import Title from "./Title";
import AboutDescription from "./AboutDescription";

const AboutMe = () => {
  return (
    <section className="about-container">
      <Title />
      {/* mapping and rendering cards about me : */}
      <div className="cards-container">
        {Object.keys(cardData).map((key) => (
          <Card key={key} cardData={cardData[key]} />
        ))}
      </div>
      <AboutDescription />
    </section>
  );
};

export default AboutMe;
