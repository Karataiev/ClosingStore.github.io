import React, { useEffect, useState } from "react";
import "./AdminProductItem.scss";

export const AdminProductItem = ({ el }) => {
  const [status, setStatus] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (status === "unavailable") {
      setCount(0);
    }
  }, [status, count]);

  const handleCounter = (type) => {
    if (type === "decr" && count > 0) {
      setCount(count - 1);
    } else if (type === "decr" && count === 0) {
      setCount(count);
    } else if (type === "incr") {
      setCount(count + 1);
    }
  };

  return (
    <li className="adminProductItem">
      <div>
        <img src={el.image} alt="product" className="productImg" />
        {el.title}
      </div>
      <div>{el.price}</div>
      <div className="counter">
        <span className="decr" onClick={() => handleCounter("decr")}>
          -
        </span>
        <span className="count">{count}</span>
        <span className="incr" onClick={() => handleCounter("incr")}>
          +
        </span>
      </div>
      <div className="availability">
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="available">В наявності</option>
          <option value="unavailable">Не в наявності</option>
        </select>
      </div>
    </li>
  );
};
