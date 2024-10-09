import React from "react";
import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerLogo">
        <span>CL_STORE</span>
      </div>
      <div className="footerInfo">
        <span>Допомога</span>
        <span>Звязатися з нами</span>
        <span>Соціальні мережі</span>
      </div>
    </div>
  );
};
