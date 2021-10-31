import React from 'react'
import {useState,useEffect} from "react"
import { BsArrowUpDown } from "react-icons/bs";
 const FilterPrice = ({menus}) => {
     const [Toger, setToger] = useState(false)
     const [state, setstate] = useState(menus);
     const [filter, setfilter] = useState("")
    

const hanfg =()=>{
    setfilter(state.sort((a,b)=>(
      filter==="cao"? a.price-b.price:""
    )))
    }
useEffect(() => {
hanfg()
},[])

    return (
        <div>
        <div className="filterPrice">
        <h6 className="total" onMouseOver={()=>setToger(!Toger)}>   <BsArrowUpDown />Sắp xếp theo</h6>
  
        </div>
        {Toger&&
           <div className="zindex">
               <span className="box"></span>
           
           
              <select value={filter} onChange={(e)=>setfilter(e.target.value)}>
                <option>thap cao</option>
                <option> cao</option>
               </select>
           
       </div>
          }
        </div>
    )
}
export default FilterPrice;