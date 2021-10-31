import React from 'react'
import {Link} from "react-router-dom"
 function Header() {
    return (
        <div>
           <ul>
               <li> <Link to="/">hay</Link></li>
               <li> <Link to="/product/:productId">quá</Link></li>
               <li> <Link to="/products/:productIds">quáss</Link></li>
               <li> <Link to="/product">đi</Link></li>
           </ul>
        </div>
    )
}
export default Header;