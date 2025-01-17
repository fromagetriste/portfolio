const ProjectScreenshot = ({ projectDetails }) => {
  return (
    <div className="right">
      <img
        key={projectDetails.id}
        src={projectDetails.screenshot}
        alt="screenshot of project"
        className="photo-project"
      />
    </div>
  );
};

export default ProjectScreenshot;
