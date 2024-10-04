import React, { useEffect, useState } from "react";
import "./ProductsList.scss";
import { ProductItem } from "../ProductItem/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { getProductsList } from "../../redux/actions";

export const ProductsList = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);

  useEffect(() => {
    fetch("http://localhost:3000/productsList.json")
      .then((res) => res.json())
      .then((result) => {
        const productsArr = [
          ...result.hats.productList,
          ...result.jackets.productList,
          ...result.jeans.productList,
          ...result.shirts.productList,
          ...result.tshirts.productList,
          ...result.trousers.productList,
        ];
        dispatch(getProductsList(productsArr));
      });
  }, []);

  return (
    <ul className="productListContainer">
      {productList &&
        productList.map((prod, idx) => <ProductItem item={prod} key={idx} />)}
    </ul>
  );
};
