import React from "react";
import "./Header.scss";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import location from "../../assets/location.png";
import contactUs from "../../assets/contactUs.png";
import basket from "../../assets/basket.png";

export const Header = () => {
  return (
    <header className="headerContainer">
      <div className="burgerMenuBlock">
        <BurgerMenu />
      </div>
      <div className="location">
        <img src={location} alt="location" />
        <span>Україна</span>
      </div>
      <div className="namingLogo">CL_STORE</div>
      <div className="contactUs">
        <img src={contactUs} alt="contactUs" />
        <span>Зв'язатись з нами</span>
      </div>
      <div className="basket">
        <img src={basket} alt="basket" />
      </div>
      <div className="login-registration">
        <button>Увійти</button> / <button>Зареєструватись</button>
      </div>
    </header>
  );
};
