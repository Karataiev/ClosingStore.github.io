import { useDispatch, useSelector } from "react-redux";
import "./BurgerMenu.scss";
import { handleBurgerButton } from "../../redux/actions";

export const BurgerMenu = () => {
  const dispatch = useDispatch();
  const isBurgerButtonClick = useSelector((state) => state.isBurgerButtonClick);

  const handleButton = () => {
    dispatch(handleBurgerButton(!isBurgerButtonClick));
    document.body.classList.add("disable-scroll");
  };
  return (
    <div
      className={`burgerMenu ${isBurgerButtonClick ? "active" : ""}`}
      onClick={() => handleButton()}
    >
      <span />
      <span />
      <span />
    </div>
  );
};
