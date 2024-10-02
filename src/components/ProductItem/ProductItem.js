import React from "react";
import "./ProductItem.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeCount } from "../../redux/actions";

export const ProductItem = ({ item }) => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleDecr = () => {
    if (count === 0) {
      return;
    } else {
      dispatch(changeCount(count - 1));
    }
  };

  const handleIncr = () => {
    dispatch(changeCount(count + 1));
  };

  return (
    <li>
      {/* <img src={item.image} alt="image" /> */}
      <div className="img">image</div>
      <span className="productItemTitle">{item.tittle}</span>
      <span className="productItemPrice">{`${item.price} грн`}</span>
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
        <button className="buyBtn">Купити</button>
      </div>
    </li>
  );
};
