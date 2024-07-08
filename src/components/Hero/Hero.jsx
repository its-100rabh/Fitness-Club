import React from "react";
import "./Hero.css";
import Header from "../Header/Header";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <div></div>
          <span>the best fitness club in the town</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div className="span">
            <span>
              One stop solution for building your ideal body and live up your
              life to fullest.
            </span>
          </div>
        </div>

        {/* {figures} */}
        <div className="figures">
          <div>
            <span>100</span>
            <span>coaches</span>
          </div>
          <div>
            <span>1000+</span>
            <span>members</span>
          </div>
          <div>
            <span>50+</span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* {hero button} */}
        <div className="hero-btn">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>
      </div>
      <div className="right-h">Right Side</div>
    </div>
  );
};

export default Hero;
