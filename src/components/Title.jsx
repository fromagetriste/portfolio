import React from "react";
import { motion } from "motion/react";

const Title = () => {
  return (
    <div className="title-container">
      {" "}
      <motion.h1
        className="main-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }} // Ensures animation happens only once
      >
        Meet your next reliable <br /> <span id="React-JS">React JS</span>{" "}
        developper
      </motion.h1>
      <motion.h3
        className="second-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }} // Slight delay for a staggered effect
        viewport={{ once: true }}
      >
        I am a disciplined and self-taught coder
      </motion.h3>
    </div>
  );
};

export default Title;
