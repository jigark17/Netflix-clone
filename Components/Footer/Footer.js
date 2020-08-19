import React from "react";
import "./Footer.scss";
import JigarLogo from "../../Assets/jigarLogo.png";
import github from "../../Assets/github.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__start">
          <img
            src={JigarLogo}
            // alt="github"
            className="footer__logo-github jigarLogo"
          />

          <h1 className="footer__text footer__text--1">
            By <span className="footer__link">Jigar Kumar</span>
          </h1>
        </div>

        <div className="footer__center"></div>

        <div
          className="footer__end"
          // onClick={() =>
          //   // window.open(`https://github.com/darwin619/Netflix-Clone`, "_blank")
          // }
        >
          <img src={github} alt="github" className="footer__logo-github" />

          <h1 className="footer__text footer__link">View on Github</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
