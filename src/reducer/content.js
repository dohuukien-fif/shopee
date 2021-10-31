import { ActionTypes } from "./../contien/actiom"
const intialState = {
 content: [
  

 ],
};
export const ContentReducer = (state = intialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_CONTENT:
      return { ...state, content:  action.payload };
      case ActionTypes.SET_FILTER_LOWER:
        return {
          ...state,
          content:action.payload.sort((a,b)=>a.price-b.price)
        //   books: action.payload.filter((el)=>el.price<=300)
        };
    default:
      return state;
  }
};