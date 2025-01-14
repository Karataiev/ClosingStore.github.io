import {
  GET_PRODUCTS_LIST,
  CREATE_UNCHANGED_PRODUCT_LIST,
  HANDLE_BURGER_BUTTON,
  SORT_BY_LOW_PRICE,
  SORT_BY_HIGH_PRICE,
  SORT_BY_POPULAR,
  FILTER_BY_CATEGORY,
  ADD_PRODUCT_TO_BASKET,
  REMOVE_PRODUCT_FROM_BASKET,
  HANDLE_MODAL,
  GET_MODAL_NAME,
  OPEN_FULL_INFO_MODAL,
  GET_FULL_INFO_ITEM,
} from "./actions";

const defaultState = {
  isBurgerButtonClick: false,
  unchangedProductList: [],
  productList: [],
  basket: [],
  isModalOpen: false,
  modalName: "",
  isOpenFullInfoModal: false,
  fullInfoItem: {},
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
    case SORT_BY_POPULAR:
      return { ...state, productList: [...action.payload] };
    case FILTER_BY_CATEGORY:
      return { ...state, productList: [...action.payload] };
    case ADD_PRODUCT_TO_BASKET:
      return { ...state, basket: [...state.basket, action.payload] };
    case REMOVE_PRODUCT_FROM_BASKET:
      return { ...state, basket: [...action.payload] };
    case CREATE_UNCHANGED_PRODUCT_LIST:
      return { ...state, unchangedProductList: [...action.payload] };
    case HANDLE_MODAL:
      return { ...state, isModalOpen: action.payload };
    case GET_MODAL_NAME:
      return { ...state, modalName: action.payload };
    case OPEN_FULL_INFO_MODAL:
      return { ...state, isOpenFullInfoModal: action.payload };
    case GET_FULL_INFO_ITEM:
      return { ...state, fullInfoItem: action.payload };
    default:
      return state;
  }
};
