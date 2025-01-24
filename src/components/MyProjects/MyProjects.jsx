import React, { useState } from "react";
import projectsData from "./projects-data";
import TitleProjects from "./TitleProjects";
import ChoseProjectButtons from "./ChoseProjectButtons";
import ProjectDetails from "./ProjectDetails";
import ProjectScreenshot from "./ProjectScreenshot";

const MyProjects = () => {
  const [selectedProject, setSelectedProject] = useState(1);

  const handleRadioChange = (e) => {
    setSelectedProject(Number(e.target.value));
  };
  // we know the selected project, so we look for its details in the data
  const projectDetails = projectsData[selectedProject - 1];

  return (
    <section className="container-for-margins" id="ProjectsIdForScroll">
      <TitleProjects />
      <div className="my-projects-container">
        <div className="left-container">
          <ChoseProjectButtons
            projectsData={projectsData}
            handleRadioChange={handleRadioChange}
            selectedProject={selectedProject}
          />
          <ProjectDetails projectDetails={projectDetails} />
        </div>
        <ProjectScreenshot projectDetails={projectDetails} />
      </div>
    </section>
  );
};

export default MyProjects;
