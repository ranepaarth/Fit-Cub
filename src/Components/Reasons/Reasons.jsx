import React from "react";
import "./Reasons.scss";
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
    <div className="reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-r">
        <span>Some Reasons</span>

        <div>
          <span className="stroke-text">Why</span>
          <span>choose us?</span>
        </div>

        <div className="details-r">
          <div>
            <img src={tick} alt=""></img>
            <span>over 140+ expert coaches</span>
          </div>

          <div>
            <img src={tick} alt="" />
            <span>train smarter and faster</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 free program for new members</span>
          </div>

          <div>
            <img src={tick} alt="" />
            <span>reliable partner</span>
          </div>
        </div>
        <span className="partners-heading" style={{ color: "gray", fontWeight: "normal" }}>
          Our Partners
        </span>

        <div className="partners">
          <img src={nike} alt="" />
          <img src={nb} alt="" />
          <img src={adidas} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
