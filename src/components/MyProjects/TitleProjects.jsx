import projectsData from "./projects-data";

const TitleProjects = () => {
  const numberOfProjects = projectsData.length;

  return (
    <>
      <div className="title">
        My <span id="projects-gradient">Projects</span>
      </div>
      <div className="sub-title">
        Here are my {numberOfProjects} highlighted projects
      </div>
    </>
  );
};

export default TitleProjects;
