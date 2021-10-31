import { ActionTypes } from "./../contien/actiom"
const intialState = {
  producs: [],
};

export const productsReducers = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTSS:
      return { ...state, producs: payload };
    default:
      return state;
  }
};