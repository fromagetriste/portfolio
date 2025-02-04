import React from "react";
import { motion } from "motion/react";

const Title = () => {
  return (
    <motion.div
      key="title-container" // Ensures animation runs only once
      className="title-container"
      initial={{ opacity: 0, y: -50 }} // Start transparent and slightly above
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {" "}
      <h1 className="main-title">
        Meet your next reliable <br /> <span id="React-JS">React JS</span>{" "}
        developper
      </h1>
      <h3 className="second-title">I am a disciplined and self-taught coder</h3>
    </motion.div>
  );
};

export default Title;
