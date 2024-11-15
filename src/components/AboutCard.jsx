import React from "react";

function calculateAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);

  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  const dayDiff = today.getDate() - birth.getDate();

  // Adjust if the current date hasn't reached the birth date yet in the current year
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age;
}

// Use your birthdate
const myAge = calculateAge("1992-03-14");
// console.log("Your age is:", myAge);

export const cardData = {
  firstCard: {
    firstTitle: "French citizen",
    secondTitle: `${myAge} years old`,
  },
  secondCard: {
    firstTitle: "10 years in",
    secondTitle: "International Trade",
  },
  thirdCard: {
    firstTitle: "Loves Tech,",
    secondTitle: "sports and nature",
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
