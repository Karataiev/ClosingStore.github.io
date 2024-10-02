export const HANDLE_BURGER_BUTTON = "HANDLE_BURGER_BUTTON";
export const GET_PRODUCTS_LIST = "GET_PRODUCTS_LIST";
export const CHANGE_COUNT = "CHANGE_COUNT";
export const SORT_BY_LOW_PRICE = "SORT_BY_LOW_PRICE";
export const SORT_BY_HIGH_PRICE = "SORT_BY_HIGH_PRICE";
export const GET_TYPE_OF_SORTING = "GET_TYPE_OF_SORTING";

export const handleBurgerButton = (payload) => {
  return { type: HANDLE_BURGER_BUTTON, payload: payload };
};

export const getProductsList = (payload) => {
  return { type: GET_PRODUCTS_LIST, payload: payload };
};

export const changeCount = (payload) => {
  return { type: CHANGE_COUNT, payload: payload };
};

export const sortByLowPrice = (payload) => {
  return { type: SORT_BY_LOW_PRICE, payload: payload };
};

export const sortByHighPrice = (payload) => {
  return { type: SORT_BY_LOW_PRICE, payload: payload };
};

export const getTypeOfSorting = (payload) => {
  return { type: GET_TYPE_OF_SORTING, payload: payload };
};
