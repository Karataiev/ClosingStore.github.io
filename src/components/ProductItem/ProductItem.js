import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import selectIconDown from "../../assets/icons/selectIconDown.svg";
import selectIconUp from "../../assets/icons/selectIconUp.svg";
import "./ProductItem.scss";
import {
  addProductToBasket,
  getFullInfoItem,
  openFullInfoModal,
} from "../../redux/actions";

export const ProductItem = ({ item }) => {
  const [count, setCount] = useState(0);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState(null);
  const [price, setPrice] = useState(null);
  const [sizeArrow, setSizeArrow] = useState(false);
  const [getSize, setGetSize] = useState("XS");
  const isOpenFullInfoModal = useSelector((state) => state.isOpenFullInfoModal);

  const dispatch = useDispatch();

  const sizeArr = ["XS", "S", "M", "L", "XL", "XXL"];

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
          size: getSize,
          price: parseInt(price) * parseInt(count),
        })
      );
    }

    setCount(0);
  };

  const handleSize = () => {
    setSizeArrow(!sizeArrow);
  };

  const handleOpenFullInfo = () => {
    dispatch(
      getFullInfoItem({
        count: count,
        image: image,
        title: title,
        size: getSize,
        price: price,
      })
    );
    dispatch(openFullInfoModal(!isOpenFullInfoModal));
  };

  return (
    <li className="productItem" onClick={() => handleOpenFullInfo()}>
      <img src={image} alt="prod" className="image" />
      <span className="productItemTitle">{title}</span>
      <span className="productItemPrice">{`${price} грн`}</span>
      <div className="buyContainer" onClick={(e) => e.stopPropagation(e)}>
        <div className="countContainer">
          <button className="decr" onClick={() => handleDecr()}>
            -
          </button>
          <span className="count">{count}</span>
          <button className="incr" onClick={() => handleIncr()}>
            +
          </button>
        </div>

        <div className="sizeList" onClick={() => handleSize()}>
          <div className="fixedSize">
            {sizeArrow ? (
              sizeArr.map((el) => (
                <span
                  key={el}
                  className="oneOfSize"
                  onClick={(e) => setGetSize(e.target.textContent)}
                >
                  {el}
                </span>
              ))
            ) : (
              <span>{getSize}</span>
            )}
          </div>
          <img
            src={sizeArrow ? selectIconUp : selectIconDown}
            alt="selectArrow"
          />
        </div>

        <button className="buyBtn" onClick={() => handleBuyBtn()}>
          Купити
        </button>
      </div>
    </li>
  );
};
