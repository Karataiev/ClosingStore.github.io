import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import "./ProductItem.scss";
import { addProductToBasket } from "../../redux/actions";

export const ProductItem = ({ item }) => {
  const [count, setCount] = useState(0);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState(null);
  const [price, setPrice] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setImage(item.image);
    setTitle(item.title);
    setPrice(item.price);
  }, [item]);

  const handleDecr = () => {
    if (count === 0) {
      return;
    } else {
      setCount(count - 1);
    }
  };

  const handleIncr = () => {
    setCount(count + 1);
  };

  const handleBuyBtn = () => {
    if (count !== 0) {
      dispatch(
        addProductToBasket({
          count: count,
          image: image,
          title: title,
          price: parseInt(price) * parseInt(count),
        })
      );
    }

    setCount(0);
  };

  return (
    <li className="productItem">
      <img src={image} alt="image" />
      <span className="productItemTitle">{title}</span>
      <span className="productItemPrice">{`${price} грн`}</span>
      <div className="buyContainer">
        <div className="countContainer">
          <button className="decr" onClick={() => handleDecr()}>
            -
          </button>
          <span className="count">{count}</span>
          <button className="incr" onClick={() => handleIncr()}>
            +
          </button>
        </div>
        <button className="buyBtn" onClick={() => handleBuyBtn()}>
          Купити
        </button>
      </div>
    </li>
  );
};
