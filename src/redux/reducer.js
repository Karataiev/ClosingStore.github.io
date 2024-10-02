import {
  CHANGE_COUNT,
  GET_PRODUCTS_LIST,
  HANDLE_BURGER_BUTTON,
  SORT_BY_LOW_PRICE,
  SORT_BY_HIGH_PRICE,
  GET_TYPE_OF_SORTING,
} from "./actions";

const defaultState = {
  isBurgerButtonClick: false,
  productList: [],
  count: 0,
  typeOfSorting: "За популярністю",
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case HANDLE_BURGER_BUTTON:
      return { ...state, isBurgerButtonClick: action.payload };
    case GET_PRODUCTS_LIST:
      return { ...state, productList: [...action.payload] };
    case SORT_BY_LOW_PRICE:
      return { ...state, productList: [...action.payload] };
    case SORT_BY_HIGH_PRICE:
      return { ...state, productList: [...action.payload] };
    case CHANGE_COUNT:
      return { ...state, count: action.payload };
    case GET_TYPE_OF_SORTING:
      return { ...state, typeOfSorting: action.payload };
    default:
      return state;
  }
};
