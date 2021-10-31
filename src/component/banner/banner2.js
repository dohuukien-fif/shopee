import React from 'react'

import { Link } from 'react-router-dom'

export default function Banner2() {
  
    return (
        <div>
            <div className="container__banner2">
                      <div className="banner2_1">
                    
                            <ul>
                               <li>
                                   <Link to="/Nước- hoa"><img src="./img/bn.png" /></Link>
                                   
                               </li>
                               
                               <li>
                                   <Link to="/Watch"><img src="./img/bn1.png" /></Link>
                               </li>
                               <li>
                                   <Link to="/Giày"><img src="./img/bn2.png" /></Link>
                               </li>
                               <li>
                                   <Link to="/túi-sách"><img src="./img/bn3.png" /></Link>
                               </li>
                               <li>
                                   <Link to="/Kính"><img src="./img/bn4.png" /></Link>
                               </li>
                               <li>
                                   <Link to="/Thoi-trang"><img src="./img/bn5.png" /></Link>
                               </li>
                               <li>
                                   <Link to="/My-pham"><img src="./img/bn6.png" /></Link>
                               </li>
                               <li>
                                   <Link><img src="./img/bn7.png" /></Link>
                               </li>
                           </ul>
                      </div>
                      <div className="banner2_2">
                      <ul>
                               <li>
                                   <Link to="/Son"><img src="./img/bn8.png" /></Link>
                               </li>
                               <li>
                                   <Link to="/My-pham"><img src="./img/bn9.png" /></Link>
                               </li>
                               <li>
                                   <Link to="/Thoi-trang"><img src="./img/bn10.png" /></Link>
                               </li>
                               <li>
                                   <Link to="/Thoi-trang"><img src="./img/bn11.png" /></Link>
                               </li>
                               <li>
                                   <Link to="/Thoi-trang"><img src="./img/bn12.png" /></Link>
                               </li>
                               <li>
                                   <Link to="/My-pham"><img src="./img/bn13.png" /></Link>
                               </li>
                               <li>
                                   <Link to="/My-pham"><img src="./img/bn14.png" /></Link>
                               </li>
                               <li>
                                   <Link to="/Nước- hoa"><img src="./img/bn.png" /></Link>
                               </li>
                           </ul>
</div>
<div className="banner2-2-2">
                <ul className="banner2_3">
                    <li>
                        <Link><img src="./img/bn10.jpg" /></Link>
                    </li>
                    <li>
                        <Link><img src="./img/bn11.jpg" /></Link>
                    </li>
                    <li>
                        <Link><img src="./img/bn12.jpg" /></Link>
                    </li>
                </ul>
            </div>
            </div>
         
        </div>
    )
}
