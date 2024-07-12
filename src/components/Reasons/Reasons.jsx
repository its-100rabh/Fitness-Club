import React from "react";
import "./Reasons.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-r">
        <span>Reasons</span>
        <div>
          <span className="stroke-text">to </span>
          <span>choose us?</span>
        </div>
        <div className="details-r">
          <div>
            <img src={tick} alt=""></img>
            <span>Reliable Partners</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Over 100+ Expert Coaches</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Faster Results</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>New Member Benefits</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
