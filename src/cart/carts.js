import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./cart.css"
import CartRellll from './cartRell'
import Information from "./information"
export default class Cart extends Component {
    render() {
      console.log(this.props.children)
        return (
            <div>
           <div className="container-cart">
           <div className="backg">
            <Link to="/">Trang chủ</Link>
              <p className="Gio">Giỏ Hàng</p>
             
            </div>
            <div className="cart-title">
               <h4>GIỎ HÀNG CỦA BẠN</h4>
             </div>
          
               <div className="titele_cart-title">
                 <div >
                   <span>Sản phẩm</span>
                 
                 </div>
                 <div className="titele_cart-title2">
                 <span>Giá</span>
                   </div>
                   <div className="titele_cart-title3">
                   <span>Giảm</span>
                   <span>Số lượng</span>
                   <span>Tăng</span>
                   <span>Xóa</span>
                   </div>
               </div>
  <tbodys className="table-cart">
    {this.props.children}
  </tbodys>

           </div>
         
            </div>
        )
    }
}
