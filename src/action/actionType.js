import { ActionTypes } from "./../contien/actiom";

export const setFilter = (filter) => ({
  type: ActionTypes.SET_FILTER_LOWER,
  payload: filter,
});

export const accTOCART = (productsss, quantity) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    productsss,
    quantity,
  };
};

export const ondeleteTOCART = (productsss) => {
  return {
    type: ActionTypes.DELETE_PRODUCT_IN_CART,
    productsss,
  };
};
export const accUdata = (productsss, quantity) => {
  return {
    type: ActionTypes.UPDATE_QUANTITY,
    productsss,
    quantity,
  };
};
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const setProductss = (producs) => {
  return {
    type: ActionTypes.SET_PRODUCTSS,
    payload: producs,
  };
};
export const setContent = (content) => {
  return {
    type: ActionTypes.SET_CONTENT,
    payload: content,
  };
};
export const filter = (price) => {
  return {
    type: ActionTypes.FILTER,
    payload: price,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const selectedProducts = (seice) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: seice,
  };
};
export const selectedProductss = (producst) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: producst,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
