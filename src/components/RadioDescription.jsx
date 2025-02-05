import React, { useState } from "react";
import { myText, flagz } from "./myText";
import { motion, AnimatePresence } from "motion/react";

const RadioDescription = () => {
  const [langue, setLangue] = useState("english");

  const handleLangueChange = (e) => {
    setLangue(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <>
      {/* ____________________________________________ */}
      <div className="about-me-why-container">
        {/* ____________________________________________ */}

        {/* <div className="about-me-why">
          <div className="about-title">{myText[langue].title1}</div>
          <p className="abt-description">{myText[langue].answer1}</p>
        </div> */}
        <div className="about-me-why">
          <AnimatePresence mode="wait">
            <motion.div
              className="about-title"
              key={langue} // Forces remount on language change
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {myText[langue].title1}
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.p
              key={langue} // Forces remount on language change
              className="abt-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {myText[langue].answer1}
            </motion.p>
          </AnimatePresence>
        </div>
        {/* ____________________________________________ */}

        <div className="abt-flags">
          {flagz.map((flag) => (
            <label
              key={flag.tongue}
              htmlFor={flag.tongue}
              className={langue === flag.tongue ? "isChecked" : "notChecked"}
            >
              <input
                id={flag.tongue}
                value={flag.tongue}
                type="radio"
                checked={langue === flag.tongue}
                onChange={handleLangueChange}
                style={{ display: "none" }}
              />
              <img className="radio-drapeaux" src={flag.src} alt="flag" />
            </label>
          ))}
        </div>
        {/* ____________________________________________ */}

        <div className="about-me-why">
          <AnimatePresence mode="wait">
            <motion.div
              className="about-title"
              key={langue} // Forces remount on language change
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {myText[langue].title2}
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.p
              key={langue} // Forces remount on language change
              className="abt-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {myText[langue].answer2}
            </motion.p>
          </AnimatePresence>
        </div>
        {/* ____________________________________________ */}
      </div>
    </>
  );
};

export default RadioDescription;
