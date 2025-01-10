import React, { useState } from "react";
import projectsData from "./projects-data";
import TitleProjects from "./TitleProjects";
import ChoseProjectButtons from "./ChoseProjectButtons";
import ProjectDetails from "./ProjectDetails";
import PhotoOfProject from "./PhotoOfProject";

const MyProjects = () => {
  const [selectedProject, setSelectedProject] = useState(1);
  const [isSelected, setIsSelected] = useState();

  const handleRadioChange = (e) => {
    setSelectedProject(Number(e.target.value));
  };
  const projectDetails = projectsData[selectedProject - 1];

  return (
    <section className="container-for-margins">
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
        <PhotoOfProject projectDetails={projectDetails} />
      </div>
    </section>
  );
};

export default MyProjects;
