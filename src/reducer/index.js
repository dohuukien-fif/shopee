import { combineReducers } from "redux";
import {  selectedProductsReducer,selectedProductsReducers,selectedProductsReducerss} from "./product";
import { productsReducer } from "./product2";
import { productsReducers } from "./product3";
import {ContentReducer} from "./content"
import Cart from './cart'
const reducers = combineReducers({
  allProducts: productsReducer,
  allProductss: productsReducers,
  product22: selectedProductsReducer,
  producs: selectedProductsReducers,
  producst: selectedProductsReducerss,
  contents :ContentReducer,
  Cart:Cart,
 
});
export default reducers;