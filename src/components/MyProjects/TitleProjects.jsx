import projectsData from "./projects-data";
import { motion } from "motion/react";

const TitleProjects = () => {
  const numberOfProjects = projectsData.length;

  return (
    <>
      <motion.div
        className="title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }} // Ensures animation happens only once
      >
        My <span id="projects-gradient">Projects</span>
      </motion.div>
      <motion.div
        className="sub-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }} // Slight delay for a staggered effect
        viewport={{ once: true }}
      >
        Here are my {numberOfProjects} highlighted projects
      </motion.div>
    </>
  );
};

export default TitleProjects;
