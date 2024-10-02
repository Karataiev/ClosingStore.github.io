import React from "react";
import "./MainPage.scss";
import { SelectFilterProduct } from "../../components/SelectFilterProduct/SelectFilterProduct";
import { ProductsList } from "../../components/ProductsList/ProductsList";

export const MainPage = () => {
  return (
    <div className="mainPageContainer">
      <span className="mainPageTittle">Одяг</span>

      <div className="mainPageContentContainer">
        <div className="mainPageHeader">
          <div className="tittleBlock">
            <span>Фільтри</span>
          </div>

          <div className="sortInput">
            <span>Сортувати по:</span>
            <SelectFilterProduct />

            {/* <input placeholder="по популярністю" /> */}
          </div>
        </div>
        <div className="mainPageContent">
          <div className="mainPageFilter"></div>
          <div className="mainPageProducts">
            <ProductsList />
          </div>
        </div>
      </div>
    </div>
  );
};
