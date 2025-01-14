import React, { useEffect, useState } from "react";
import "./OrderForm.scss";

export const OrderForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    const inputsArr = document.querySelectorAll("input");
    inputsArr.forEach((el) => {
      if (el.value === "") {
        el.classList.add("empty");
      } else {
        el.classList.remove("empty");
      }
    });
  }, [name, surname, middleName, email, address]);

  return (
    <form className="orderFormContainer">
      <div className="formsBlock">
        <div className="userInfo">
          <input
            type="text"
            placeholder="Ім'я"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Прізвище"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
          <input
            type="text"
            placeholder="По-батькові"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Електронна адреса"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="deliverInfo">
          <input
            type="text"
            placeholder="Адреса доставки"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <label>
            Виберіть спосіб доставки:
            <select>
              <option value="NP">На відділення Нової Пошти</option>
              <option value="deliver">Кур'єром по адресу</option>
              <option value="UAP">На відділення Укрпошти</option>
              <option value="Another">Самовивіз зі складу</option>
            </select>
          </label>

          <label>
            Виберіть спосіб оплати:
            <select>
              <option value="first">Оплата при отримані</option>
              <option value="second">Оплата онлайн</option>
              <option value="third">Оплата за реквізитами</option>
            </select>
          </label>
        </div>
      </div>

      <button>Замовити</button>
    </form>
  );
};
