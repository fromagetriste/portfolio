import React from "react";
import Card, { cardData } from "./Card";
import Title from "./Title";

const AboutMe = () => {
  return (
    <section className="about-container" id="AboutIdForScroll">
      <Title />
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
