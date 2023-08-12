import React, { useState } from "react";
import "./Testimonials.scss";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";

const Testimonials = () => {
  /*useState Hook */

  /* selected = index of current active review. 

  useState(0) = by default selects the index 0.
  */
  const [selected, setSelected] = useState(0);

  /* calculates the length of testimonials */
  const length = testimonialsData.length;

  const transition = { type: "spring", duration: 2 };
  return (
    <div className="testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What They</span>
        <span>Say About us</span>
        <motion.span
        key={selected}
        initial={{opacity:0,x:-100}}
        animate={{opacity:1,x: 0}}
        exit={{opacity:0,x: 100}}
        transition={transition}>{testimonialsData[selected].review}</motion.span>
        <motion.span style={{ color: "var(--orange)" }}>
          {testimonialsData[selected].name}
        </motion.span>{" "}
        -{testimonialsData[selected].status}
      </div>
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div
        initial={{ opacity: 0, x: 100 }}
        transition={{ ...transition, duration: 2 }}
        whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.img 
        key={selected}
        initial={{opacity:0,x:100}}
        animate={{opacity:1,x: 0}}
        exit={{opacity:0,x: -100}}
        transition={transition}
        src={testimonialsData[selected].image} alt="" />

        <div className="arrows">
          {/* if selected equals 0 and if the user clicks the left arrow then the last testimonial has to be returned i.e. which has an index of length-1 
          
          else return the (prev-1)th index bcoz now the index will be > 0 and therefore we need to go 1 index previous */}
          <img
            onClick={() =>
              selected === 0
                ? setSelected(length - 1)
                : setSelected((curr) => curr - 1)
            }
            src={leftArrow}
            alt=""
          />
          <img
            onClick={() =>
              selected === length - 1
                ? setSelected(0)
                : setSelected((curr) => curr + 1)
            }
            src={rightArrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
