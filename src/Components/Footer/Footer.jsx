import React from "react";
import "./Footer.scss";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="blur foot-blur"></div>
      <div className="footer">
        <div className="social-links">
          <img src={github} alt="" />
          <img src={linkedin} alt="" />
          <img src={instagram} alt="" />
        </div>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
