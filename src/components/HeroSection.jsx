import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [displayClasses, setDisplayClasses] = useState({
    "card-container": "",
    "rounded-pic": "",
    "card-btn": "",
    "flex-card": "",
    "a-b": "", // i need to end my state with a dummy data which i dont use, otherwise the function typingCharacters won't run properly on last object key. To solve the problem, i'd need to modify the function and get into over-complicated logic
  });

  const [indexToSwicthToNextClass, setIndexToSwicthToNextClass] = useState(0);
  const [indexForWords, setIndexForWords] = useState(0);

  useEffect(() => {
    if (indexToSwicthToNextClass >= Object.keys(displayClasses).length) return;

    let cssClass = Object.keys(displayClasses)[indexToSwicthToNextClass];
    console.log(cssClass);

    function typingCharacters() {
      if (indexForWords < cssClass.length) {
        setDisplayClasses((prevState) => ({
          ...prevState,
          [cssClass]: prevState[cssClass] + cssClass[indexForWords],
        }));
        setIndexForWords((indexForWords) => indexForWords + 1);
        console.log(displayClasses);
      } else {
        clearInterval(myInterval); // Clear the interval when done
        setIndexToSwicthToNextClass(
          (indexToSwicthToNextClass) => indexToSwicthToNextClass + 1
        );
        setIndexForWords(0);
      }
    }
    let myInterval = setInterval(typingCharacters, 150); // starts the interval function

    return () => {
      clearInterval(myInterval); // cleaning function (useEffect property) :
    };
  }, [indexForWords]); // once this effect changes, useEffect runs again. I first put indexToSwicthToNextClass as dependency array but for some reason i ignore, the output was not what i wanted

  return (
    <section className="hero-container">
      <div className="terminal-container">
        <div className="terminal-header">
          <img
            className="bullet"
            src="/icons/bullet-terminal.svg"
            alt="bullet icon"
          />
          <img
            className="bullet"
            src="/icons/bullet-terminal.svg"
            alt="bullet icon"
          />
          <img
            className="bullet"
            src="/icons/bullet-terminal.svg"
            alt="bullet icon"
          />
        </div>
        <div className="terminal-content">
          <br />
          <span className="grey">{"<"}</span>
          <span className="purple">{"div"}</span>{" "}
          <span className="orange italic">id=</span>
          <span className="green">"</span>
          <span className="green">{displayClasses["card-container"]}</span>
          <span className="green">"</span>
          <span className="grey">{">"}</span>
          <br />
          <span className="grey p-1">{"<"}</span>
          <span className="purple">img</span> <br />
          <span className="orange italic p-2">class=</span>
          <span className="green">"</span>
          <span className="green">
            {displayClasses["rounded-pic"]}
            {""}
          </span>
          <span className="green">"</span>
          <br />
          <span className="orange italic p-2">src=</span>
          <span className="green">{'"./photos/profile-picture.jpg"'}</span>
          <br />
          <span className="orange italic p-2">alt=</span>
          <span className="green">{'"profile picture"'}</span>
          <br />
          <span className="grey p-1">{"/>"}</span>
          <br />
          <span className="grey p-1">{"<"}</span>
          <span className="purple">h3</span>
          <span className="grey">{">"}</span> <br />
          <span className="white p-2">My name is Damien.</span>
          <span className="grey">{"<"}</span>
          <span className="purple">br</span>
          <span className="grey">{"/> "}</span> <br />
          <span className="white p-2">
            I am a self-taught front-end developper.
          </span>{" "}
          <br />
          <span className="grey p-1">{"</"}</span>
          <span className="purple">h3</span>
          <span className="grey">{">"}</span>
          <br />
          <span className="grey p-1">{"<"}</span>
          <span className="purple">p</span>
          <span className="grey">{">"}</span>
          <span className="white">I am driven by beautiful, </span>
          <span className="white">robust and user-friendly interfaces.</span>
          <span className="grey">{"</"}</span>
          <span className="purple">p</span>
          <span className="grey">{">"}</span> <br />
          <span className="grey p-1">{"<"}</span>
          <span className="purple">button</span>
          <span className="grey">{">"}</span>View my CV
          <span className="grey">{"</"}</span>
          <span className="purple">button</span>
          <span className="grey">{">"}</span> <br />
          <span className="grey p-1">{"<"}</span>
          <span className="purple">button</span>
          <span className="grey">{">"}</span>Contact Me
          <span className="grey">{"</"}</span>
          <span className="purple">button</span>
          <span className="grey">{">"}</span> <br />
          <span className="grey">{"</"}</span>
          <span className="purple">div</span>
          <span className="grey">{">"}</span>
        </div>
      </div>

      <div
        className={displayClasses["card-container"]}
        id={displayClasses["flex-card"]}
      >
        <img
          id="profile-pic"
          className={displayClasses["rounded-pic"]}
          src="/photos/profile-picture-square.jpg"
          alt="profile picture"
        />
        <h3 className="center-txt">
          My name is Damien. <br />I am a self-taught front-end developper.{" "}
        </h3>{" "}
        <br />
        <p className="center">
          {/* className purple is down below here */}I am driven by{" "}
          <span className="purple-txt">beautiful</span>, robust and
          <span className="purple-txt"> user-friendly</span> interfaces.{" "}
        </p>
        <div className="buttons-container">
          <button className="view-cv" id={displayClasses["card-btn"]}>
            View my CV
          </button>
          <button className="contact" id={displayClasses["card-btn"]}>
            Contact me
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
