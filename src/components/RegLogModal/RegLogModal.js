import React, { useState } from "react";
import "./RegLogModal.scss";
import { useDispatch, useSelector } from "react-redux";
import { handleModal } from "../../redux/actions";

export const RegLogModal = () => {
  const dispatch = useDispatch();
  const modalName = useSelector((state) => state.modalName);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [number, setNumber] = useState("");
  const [nameData, setNameData] = useState("");

  const handleClose = () => {
    dispatch(handleModal(false));
  };

  return (
    <div className="modalContainer" onClick={() => handleClose()}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <span className="modalTitle">{modalName}</span>
          <button className="closeModalButton" onClick={() => handleClose()}>
            x
          </button>
        </div>

        <div className="modalContent">
          {modalName === "Авторизація" ? (
            <div className="modalContentLogin">
              <input
                type="email"
                value={email}
                onChange={() => setEmail()}
                placeholder="Введіть email"
              />
              <input
                type="password"
                value={password}
                onChange={() => setPassword()}
                placeholder="Введіть пароль"
              />
              <button>Увійти</button>
            </div>
          ) : (
            <div className="modalContentRegistration">
              <input
                type="email"
                value={email}
                onChange={() => setEmail()}
                placeholder="Введіть email"
              />
              <input
                type="text"
                value={nameData}
                onChange={() => setNameData()}
                placeholder="Введіть П.І.П"
              />
              <input
                type="number"
                value={number}
                onChange={() => setNumber()}
                placeholder="Введіть телефон"
              />
              <input
                type="password"
                value={password}
                onChange={() => setPassword()}
                placeholder="Введіть пароль"
              />
              <input
                type="password"
                value={repeatPassword}
                onChange={() => setRepeatPassword()}
                placeholder="Повторіть пароль"
              />
              <button>Зареєструватись</button>
            </div>
          )}

          <div className="modalContentRegistration"></div>
        </div>
      </div>
    </div>
  );
};
