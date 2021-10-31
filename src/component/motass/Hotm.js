import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
  selectedProducts,
  selectedProductss,
  accTOCART
} from "../../action/actionType";
import {Datas} from "../hot/data"
import{useState} from "react"
import DetaThum  from "./DeKinh";
const ProductMota = (props) => {
   const [product, setproduct] = useState(Datas)
   const [Index, setIndex] = useState(0)
    const{idss}=useParams();
    const dispatch = useDispatch()
console.log(product)
    let detas = product.filter((item,index)=>{
      return item.id===idss
    })
    const productssss = (productsss)=>{
     const action = accTOCART(productsss,1)
     dispatch(action)
    }
    console.log(detas)
  return (
<div>
  {detas.map(product=>(
         <div className="ui grid container">
        {product.length === 0 ? (
        <div>...Loading</div>
      ) : (
         <div className="ui placeholder segment">
           <div className="ui two column stackable center aligned grid">
             <div className="ui vertical divider">AND</div>
             <div className="middle aligned row">
               <div className="column lp">
               <img className="ui fluid image" src={`${product.image[Index]}`} />
               </div>
              {product.name}
             </div>
            <DetaThum image={product.image} setindex={setIndex} />
             <div>
           <a name="" id="" class="btn btn-primary" href="#" role="button" onClick={productssss(product)}>mua</a>
             </div>
           </div>
         </div>
      )}
     </div>
 
  ))
}
</div>
  );
};

export default ProductMota;