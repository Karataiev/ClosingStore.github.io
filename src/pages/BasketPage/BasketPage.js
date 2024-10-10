import React, { useEffect, useState } from "react";
import "./BasketPage.scss";
import { useSelector } from "react-redux";
import { BasketPageHeader } from "../../components/BasketPageHeader/BasketPageHeader";
import { BasketItem } from "../../components/BasketItem/BasketItem";
import { OrderForm } from "../../components/OrderForm/OrderForm";

export const BasketPage = () => {
  const [fullPrice, setFullPrice] = useState(0);
  const basket = useSelector((state) => state.basket);

  useEffect(() => {
    let priceArr = [];
    if (basket.length > 1) {
      basket.forEach((el) => {
        priceArr.push(el.price);
      });
      setFullPrice(priceArr.reduce((prev, cur) => prev + cur));
    } else if (basket.length === 1) {
      setFullPrice(basket[0].price);
    }
  }, [basket]);

  return (
    <div className="basketPageContainer">
      <BasketPageHeader />

      {basket.length !== 0 ? (
        <>
          <ul className="basketPageContentContainer">
            {basket.map((el, idx) => (
              <BasketItem key={idx} el={el} />
            ))}
          </ul>
          <div className="fullPrice">
            <span>Всього: {fullPrice} грн</span>
          </div>
          <div className="orderFormBlock">
            <span className="orderFormTitle">Оформити замовлення</span>
            <OrderForm />
          </div>
        </>
      ) : (
        <div className="emptyBasketBlock">
          <span className="emptyBasket">
            Корзина порожня. Будь ласка, оберіть товар.
          </span>
        </div>
      )}
    </div>
  );
};
