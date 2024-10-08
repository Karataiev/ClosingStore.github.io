import React from "react";
import "./CategoryFilter.scss";
import { useDispatch, useSelector } from "react-redux";
import { filterByCategory } from "../../redux/actions";

const filterTitlesArr = [
  "Брюки",
  "Джинси",
  "Куртки",
  "Сорочки",
  "Футболки",
  "Шапки",
];

export const CategoryFilter = () => {
  const dispatch = useDispatch();
  const unchangedProductList = useSelector(
    (state) => state.unchangedProductList
  );

  const handleClick = (e) => {
    const target = e.target;
    const list = document.querySelectorAll("li");
    list.forEach((el) => {
      if (el.className.includes("active")) el.classList.remove("active");
    });
    target.classList.add("active");

    const productNameArr = target.textContent.split("");
    productNameArr.splice(-1, 1);
    const correctName = productNameArr.join("");

    const filteredProducts = unchangedProductList.filter((el) =>
      el.tittle.toLowerCase().includes(correctName.toLowerCase())
    );
    dispatch(filterByCategory(filteredProducts));
  };

  return (
    <ul className="categoryFilterContainer">
      <span>Категорії</span>
      {filterTitlesArr.map((el) => (
        <li key={el} onClick={(e) => handleClick(e)}>
          {el}
        </li>
      ))}
    </ul>
  );
};
