import React from "react";
import "./Programs.scss";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png"
const Programs = () => {
  return (
    <div className="programs" id="programs">
      {/* Program header */}
      <div className="program-header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>
      {/* Program Cards */}
      <div className="program-categories">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={RightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
