import React from "react";
import "./PlanCards.scss";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
const PlanCards = () => {
  return (
    <div className="plan-container" id="plans">
      <div className="plan-header">
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITH US</span>
      </div>

      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            <div className="plan-card-header">
              {plan.icon}
              <span>{plan.name}</span>
              <span>₹{plan.price}</span>
            </div>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span>See More Benefits</span>
            </div>

            <button className="btn"> Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanCards;
