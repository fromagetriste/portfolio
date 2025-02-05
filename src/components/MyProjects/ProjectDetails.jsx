import { motion, AnimatePresence } from "motion/react";

const ProjectDetails = ({ projectDetails }) => {
  return (
    <div className="description-container" id="description-container-shadow">
      <AnimatePresence mode="wait">
        <motion.h1
          className="project-title"
          key={projectDetails.id} // Forces remount on language change
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {projectDetails.title}
        </motion.h1>
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.h3
          className="project-description"
          key={projectDetails.id} // Forces remount on language change
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {projectDetails.description}
        </motion.h3>{" "}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.div
          className="used-tech"
          key={projectDetails.id} // Forces remount on language change
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {projectDetails.tech.map((tech, index) => (
            <span key={index} className="tech-element">
              {tech}
            </span>
          ))}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          className="links"
          key={projectDetails.id} // Forces remount on language change
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <a
            href={projectDetails.website}
            target="_blank"
            className="anchor-link"
          >
            <img
              src="/icons/projects/monitor.svg"
              alt="monitor logo"
              className="logo-visit"
            />
            Visit in new tab
          </a>
          <a
            href={projectDetails.github}
            target="_blank"
            className="anchor-link"
          >
            <img
              src="/icons/projects/github.svg"
              alt="github logo"
              className="logo-visit"
            />
            Source Code
          </a>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetails;
