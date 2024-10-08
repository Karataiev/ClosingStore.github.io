import "./SelectFilterProduct.scss";
import selectIconDown from "../../assets/icons/selectIconDown.svg";
import selectIconUp from "../../assets/icons/selectIconUp.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  sortByHighPrice,
  sortByLowPrice,
  sortByPopular,
} from "../../redux/actions";

export const SelectFilterProduct = () => {
  const filterListArr = [
    "За популярністю",
    "Ціна за зменшенням",
    "Ціна за зростанням",
  ];

  const [toggle, setToggle] = useState(true);
  const [updatedFilterList, setUpdatedFilterList] = useState(filterListArr);
  const [arrowBtn, setArrowBtn] = useState(selectIconDown);
  const productList = useSelector((state) => state.productList);

  const dispatch = useDispatch();

  const handleSelectClick = (e) => {
    const target = e.target;
    setToggle(!toggle);

    const lowPrice = document.querySelector(".lowPrice");
    const hightPrice = document.querySelector(".hightPrice");

    if (toggle === true) {
      lowPrice.classList.add("show");
      hightPrice.classList.add("show");
      setArrowBtn(selectIconUp);
    } else {
      lowPrice.classList.remove("show");
      hightPrice.classList.remove("show");
      setArrowBtn(selectIconDown);

      if (target.textContent.length !== 0) {
        const newFilterListArr = filterListArr.filter(
          (el) => el !== target.textContent
        );
        newFilterListArr.unshift(target.textContent);
        setUpdatedFilterList(newFilterListArr);
      }
    }
  };

  const chooseTypeOfSorting = (e) => {
    const target = e.target;

    if (target.textContent === "Ціна за зменшенням") {
      const lowPrice = productList.sort((a, b) => b.price - a.price);
      dispatch(sortByLowPrice(lowPrice));
    } else if (target.textContent === "Ціна за зростанням") {
      const highPrice = productList.sort((a, b) => a.price - b.price);
      dispatch(sortByHighPrice(highPrice));
    } else {
      const makeRandomArr = (a, b) => {
        return Math.random() - 0.5;
      };
      const popularProducts = productList.sort(makeRandomArr);
      dispatch(sortByPopular(popularProducts));
    }
  };

  return (
    <div className="selectContainer" onClick={(e) => handleSelectClick(e)}>
      <div className="selectFilterProduct">
        <span>{updatedFilterList[0]}</span>
        <img src={arrowBtn} alt="selectArrow" />
      </div>
      <div className="lowPrice" onClick={(e) => chooseTypeOfSorting(e)}>
        {updatedFilterList[1]}
      </div>
      <div className="hightPrice" onClick={(e) => chooseTypeOfSorting(e)}>
        {updatedFilterList[2]}
      </div>
    </div>
  );
};
