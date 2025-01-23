import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [displayClasses, setDisplayClasses] = useState({
    aaa: "",
    background: "",
    "user-friendly": "",
    "rounded-pic": "",
    FR: "",
    "a-b": "", // i need to end my state with a dummy data which i dont use, otherwise the function typingCharacters won't run properly on last object key. To solve the problem, i'd need to modify the function and get into over-complicated logic
  });

  const [indexToSwicthToNextClass, setIndexToSwicthToNextClass] = useState(0);
  const [indexForWords, setIndexForWords] = useState(0);

  useEffect(() => {
    if (indexToSwicthToNextClass >= Object.keys(displayClasses).length) return;

    let cssClass = Object.keys(displayClasses)[indexToSwicthToNextClass];
    // console.log(cssClass);

    function typingCharacters() {
      if (indexForWords < cssClass.length) {
        setDisplayClasses((prevState) => ({
          ...prevState,
          [cssClass]: prevState[cssClass] + cssClass[indexForWords],
        }));
        setIndexForWords((indexForWords) => indexForWords + 1);
        // console.log(displayClasses);
      } else {
        clearInterval(myInterval); // Clear the interval when done
        setIndexToSwicthToNextClass(
          (indexToSwicthToNextClass) => indexToSwicthToNextClass + 1
        );
        setIndexForWords(0);
      }
    }
    let myInterval = setInterval(typingCharacters, 100); // starts the interval function

    return () => {
      clearInterval(myInterval); // cleaning function (useEffect property) :
    };
  }, [indexForWords]); // once this effect changes, useEffect runs again. I first put indexToSwicthToNextClass as dependency array but for some reason i ignore, the output was not what i wanted

  return (
    <div className="background">
      <main className="hero-container" id="hero-shadow">
        <section className="container" id={displayClasses["background"]}>
          <div className="profile-pic-container">
            <img
              id="profile-pic"
              className={displayClasses["rounded-pic"]}
              src="/photos/hero/profile-picture-damien.png"
              alt="profile picture"
            />
            <img
              src="/icons/french-flag.svg"
              alt="french flag"
              className="french-flag"
              id={displayClasses["FR"]}
            />
          </div>
          <h3 className="center-txt">
            My name is Damien
            <br />
          </h3>{" "}
          <p className="center">
            {/* className purple is down below here */}I am driven by{" "}
            <span className="blue-txt">beautiful</span>, robust and
            <span className="blue-txt">
              {" "}
              {displayClasses["user-friendly"]}
            </span>{" "}
            interfaces.{" "}
          </p>
          <div className="buttons-container">
            <button id="view-cv" className="cd-btn">
              View my CV
            </button>
            <button id="contact" className="cd-btn">
              Contact me
            </button>
          </div>
        </section>

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
            <span className="green">"container"</span>
            <span className="orange italic"> class=</span>
            <span className="green">"</span>
            <span className="green">{displayClasses["background"]}</span>
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
            <span className="green">
              {'"./photos/hero/profile-picture.jpg"'}
            </span>
            <br />
            <span className="orange italic p-2">alt=</span>
            <span className="green">{'"profile picture"'}</span>
            <br />
            <span className="grey p-1">{"/>"}</span>
            <br />
            <span className="grey p-1">{"<"}</span>
            <span className="purple">h3</span>
            <span className="grey">{">"}</span> <br />
            <span className="grey p-2">My name is Damien</span>
            <span className="grey">{"<"}</span>
            <span className="purple">br</span>
            <span className="grey">{"/> "}</span> <br />
            <span className="grey p-1">{"</"}</span>
            <span className="purple">h3</span>
            <span className="grey">{">"}</span>
            <br />
            <span className="grey p-1">{"<"}</span>
            <span className="purple">p</span>
            <span className="grey">{">"}</span>
            <span className="grey">I am driven by beautiful, </span>
            <span className="grey">
              robust and {displayClasses["user-friendly"]} interfaces.
            </span>
            <span className="grey">{"</"}</span>
            <span className="purple">p</span>
            <span className="grey">{">"}</span> <br />
            <span className="grey p-1">{"<"}</span>
            <span className="purple">button</span>
            <span className="orange italic"> id=</span>
            <span className="green">"view-cv" </span>
            <span className="orange italic"> class=</span>
            <span className="green">"cd-btn"</span>
            <span className="grey">{">"}</span>
            <span className="grey">View my CV</span>
            <span className="grey">{"</"}</span>
            <span className="purple">button</span>
            <span className="grey">{">"}</span> <br />
            <span className="grey p-1">{"<"}</span>
            <span className="purple">button</span>
            <span className="orange italic"> id=</span>
            <span className="green">"contact" </span>
            <span className="orange italic"> class=</span>
            <span className="green">"cd-btn"</span>
            <span className="grey">{">"}</span>
            <span className="grey">Contact Me</span>
            <span className="grey">{"</"}</span>
            <span className="purple">button</span>
            <span className="grey">{">"}</span> <br />
            <span className="grey">{"</"}</span>
            <span className="purple">div</span>
            <span className="grey">{">"}</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
