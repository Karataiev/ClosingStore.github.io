import React, { useState } from "react";
import "./FullProductInfoModal.scss";
import { useDispatch, useSelector } from "react-redux";
import { addProductToBasket, openFullInfoModal } from "../../redux/actions";
import selectIconDown from "../../assets/icons/selectIconDown.svg";
import selectIconUp from "../../assets/icons/selectIconUp.svg";
import { productInfo } from "../../helper/productsDescribeInfo";

export const FullProductInfoModal = () => {
  const dispatch = useDispatch();
  const fullInfoItem = useSelector((state) => state.fullInfoItem);
  const [count, setCount] = useState(0);
  const [sizeArrow, setSizeArrow] = useState(false);
  const [getSize, setGetSize] = useState("XS");

  const handleCloseFullInfo = () => {
    dispatch(openFullInfoModal(false));
  };

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

  const sizeArr = ["XS", "S", "M", "L", "XL", "XXL"];

  const handleSize = () => {
    setSizeArrow(!sizeArrow);
  };

  const handleBuyBtn = () => {
    if (count !== 0) {
      dispatch(
        addProductToBasket({
          count: count,
          image: fullInfoItem.image,
          title: fullInfoItem.title,
          size: fullInfoItem.getSize,
          price: parseInt(fullInfoItem.price) * parseInt(count),
        })
      );
    }

    setCount(0);
  };

  const renderProductFullDescribe = (productCategory) => {
    const category = productCategory.toUpperCase();
    const itemInfo = productInfo.filter((el) =>
      category.includes(el.item.toUpperCase())
    );
    return (
      <>
        <span className="describe">{itemInfo[0].title}</span>
        <span className="care">{itemInfo[0].care}</span>
      </>
    );
  };

  return (
    <div
      className="fullProductInfoModalContainer"
      onClick={handleCloseFullInfo}
    >
      <div
        className="fullProductInfoModal"
        onClick={(e) => e.stopPropagation(e)}
      >
        <div className="modalHeader">
          <button className="closeModalButton" onClick={handleCloseFullInfo}>
            x
          </button>
        </div>

        <div className="infoBlock">
          <img className="itemImg" alt="itemImg" src={fullInfoItem.image} />

          <div className="itemInfo">
            <span className="title">{fullInfoItem.title}</span>
            <span className="price">Ціна: {fullInfoItem.price} грн</span>
            <div className="count">
              <span>Виберіть кількість товару:</span>
              <div className="countContainer">
                <button className="decr" onClick={() => handleDecr()}>
                  -
                </button>
                <span className="count">{count}</span>
                <button className="incr" onClick={() => handleIncr()}>
                  +
                </button>
              </div>
            </div>

            <div className="size">
              <span>Виберіть розмір:</span>
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
            </div>
            <button className="buyBtn" onClick={() => handleBuyBtn()}>
              Купити
            </button>
          </div>
        </div>
        <div className="describeProductInfo">
          {renderProductFullDescribe(fullInfoItem.title)}
        </div>
      </div>
    </div>
  );
};
