const HeroSection = () => {
  return (
    <main className="hero__container">
      {/* Left-container starts here */}
      <div className="card__container">
        <h1>
          Hello, <br />
          My name is Damien, I am <br />a self-taught{" "}
          <span id="text-gradient">front-end</span> <br />
          Developer.
        </h1>
        <p className="title-mini">
          I am driven by <span id="pink">beautiful</span>, robust and{" "}
          <span id="pink">user friendly</span> interfaces.
        </p>
        <div className="button__container">
          <button className="resume-button">
            <div>Get my Resume</div>
            <img
              src="/backgrounds-and-icons/download-icon-2.svg"
              alt="logo-download"
              id="download-icon"
            ></img>
          </button>
          <button className="contact-me-button">Contact Me</button>
        </div>
      </div>

      {/* Right-container (terminal) starts here */}

      <div className="terminal__container terminal-background">
        <div className="upper-part__container">
          <img
            src="/backgrounds-and-icons/bullet-point-terminal-blue.svg"
            alt="bullet point for style"
            id="bullet-point"
          ></img>
          <img
            src="/backgrounds-and-icons/bullet-point-terminal-orange.svg"
            alt="bullet point for style"
            id="bullet-point"
          ></img>
          <img
            src="/backgrounds-and-icons/bullet-point-terminal-green.svg"
            alt="bullet point for style"
            id="bullet-point"
          ></img>
        </div>
        <div className="code-text__container">
          {/* to have a text being not interpreted by JSX, set this around : {"your text"} */}
          <span className="my-purple">import</span>{" "}
          <span className="my-red">React</span>
          <span className="my-grey">,</span>{" "}
          <span className="my-orange">{"{"}</span>{" "}
          <span className="my-red">{" useState "}</span>{" "}
          <span className="my-orange">{"}"}</span>{" "}
          <span className="my-purple">from</span>{" "}
          <span className="my-green">
            {"'"}react{"'"}
          </span>
          <span className="my-grey">;</span> <br />
          <br />
          <span className="my-purple">const</span>{" "}
          <span className="my-blue">Developer = </span>
          <span className="my-orange">()</span>{" "}
          <span className="my-purple">={"> "}</span>
          <span className="my-orange">{"{"}</span>
          <br />
          <span className="my-purple">[</span>
          <span className="my-red">portfolio</span>
          <span className="my-grey">,</span>{" "}
          <span className="my-red">setPortfolio</span>
          <span className="my-purple">]</span>{" "}
          <span className="my-blue">= useState</span>
          <span className="my-purple">(</span>
          <span className="my-orange">true</span>
          <span className="my-purple">)</span>
          <span className="my-grey">;</span>
          <br />
          <br />
          <span className="my-purple padding-1">return {"("}</span>
          <br />
          <span className="my-grey padding-2">{"<"}</span>
          <span className="my-red">main</span>
          <span className="my-grey">{">"} </span>
          <br />
          <span className="my-grey padding-3">{"<"}</span>
          <span className="my-red">h1</span>
          <span className="my-grey">{">"}</span>
          <br />
          <span className="my-grey padding-4">
            Hello, My name is Damien, I am a self-taught front-end Developer.{" "}
          </span>
          <br />
          <span className="my-grey padding-3">{"</"}</span>
          <span className="my-red">h1</span>
          <span className="my-grey">{">"}</span> <br />
          <span className="my-grey padding-3">{"<"}</span>
          <span className="my-red">p</span>
          <span className="my-grey">{">"}</span> <br />
          <span className="my-grey padding-4">
            I am driven by beautiful, robust and user friendly interfaces.
          </span>{" "}
          <br />
          <span className="my-grey padding-3">{"</"}</span>
          <span className="my-red">p</span>
          <span className="my-grey">{">"}</span> <br />
          <span className="my-grey padding-3">{"<"}</span>
          <span className="my-red">div</span>
          <span className="my-grey">{">"}</span> <br />
          <span className="my-grey padding-4">{"<"}</span>
          <span className="my-red">button</span>
          <span className="my-grey">{">"}</span>
          <span className="my-grey">Get my Resume{"</"}</span>
          <span className="my-red">button</span>
          <span className="my-grey">{">"}</span> <br />
          <span className="my-grey padding-4">{"<"}</span>
          <span className="my-red">button</span>
          <span className="my-grey">{">"}</span>
          <span className="my-grey">Contact me{"</"}</span>
          <span className="my-red">button</span>
          <span className="my-grey">{">"}</span> <br />
          <span className="my-grey padding-3">{"</"}</span>
          <span className="my-red">div</span>
          <span>{">"}</span> <br />
          <span className="my-grey padding-2">{"</"}</span>
          <span className="my-red">main</span>
          <span className="my-grey">{">"}</span> <br /> <br />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
