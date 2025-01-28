import React, { useState } from "react";

const RadioDescription = () => {
  const [langue, setLangue] = useState("english");

  const handleLangueChange = (e) => {
    setLangue(e.target.value);
    // console.log(e.target.value);
  };

  const myText = {
    english: {
      title1: "How is it like working with me ?",
      answer1: `I am reliable and always happy to help. I am not afraid of
    delivering clean code under tight deadlines and I've worked under
    pressure in the past. Although I can work independently, I prefer
    being part of a team. At work, I'm dedicated and hardworking, but I
    also enjoy bringing humor to the team.`,
      title2: "Why Web Development ?",
      answer2: `I've always tended to improve our process, with communication and
    also tools like Excel. Then I felt limited so I learned Python, and
    I once needed to deploy an executable program so I
    hosted with Django, and fell in love with web development. So I
    learned JS and React. I would say I'm very curious about any tech in
    general, from hardware to user's experience.`,
    },
    francais: {
      title1: "Le travail avec moi au quotidien ?",
      answer1: `I am reliable and always happy to help. I am not afraid of
    delivering clean code under tight deadlines and I've worked under
    pressure in the past. Although I can work independently, I prefer
    being part of a team. At work, I'm dedicated and hardworking, but I
    also enjoy bringing humor to the team.`,
      title2: "Pourquoi le développement web ?",
      answer2: `I've always tended to improve our process, with communication and
    also tools like Excel. Then I felt limited so I learned Python, and
    I once needed to deploy an executable program so I
    hosted with Django, and fell in love with web development. So I
    learned JS and React. I would say I'm very curious about any tech in
    general, from hardware to user's experience.`,
    },
    espanol: {
      title1: "Como es trabajar conmigo",
      answer1: `I am reliable and always happy to help. I am not afraid of
    delivering clean code under tight deadlines and I've worked under
    pressure in the past. Although I can work independently, I prefer
    being part of a team. At work, I'm dedicated and hardworking, but I
    also enjoy bringing humor to the team.`,
      title2: "Why Web Development ?",
      answer2: `I've always tended to improve our process, with communication and
    also tools like Excel. Then I felt limited so I learned Python, and
    I once needed to deploy an executable program so I
    hosted with Django, and fell in love with web development. So I
    learned JS and React. I would say I'm very curious about any tech in
    general, from hardware to user's experience.`,
    },
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
          <label htmlFor="english">
            <input
              id="english"
              type="radio"
              value="english"
              checked={langue === "english"}
              onChange={handleLangueChange}
              style={{ display: "none" }}
            />
            <img
              className="radio-drapeaux"
              src="/public/icons/about/uk.svg"
              alt="english flag"
            />
          </label>
          <label htmlFor="francais">
            <input
              id="francais"
              type="radio"
              value="francais"
              checked={langue === "francais"}
              onChange={handleLangueChange}
              style={{ display: "none" }}
            />
            <img
              className="radio-drapeaux"
              src="/public/icons/about/fr.svg"
              alt="french flag"
            />
          </label>
          <label htmlFor="espanol">
            <input
              id="espanol"
              type="radio"
              value="espanol"
              checked={langue === "espanol"}
              onChange={handleLangueChange}
              style={{ display: "none" }}
            />
            <img
              className="radio-drapeaux"
              src="/public/icons/about/es.svg"
              alt="spanish flag"
            />
          </label>
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
