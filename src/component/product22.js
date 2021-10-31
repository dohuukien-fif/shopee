import React, { useEffect, useCallback, useMemo,useState } from "react";
import axios from "axios";
import "./../App.css"
import { useDispatch, useSelector } from "react-redux";
import { setProductss } from "./../action/actionType";
import Product2 from "./produc2";

const ProductPage = () => {
const [Post, setPost] = useState([])
  const [loading, setloading] = useState(false)
  const [currentPage, setcurrentPage] = useState(1)
  const [postPerpage, setpostPerpage] = useState(10)
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    loading(true)
   const response = await axios
   .get("https://607ab7e2bd56a60017ba2fe2.mockapi.io/api/producs")
   .catch((err)=>{
     console.log(err)
   })
setPost(response.data)
setloading(false)
  }
  useEffect(() => {
    fetchProducts();
  }, []);

const indexoflastpage = currentPage * postPerpage;
const indexoffirepage = indexoflastpage - postPerpage;
const currenpost = Post.slice(indexoffirepage,indexoflastpage)
  return (
    <div className="ui grid container">
      <Product2 post={currenpost} loading={loading} />
    </div>
  );
};

export default ProductPage;