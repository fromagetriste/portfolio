import React from "react";

const AboutDescription = () => {
  return (
    <div className="about-me-why-container">
      <div className="about-me-why">
        <div className="about-title">How is it like working with me ?</div>
        <p className="abt-description">
          I am reliable and always happy to help. I am not afraid of delivering
          clean code under tight deadlines and I've worked under pressure in the
          past. Although I can work independently, I prefer being part of a
          team. At work, I'm dedicated and hardworking, but I also enjoy
          bringing humor to the team.
        </p>
      </div>
      <div className="about-me-why">
        <div className="about-title">Why Web Development ?</div>
        <p className="abt-description">
          I've always tended to improve our process, with communication and also
          tools like Excel. Then I felt limited so I learned Python, and I once
          needed to deploy a <span id="italic">.exe</span> program so I hosted with Django,
          and fell in love with web development so I learnt JS and React. I
          would say I'm very curious about any tech in general, from hardware to
          user's experience.
        </p>
      </div>
    </div>
  );
};

export default AboutDescription;
