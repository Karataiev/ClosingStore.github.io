import React, { useEffect, useState } from "react";
import "./RegLogModal.scss";
import { useDispatch, useSelector } from "react-redux";
import { handleModal } from "../../redux/actions";
import { Link } from "react-router-dom";

export const RegLogModal = () => {
  const dispatch = useDispatch();
  const modalName = useSelector((state) => state.modalName);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [number, setNumber] = useState("");
  const [nameData, setNameData] = useState("");

  const [isAdminValid, setIsAdminValid] = useState(false);
  const [validClass, setValidClass] = useState("valid");

  const handleClose = () => {
    dispatch(handleModal(false));
  };

  const mockAdminData = {
    email: "admin@gmail.com",
    password: "admin123",
  };

  useEffect(() => {
    if (email == mockAdminData.email && password === mockAdminData.password) {
      setIsAdminValid(true);
    } else {
      setIsAdminValid(false);
    }
  }, [email, password]);

  const handleAdminLogin = () => {
    if (!isAdminValid) {
      setValidClass("error");
    } else {
      setValidClass("valid");
      handleClose();
    }
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
          {modalName === "Авторизація" ||
          modalName === "Авторизація адміністратора" ? (
            <form className="modalContentLogin">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Введіть email"
                required
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Введіть пароль"
                required
              />
              <span className={validClass}>Неправильний Email або пароль</span>
              <Link
                to={isAdminValid && "/adminPage"}
                className="button"
                onClick={() => handleAdminLogin()}
              >
                Увійти
              </Link>
            </form>
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
