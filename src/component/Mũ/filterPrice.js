import React from 'react'
import {useState} from "react"
import { BsArrowUpDown } from "react-icons/bs";
 const FilterPrice = ({filterTotal}) => {
     const [Toger, setToger] = useState(false)

    return (
        <div>
        <div className="filterPrice">
        <h6 className="total" onMouseOver={()=>setToger(!Toger)}>   <BsArrowUpDown />Sắp xếp theo</h6>
  
        </div>
        {Toger&&
           <div className="zindex">
               <span className="box"></span>
           <ul>
               <li className="filtertotal">
                   Sắp xêp theo
               </li>
               <li >
                   Sản phẩm mới nhất
               </li>
               <li>
                  Sản phẩm mua nhiều
               </li>
               <li>
                   Giá từ thấp đến cao
               </li>
               <li>
                   Giá từ cao đến thấp
               </li>
               <li>
                  Giảm giá nhiều nhất
               </li>
           </ul>
       </div>
          }
        </div>
    )
}
export default FilterPrice;