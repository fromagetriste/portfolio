import React from "react";
import calculateAge from "./CalculateAge";

const myAge = calculateAge("1992-03-14");

export const cardData = {
  firstCard: {
    firstTitle: "French citizen",
    secondTitle: `${myAge} years old`,
    image: "/icons/about/france.svg",
  },
  secondCard: {
    firstTitle: "10 years in",
    secondTitle: "International Trade",
    image: "/icons/about/boat.svg",
  },
  thirdCard: {
    firstTitle: "Loves Tech,",
    secondTitle: "Sports and Nature",
    image: "/icons/about/shoe.svg",
  },
};

const AboutCard = ({ cardData }) => {
  return (
    <div className="card">
      <div className="about-logo-container">
        <img
          className="about-logo"
          src={cardData.image}
          alt={`logo of ${cardData.firstTitle}`}
        />
      </div>
      <h4>
        {cardData.firstTitle} <br />
        {cardData.secondTitle}
      </h4>
    </div>
  );
};

export default AboutCard;
