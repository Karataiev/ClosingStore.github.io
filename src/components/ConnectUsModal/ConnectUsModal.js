import React from "react";
import "./ConnectUsModal.scss";

export const ConnectUsModal = ({ setIsContactUs }) => {
  return (
    <div
      className="connectUsModalContainer"
      onClick={() => setIsContactUs(false)}
    >
      <div className="connectUsModal" onClick={(e) => e.stopPropagation()}>
        <span>Телефон: +38 050 222 33 11</span>
        <span>Email: StyleShop@gmail.com</span>
      </div>
    </div>
  );
};
