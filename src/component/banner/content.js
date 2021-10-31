import React, { useEffect,useState } from 'react'
import ContentLisst from "./contentlist"
import {useDispatch} from "react-redux"
import "./content.css"
import axios from 'axios'
import Page from "./pageipage"
import {setContent} from "./../../action/actionType"
const Content=()=> {
    const [Post, setPost] = useState([])
    const [loading, setloading] = useState(false)
    const [currentPage, setcurrentPage] = useState(1)
    const [postPerpage, setpostPerpage] = useState(30)
  const dispatch = useDispatch()
const fetchContent = async ()=>{
   setTimeout(async()=>{
    const response = await axios
    .get("https://607ab7e2bd56a60017ba2fe2.mockapi.io/api/product")
    .catch((err)=>{
       console.log("lỗi",err)
    })
    setPost(response.data)
   },2000)
    
    setloading(false)
}
useEffect(()=>{
    fetchContent();
},[])
const indexoflastpage = currentPage * postPerpage;
const indexoffirepage = indexoflastpage - postPerpage;
const currenpost = Post.slice(indexoffirepage,indexoflastpage)
const paginate =pageNumber=> setcurrentPage(pageNumber)
    return (
        <div>
              <div className="container-grid">
<ContentLisst post={currenpost} loading={loading}  />

</div>
<div className="pages">
<Page postPerpage={postPerpage}
 totalPage={Post.length}
 Pagina={paginate}
 />
</div>
        </div>
    )
}
export default Content;