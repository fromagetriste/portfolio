import React, { useState } from "react";

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
          {/* to have a text being not interpreted by JSX, set this around : {"your text"} */}
          <p>
            <span className="my-purple">import</span>{" "}
            <span className="my-red">React</span>,{" "}
            <span className="my-orange">{"{"}</span>{" "}
            <span className="my-red">{" useState "}</span>{" "}
            <span className="my-orange">{"}"}</span>{" "}
            <span className="my-purple">from</span>{" "}
            <span className="my-green">
              {"'"}react{"'"}
            </span>
            ; <br />
            <br />
            <span className="my-purple">const</span>{" "}
            <span className="my-blue">Developer = </span>
            <span className="my-orange">()</span>{" "}
            <span className="my-purple">={"> "}</span>
            <span className="my-orange">{"{"}</span>
            <br />
            <span className="my-purple">[</span>
            <span className="my-red">portfolio</span>,
            <span className="my-red">setPortfolio</span>
            <span className="my-purple">]</span>{" "}
            <span className="my-blue">= useState</span>
            <span className="my-purple">(</span>
            <span className="my-orange">true</span>
            <span className="my-purple">)</span>
            <br />
            <br />
            <span className="my-purple">return {"("}</span>
            <br />
            {"<"}
            <span className="my-red">main</span>
            {">"} <br />
            {"<"}
            <span className="my-red">h1</span>
            {">"} <br />
            Hello, My name is Damien, I am a self-taught front-end Developer.{" "}
            <br />
            {"<"}
            <span className="my-red">h1</span>
            {">"} <br />
            {"<"}
            <span className="my-red">p</span>
            {">"} <br />I am driven by beautiful, robust and user friendly
            interfaces. <br />
            {"<"}
            <span className="my-red">p</span>
            {"/>"} <br />
            {"<"}
            <span className="my-red">div</span>
            {">"} <br />
            {"<"}
            <span className="my-red">button</span>
            {">"} Get my Resume {"<"}
            <span className="my-red">button</span>
            {"/>"} <br />
            {"<"}
            <span className="my-red">button</span>
            {">"} Contact me {"<"}
            <span className="my-red">button</span>
            {">"} <br />
            {"<"}
            <span className="my-red">div</span>
            {">"} <br />
            {"<"}
            <span className="my-red">main</span>
            {"/>"} <br /> <br />
          </p>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
