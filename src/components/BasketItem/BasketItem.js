import React from "react";
import "./BasketItem.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeProductFromBasket } from "../../redux/actions";

export const BasketItem = ({ el }) => {
  const basket = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  const handleRemoveBtn = (e) => {
    const target = e.target.closest("li").querySelector(".title").textContent;
    const newArr = basket.filter((el) => el.tittle !== target);
    dispatch(removeProductFromBasket(newArr));
  };

  return (
    <li className="basketItem">
      <img src={el.image} alt="product_image" />
      <div className="productInfo">
        <span className="title">{el.tittle}</span>
        <span className="count">Кількість: {el.count}</span>
        <span className="price">Ціна: {el.price} грн</span>
      </div>
      <button onClick={(e) => handleRemoveBtn(e)}>Видалити</button>
    </li>
  );
};
