import React, { useState } from "react";
import "./OrderForm.scss";

export const OrderForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  return (
    <form className="orderFormContainer">
      <input
        type="text"
        placeholder="Ім'я"
        value={name}
        onChange={() => setName()}
      />
      <input
        type="text"
        placeholder="Прізвище"
        value={surname}
        onChange={() => setSurname()}
      />
      <input
        type="text"
        placeholder="По-батькові"
        value={middleName}
        onChange={() => setMiddleName()}
      />
      <input
        type="email"
        placeholder="Електронна адреса"
        value={email}
        onChange={() => setEmail()}
      />
      <input
        type="text"
        placeholder="Адреса доставки"
        value={address}
        onChange={() => setAddress()}
      />
      <button>Замовити</button>
    </form>
  );
};
