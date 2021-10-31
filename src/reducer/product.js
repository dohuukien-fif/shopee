import { ActionTypes } from "./../contien/actiom";

const intialState = {
  product: [],
  seice: {},
};

export const selectedProductsReducer = (
  state = intialState,
  { type, payload }
) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
export const selectedProductsReducers = (
  state = intialState,
  { type, payload }
) => {
  console.log(type);

  switch (type) {
    case ActionTypes.SELECTED_PRODUCTS:
      return { ...state.seice, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
export const selectedProductsReducerss = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCTS:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
