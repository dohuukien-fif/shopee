import React from 'react'
import {Link} from "react-router-dom"
 function DetaThum({image,setindexs}) {
    return (
        <div className="foucus-content3-3">
       {
            image.map((img,index)=>(
               <>
               <img className="img-deta" src={img} key={index} onClick={()=>setindexs(index)}/>
               </>
   ))
 }
        </div>
    )
}
export default DetaThum;