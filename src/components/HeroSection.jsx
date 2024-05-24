const HeroSection = () => {
  return (
    <main className="flex__container">
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
              src="../../public/backgrounds-and-icons/download-icon-2.svg"
              alt="logo-download"
              id="download-icon"
            ></img>
          </button>
          <button className="contact-me-button">Contact Me</button>
        </div>
      </div>

      {/* Right-container (terminal) starts here */}
      <div className="terminal__container">
        <p>
          const Damien =
          <br />
          name : Damien GRAVELLE <br />
          Date of birth : 14/03/1992 at Valenciennes <br />
          Main Stack : [React, TypeScript, Redux,MySql] <br />
          Secondary Stack : [Python, Django, Panda]
        </p>
      </div>
    </main>
  );
};

export default HeroSection;
