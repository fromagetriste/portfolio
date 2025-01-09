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
          <label htmlFor={project.id}>
            <div className="radio-container">
              <img src={project.src} alt="logo" className="radio-logo" />
              <div className="radio-text">{project.framework}</div>
            </div>
          </label>
        </div>
      ))}
    </div>
  );
};

export default ChoseProjectButtons;
