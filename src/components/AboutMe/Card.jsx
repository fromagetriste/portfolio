import React from "react";
import calculateAge from "./CalculateAge";

const myAge = calculateAge("1992-03-14");

export const cardData = {
  firstCard: {
    firstTitle: "French citizen",
    secondTitle: `${myAge} years old`,
    image: "",
  },
  secondCard: {
    firstTitle: "10 years in",
    secondTitle: "International Trade",
    image: "",
  },
  thirdCard: {
    firstTitle: "Loves Tech,",
    secondTitle: "sports and nature",
    image: "",
  },
};

const AboutCard = ({ cardData }) => {
  return (
    <div className="card">
      <h4>
        {cardData.firstTitle} <br />
        {cardData.secondTitle}
      </h4>
    </div>
  );
};

export default AboutCard;
