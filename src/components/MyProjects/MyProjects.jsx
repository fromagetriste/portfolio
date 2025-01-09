import React, { useState, useEffect } from "react";
import projectsData from "./projects-data";
import TitleProjects from "./TitleProjects";
import ChoseProjectButtons from "./ChoseProjectButtons";

const MyProjects = () => {
  const [selectedProject, setSelectedProject] = useState(1);

  const handleRadioChange = (e) => {
    setSelectedProject(Number(e.target.value));
  };

  // for debugging only :
  useEffect(() => {
    console.log("Selected project :", selectedProject);
    console.log(projectsData[selectedProject - 1]); // -1 because index start with 0
    console.log(projectsData[selectedProject - 1].framework);
  }, [selectedProject]);

  return (
    <section className="container-for-margins">
      <TitleProjects />
      <div className="my-projects-container">
        {/* LEFT CONTAINER */}
        <div className="left">
          {/* RADIO BUTTONS WITH MAP METHOD */}
          <ChoseProjectButtons
            projectsData={projectsData}
            handleRadioChange={handleRadioChange}
            selectedProject={selectedProject}
          />
          <div
            className="description-container"
            id="description-container-shadow"
          >
            <h1 className="project-title">
              {projectsData[selectedProject - 1].framework}
            </h1>
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
