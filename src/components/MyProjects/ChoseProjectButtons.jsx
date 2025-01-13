const ChoseProjectButtons = ({
  projectsData,
  selectedProject,
  handleRadioChange,
}) => {
  return (
    <div className="buttons-container">
      {projectsData.map((project) => (
        <div key={project.id}>
          <input
            type="radio"
            name="projects"
            id={project.id}
            value={project.id}
            onChange={handleRadioChange}
            checked={selectedProject === project.id}
          />
          <label
            htmlFor={project.id}
            style={{
              opacity: selectedProject === project.id ? 1 : 0.8,
            }}
          >
            <div className="radio-container">
              <img
                src={
                  selectedProject === project.id
                    ? project.srcGreen
                    : project.src
                }
                alt="logo"
                className="radio-logo"
                style={{
                  opacity: selectedProject === project.id ? 1 : 0.8,
                }}
              />
              <div
                className={`radio-text${
                  selectedProject === project.id ? "-selected" : ""
                }`}
              >
                {project.framework}
              </div>
            </div>
          </label>
        </div>
      ))}
    </div>
  );
};

export default ChoseProjectButtons;
