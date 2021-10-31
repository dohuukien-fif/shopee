import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import "./../App.css"
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./../action/actionType";
import ProductComponent from "./productCom";

const ProductPage = () => {

  
  const dispatch = useDispatch();
  const fetchProducts = async () => {
   const response = await axios
   .get("https://fakestoreapi.com/products")
   .catch((err)=>{
     console.log(err)
   })
   dispatch(setProducts(response.data))
  }
  useEffect(() => {
    fetchProducts();
  }, []);


  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductPage;