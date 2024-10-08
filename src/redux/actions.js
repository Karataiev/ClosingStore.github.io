export const HANDLE_BURGER_BUTTON = "HANDLE_BURGER_BUTTON";
export const GET_PRODUCTS_LIST = "GET_PRODUCTS_LIST";
export const SORT_BY_LOW_PRICE = "SORT_BY_LOW_PRICE";
export const SORT_BY_HIGH_PRICE = "SORT_BY_HIGH_PRICE";
export const SORT_BY_POPULAR = "SORT_BY_POPULAR";
export const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY";
export const CREATE_UNCHANGED_PRODUCT_LIST = "CREATE_UNCHANGED_PRODUCT_LIST";
export const ADD_PRODUCT_TO_BASKET = "ADD_PRODUCT_TO_BASKET";
export const REMOVE_PRODUCT_FROM_BASKET = "REMOVE_PRODUCT_FROM_BASKET";

export const handleBurgerButton = (payload) => {
  return { type: HANDLE_BURGER_BUTTON, payload: payload };
};

export const getProductsList = (payload) => {
  return { type: GET_PRODUCTS_LIST, payload: payload };
};

export const createUnchangedProductList = (payload) => {
  return { type: CREATE_UNCHANGED_PRODUCT_LIST, payload: payload };
};

export const sortByLowPrice = (payload) => {
  return { type: SORT_BY_LOW_PRICE, payload: payload };
};

export const sortByHighPrice = (payload) => {
  return { type: SORT_BY_LOW_PRICE, payload: payload };
};

export const sortByPopular = (payload) => {
  return { type: SORT_BY_POPULAR, payload: payload };
};

export const filterByCategory = (payload) => {
  return { type: FILTER_BY_CATEGORY, payload: payload };
};

export const addProductToBasket = (payload) => {
  return { type: ADD_PRODUCT_TO_BASKET, payload: payload };
};

export const removeProductFromBasket = (payload) => {
  return { type: REMOVE_PRODUCT_FROM_BASKET, payload: payload };
};
