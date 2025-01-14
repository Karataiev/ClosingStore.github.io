import "./AdminPage.scss";
import { BasketPageHeader } from "../../components/BasketPageHeader/BasketPageHeader";
import { useSelector } from "react-redux";
import { AdminProductItem } from "../../components/AdminProductItem/AdminProductItem";

export const AdminPage = () => {
  const productList = useSelector((state) => state.productList);

  return (
    <div className="adminPageContainer">
      <BasketPageHeader headerName="Сторінка Адміністратора" />
      <div className="mainContentBlock">
        <h1>Товари</h1>
        <div className="productsHeader">
          <span>Назва</span>
          <span>Ціна</span>
          <span>Кількість</span>
          <span>Статус</span>
        </div>
        <ul className="productList">
          {productList.map((el, idx) => (
            <AdminProductItem key={idx + 1} el={el} />
          ))}
        </ul>
      </div>
    </div>
  );
};
