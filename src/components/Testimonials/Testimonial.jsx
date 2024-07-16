import React, { useState } from "react";
import "./Testimonial.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

const Testimonial = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  return (
    <div className="testimonial">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What people</span>
        <span>say about us?</span>
        <span>{testimonialsData[selected].review}</span>
        <span style={{ color: "var(--orange)" }}>
          <span>{testimonialsData[selected].name}</span>
        </span>{" "}
        - {testimonialsData[selected].status}
      </div>
      <div className="right-t">
        <img src={testimonialsData[selected].image} alt="" />
        <div className="arrows">
          <img src={leftArrow} alt="" /> <img src={rightArrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
