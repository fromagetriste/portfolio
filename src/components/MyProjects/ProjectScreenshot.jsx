import { motion, AnimatePresence } from "motion/react";

const ProjectScreenshot = ({ projectDetails }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="right"
        key={projectDetails.id} // Forces remount on language change
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <img
          key={projectDetails.id}
          src={projectDetails.screenshot}
          alt="screenshot of project"
          className="photo-project"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectScreenshot;
