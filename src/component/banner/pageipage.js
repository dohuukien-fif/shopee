import React from 'react'
import{Link, NavLink} from "react-router-dom"
import { PaginationItem } from 'reactstrap';
 const Pageipage = ({postPerpage,totalPage,Pagina}) => {
    const pageNumber = [];
    for(let i = 1;i<=Math.ceil(totalPage/postPerpage);i++){
        pageNumber.push(i)
    }
    return (
        <div className="">
          <ul>
          {pageNumber.map(number=>(
               <li key={number}>
                   <Link  onClick={()=>Pagina(number)}>{number}</Link>
               </li>
           ))} 
          </ul>
        </div>
    )
}
export default Pageipage;