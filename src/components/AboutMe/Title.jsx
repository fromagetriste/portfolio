import React from "react";
import { motion } from "motion/react";

const Title = () => {
  return (
    <>
      <motion.div
        className="title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }} // Ensures animation happens only once
      >
        {" "}
        A <span id="about-gradient">few words </span>about me
      </motion.div>
      <motion.div
        className="sub-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }} // Slight delay for a staggered effect
        viewport={{ once: true }}
      >
        Here are a few details I'd like to highlight.
      </motion.div>
    </>
  );
};

export default Title;
