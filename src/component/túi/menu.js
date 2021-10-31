import React from 'react'
import {useState,useEffect} from "react"
import MenuList from "./menuLisst"
import Button from "./button"
import {Datas} from "./data"
import "./watch.css"
import axios from 'axios'
import Sice from "./sice"
import Filter from "./filterPrice"
import {Link} from "react-router-dom"
import FoucusContent from "./../banner/foucusContent"
const allcontat = ["ALL",...new Set(Datas.map(item=>item.trademark))]
function Menu(){
    const [Menus, setMenu] = useState(Datas);
    const [Buttons, setButton] = useState(allcontat);

       const filter =(checkbox)=>{
           if(checkbox ==="ALL"){
          setMenu(Datas)
               return ;
           }
           
           const datafilter = Menus.filter(item=>item.trademark ===checkbox||item.cord ===checkbox||item.machie ===checkbox||item.Facecolor ===checkbox)
           setMenu(datafilter)
       }
  
        return (
       <div>
                <div className="container__watch">
                  <div className="container__watch1">
                  <Button filter={filter} button={Buttons} />
                  <div className="watch-input">
                      <input type="text" placeholder="đ TỪ"/> -  <input type="text" placeholder="đ ĐẾN"/>
                  </div>
                  <div>
                      <button className="menu-button">Đánh giá 4* cho danh mục</button>
                      <p className="description">
                     <strong> Túi xách hàng hiệu</strong>là phụ kiện thời trang thời thượng 2021 không thể thiếu của các cô gái cá tính công sở, bởi nó không chỉ là món đồ tiện ích mà còn thể hiện gu thời trang thẩm mỹ của phái đẹp trong mọi lúc. Chính vì vậy, Vua Hàng Hiệu sẽ mang đến cho bạn những túi xách nữ hàng hiệu đẹp cao cấp chính hãng, đủ kiểu dáng tote, đeo chéo, xách tay, cầm tay, ví cho cả Nam và Nữ... giá cả phải chăng, vận chuyển toàn quốc, giao hàng thu tiền tận nơi.
                      </p>
                  </div>
                  </div>
                  <div className="cc">
                      <div className="bum">
                           <div>
                               <span >Đồng Hồ</span>
                           </div>
                           <div >
                               <Filter />
                           </div>
                      </div>
                      <div className="sice__watch">
                          <Sice  />
                      </div>
                  <div className="container__watch2">
                     
                     <MenuList menuss={Menus}/>
                   
                     </div>
                     <div className="page">
                        <span>Hiển thị từ 1 đến 32 / 2085 sản phẩm</span><br/>
                        <span>1 2 3 ... 66 Trang tiếp </span>
                  </div>
                  </div>
               
            </div>
            <div className="foucuscontent"> 
                <p>
             
<strong>Túi xách hàng hiệu</strong> không chỉ là phụ kiện thời trang dành cho các cô gái nữ tính mà còn là mặt hàng ưa chuộng của các quý ông, bởi nó không chỉ là món đồ tiện ích mà còn thể hiện gu thời trang thẩm mỹ của cả hai phái mọi lúc mọi nơi.
                </p>
                <h3>10 kiểu dáng túi xách đẹp nhất</h3>
                <p>
                Có nhiều kiểu dáng túi và phong cách túi phù hợp cho nam và nữ.<br/>
<h5><strong>1. Balo</strong></h5>
<p>
Hay còn đươc gọi là túi Backpack,  thiết kế dạng quai đeo sau lưng chủ yếu dùng để đựng nhiều đồ hoặc laptop.
            <h5><strong>2.Túi hình trống</strong></h5>
            <p>
            Còn có tên gọi khác là túi Duffle, túi có dạng hình trụ, phần thân dài, rộng hơn những chiếc túi thông thường, túi phù hợp cho các hoạt động thể thao hay đi du lịch
            </p>
</p>
                </p>
            </div>
            <FoucusContent />
       </div>
        )
    }
export default Menu;
