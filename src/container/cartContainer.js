import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cartitem from './../cart/cartItem';
import Cart from './../cart/carts';

import {ondeleteTOCART,accUdata} from './../action/actionType';
import CartRellll from './../cart/cartRell';


class ContainerCarrt extends Component {
    render(){
        var {cart }=this.props;
    return (
        <div>
<Cart>
            {this.showCart(cart)}
            {this.showCartrell(cart)}
      
          
        </Cart>
        </div>
    
    )
}
showCart=(cart)=>{
var result = null;
var { ondeletee,onUpdate}=this.props;
if(cart.length > 0){
result = cart.map((item,index)=>{
    return(<Cartitem
    key={index}
    item={item}
    ondeletee={ ondeletee}
    onUpdate={onUpdate}
    />

    )
})
}
return result;
}
showCartrell=(cart)=>{
    var result = null;
    if(cart.length >0){
       result = <CartRellll
      
        cart ={cart}
        />
    }
    return result;
}


}
const mapStateToProps = state => {
    return{
        cart:state.Cart
    }
}
const mapDispatchToProps =(dispatch,props)=>{
    return {
        ondeletee:(productsss)=>{
            dispatch(ondeleteTOCART(productsss))
        },
        onUpdate :(productsss,quantity)=>{
            dispatch(accUdata(productsss,quantity))
        }
}

}


export default connect(mapStateToProps, mapDispatchToProps)(ContainerCarrt)

