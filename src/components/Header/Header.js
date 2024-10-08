import React, { useEffect, useState } from "react";
import "./Header.scss";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import location from "../../assets/location.png";
import contactUs from "../../assets/contactUs.png";
import basket from "../../assets/basket.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Header = () => {
  const [numberOfProduct, setNumberOfProduct] = useState(0);
  const basketState = useSelector((state) => state.basket);

  useEffect(() => {
    if (basketState.length > 0) {
      const sum = numberOfProduct + basketState[basketState.length - 1].count;
      setNumberOfProduct(sum);
    } else if (basketState.length === 0) {
      setNumberOfProduct(0);
    }
  }, [basketState]);

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
      <Link to={"basketPage"} className="basket">
        <img src={basket} alt="basket" />

        {basketState.length > 0 && (
          <div className="numberOfProductBlock">
            <span className="numberOfProductTitle">{numberOfProduct}</span>
          </div>
        )}
      </Link>
      <div className="login-registration">
        <button>Увійти</button> / <button>Зареєструватись</button>
      </div>
    </header>
  );
};
