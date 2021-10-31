import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdLogOut } from "react-icons/io";
 function Banner3() {
    return (
        <div>
            <div className="container_banner3">
                     <div className="banner3-1">
                            <span>XU HƯỚNG TÌM KIẾM</span>
                            <span><IoMdLogOut /><Link>Xem Thêm</Link></span>

                     </div>
                     <div className="banner3-2">
                       <ul>
                           <li><Link>
                        <div className="nav_link">
                        <div className="nav_link-link">
                              <span>Juvera T</span>
                           <p>2 sản phẩm</p>
                              </div>
                              <div className="link_image"><img src="./img/bn15.jpg" /></div>
                        </div>
                           </Link></li>
                           <li><Link>
                           <div className="nav_link">
                        <div className="nav_link-link">
                              <span>Nước hoa nam</span>
                           <p>250+ sản phẩm</p>
                              </div>
                              <div className="link_image"><img src="./img/bn16.jpg" /></div>
                        </div>
                           </Link></li>
                           <li><Link>
                           <div className="nav_link">
                        <div className="nav_link-link">
                              <span>Balo nữ</span>
                           <p>65+ sản phẩm</p>
                              </div>
                              <div className="link_image"><img src="./img/bn17.jpg" /></div>
                        </div>
                           </Link></li>
                           <li><Link>
                           <div className="nav_link">
                        <div className="nav_link-link">
                              <span>Kính mát</span>
                           <p>725+ sản phẩm</p>
                              </div>
                              <div className="link_image"><img src="./img/bn18.jpg" /></div>
                        </div>
                           </Link></li>
                           <li><Link>
                           <div className="nav_link">
                        <div className="nav_link-link">
                              <span>Áo sơ mi nam</span>
                           <p>150 sản phẩm</p>
                              </div>
                              <div className="link_image"><img src="./img/bn19.jpg" /></div>
                        </div>
                           </Link></li>
                          
                       </ul>
                     </div>
            </div>
        </div>
    )
}
export default Banner3