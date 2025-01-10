const ProjectDetails = ({ projectDetails }) => {
  return (
    <div className="description-container" id="description-container-shadow">
      <h1 className="project-title">{projectDetails.title}</h1>
      <h3 className="project-description">{projectDetails.description}</h3>
      <div className="used-tech">
        {projectDetails.tech.map((tech, index) => (
          <span key={index} className="tech-element">
            {tech}
          </span>
        ))}
      </div>
      <div className="links">
        <a
          href={projectDetails.website}
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
        <a href={projectDetails.github} target="_blank" className="anchor-link">
          <img
            src="/public/icons/projects/github.svg"
            alt="github logo"
            className="logo-visit"
          />
          Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
