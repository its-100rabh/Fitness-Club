import React from "react";
import "./Programs.css";
import RightArrow from "../../assets/rightArrow.png";
import { programsData } from "../../data/programsData";

const Programs = () => {
  return (
    <div className="Programs" id="programs">
      <div className="programs-header">
        <span>Our Programs</span>
      </div>

      <div className="programdata">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="joinnow">
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
