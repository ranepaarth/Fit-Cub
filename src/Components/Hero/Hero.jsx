import React from "react";
import "./Hero.scss";
import Header from "../Header/Header.jsx";
import heroImage from "../../assets/hero_image.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

import NumberCounter from "number-counter";
// import CountUp from "count-up";
import { motion } from "framer-motion";
function Hero() {
  const transition = { type: "spring", duration: 2 };

  return (
    <div className="hero">
      <div className="left-hero">
        <Header />
        {/* Advertisement */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: "200px" }}
            whileInView={{ left: "9px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>The best Fitness Club in Town</span>
        </div>

        {/* Hero Text */}

        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>

          <div>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, id
              Lorem ipsum dolor sit amet.
            </span>
          </div>
        </div>

        {/*Figures*/}
        <div className="figures">
          <div>
            <span style={{display:'flex'}}>
              +<NumberCounter duration={4} start={100} end={140}  suffix='+'/>
            </span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span style={{display:'flex'}}>+<NumberCounter duration={4} start={800}end={978}/></span>
            <span>Members Joined</span>
          </div>
          <div>
            <span style={{display:'flex'}}>+<NumberCounter duration={5} start={0}end={50}/></span>
            <span>Fitness Programs</span>
          </div>
        </div>

        {/*Header Buttons*/}
        <div className="hero-btns">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-hero">
        <button className="btn">Join Now</button>
        <motion.div
          initial={{ right: "-3rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>BPM</span>
        </motion.div>

        {/*Hero images*/}

        <div>
          <img src={heroImage} alt="" className="hero-img" />
        </div>

        {/*Calories */}

        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div className="calorie-text">
            <span>Calories Burned</span>
            <span>112 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
