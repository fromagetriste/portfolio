import React, { useState, useEffect } from "react";
import projects from "./projects-data";

const MyProjects = () => {
  const [selectedProject, setSelectedProject] = useState("option1");

  const handleRadioChange = (e) => {
    setSelectedProject(e.target.value);
  };

  // for debugging only :
  // useEffect(() => {
  //   console.log("Selected project (after state update):", selectedProject);
  // }, [selectedProject]);

  return (
    <section className="container-for-margins">
      <div className="title">
        My <span id="projects-gradient">Projects</span>
      </div>
      <div className="sub-title">Here are my 4 highlighted projects</div>
      <div className="my-projects-container">
        <div className="left">
          {/* RADIO BUTTONS WITH MAP METHOD */}
          <div className="buttons-container">
            {projects.map((project) => (
              <div key={project.id}>
                <input
                  type="radio"
                  name="projects"
                  id={project.option}
                  value={project.option}
                  onChange={handleRadioChange}
                  checked={selectedProject === project.option}
                />
                <label htmlFor={project.option}>
                  <div className="radio-container">
                    <img
                      src={project.src}
                      alt="API logo"
                      className="radio-logo"
                    />
                    <div className="radio-text">{project.tech}</div>
                  </div>
                </label>
              </div>
            ))}
          </div>
          {/* LEFT CONTAINER */}
          <div
            className="description-container"
            id="description-container-shadow"
          >
            <h1 className="project-title">React Movies</h1>
            <h3 className="project-description">
              A React project consisting in fetching data from a movies API,
              sort and filter data, and render in Card components. Possibility
              to add Movies to Favorites
            </h3>

            <div className="used-tech">
              <span className="tech-element">Local Storage</span>
              <span className="tech-element">React Router</span>
              <span className="tech-element">useEffect</span>
              <span className="tech-element">Axios</span>
              <span className="tech-element">SASS</span>
            </div>

            <div className="links">
              <a
                href="https://damien-movies.netlify.app/"
                target="_blank"
                className="anchor-link"
              >
                <img
                  src="/public/icons/projects/monitor.svg"
                  alt="monitor logo"
                  className="logo-visit"
                />
                Visit in new tab
              </a>
              <a
                href="https://github.com/fromagetriste/movies-API"
                target="_blank"
                className="anchor-link"
              >
                <img
                  src="/public/icons/projects/github.svg"
                  alt="monitor logo"
                  className="logo-visit"
                />
                Source Code
              </a>
            </div>
          </div>
          {/* RIGHT CONTAINER */}
        </div>
        <div className="right">
          <img
            src="/public/photos/myprojects/movies-app.png"
            alt=""
            className="photo-project"
          />
        </div>
        {/* ______________________________ */}
      </div>
    </section>
  );
};

export default MyProjects;
