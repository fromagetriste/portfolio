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
      <div className="terminal__container">
        <div className="upper-part__container">
          <img
            src="/backgrounds-and-icons/bullet-point-terminal.svg"
            alt="bullet point for style"
            id="bullet-point"
          ></img>
          <img
            src="/backgrounds-and-icons/bullet-point-terminal.svg"
            alt="bullet point for style"
            id="bullet-point"
          ></img>
          <img
            src="/backgrounds-and-icons/bullet-point-terminal.svg"
            alt="bullet point for style"
            id="bullet-point"
          ></img>
        </div>
        <div className="code-text__container">
          <p>
            Hello, <br />
            My name is Damien, I am <br />a self-taught front-end <br />
            Developer.
          </p>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
