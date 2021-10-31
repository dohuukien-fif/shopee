
import React, { Component } from 'react'
import { BsTrash } from "react-icons/bs";
export default class CartItem extends Component {
  constructor(props){
    super(props);
    this.state={
      quantity:1
    }
  }
    render() {
      var {item} = this.props;
   
    
        return (
        
                         <div>
                            <div className="ll">
      <div className="cart-ll">
      <span className="image-cart__cart"><img className="image-cart" src={item.productsss.image[0]}/></span>

<span className="table-cartss"><span className="name-cart">{item.productsss.name}</span></span>

        </div>
        <div>
<span>{this.total(item.productsss.price,item.quantity)}</span>
</div>
<div className="mm">
<span className="ccs" onClick ={()=>this.showToata(item.productsss,item.quantity -1)}>-</span>
<span className="ccs">{this.state.quantity}</span>
<span className="ccs" onClick ={()=>this.showToata(item.productsss,item.quantity +1)}>+</span>
<span className="ccs"><span  onClick={()=>this.ondelete(item.productsss)}><BsTrash className="icon_cart" /></span></span>
</div>
                      

     
    </div>  
 
                         </div>
    
        )
    }
    showToata = (productsss,quantity) =>{
      if(quantity >0){
        this.setState({
          quantity:quantity
        });
        this.props.onUpdate(productsss,quantity)
      }
    }
    ondelete(productsss){
    this.props.ondeletee(productsss);
    }
    total = (price,quantity)=>{
      return parseFloat( price) *quantity
    }
}
 