import React from 'react'
import {useState,useEffect} from "react"
import MenuList from "./menuLisst"
import Button from "./button"
import {Garys} from "./data"
import "./watch.css"
import axios from 'axios'
import Sice from "./sice"
import Filter from "./filterPrice"
import {Link} from "react-router-dom"
import FoucusContent from "../banner/foucusContent"
const allcontat = ["ALL",...new Set(Garys.map(item=>item.trademark))]
function Menu(){
    const [Menus, setMenu] = useState(Garys);
    const [Buttons, setButton] = useState(allcontat);
console.log(Menus)
       const filter =(checkbox)=>{
           if(checkbox ==="ALL"){
          setMenu(Garys)
               return ;
           }
           const datafilter = Menus.filter(item=>item.trademark ===checkbox||item.cord ===checkbox||item.machie ===checkbox||item.Facecolor ===checkbox)
           setMenu(datafilter)
       }
  
        return (
       <div>
                <div className="container__watch">
                  <div className="container__watch1">
                  <Button filter={filter} button={Buttons}  />
                  <div className="watch-input">
                      <input type="text" placeholder="đ TỪ"/> -  <input type="text" placeholder="đ ĐẾN"/>
                  </div>
                  <div>
                      <button className="menu-button">Đánh giá 4* cho danh mục</button>
                      <p className="description">
                     <strong> Thời trang hàng hiệu 2021 -</strong>  Xu hướng thời trang trẻ cao cấp: quần áo nam nữ, váy, áo sơ mi,...từ các hãng nổi tiếng MLB, CK, Guess, Gucci, Lacoste, Burberry, Dior, Chanel, Hermes…nhập khẩu chính hãng.
                      </p>
                  </div>
                  </div>
                  <div className="cc">
                      <div className="bum">
                           <div>
                               <span >Kính mát</span>
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
             
<strong>Thời trang</strong>  là thói quen ăn mặc, gu giày dép, phụ kiện hay phong cách trang điểm phổ biến. Nó là một phong cách đặc biệt và không thay đổi của chúng ta trong một thời gian dài. Đó có thể là những xu hướng thời trang đang thịnh hành và những sáng tạo mới nhất của các nhà thiết kế trang phục.
                </p>
               
                <h3>Tin tức xu hướng thời trang mới nhất 2021</h3>
                <p>
                Cập nhật tin tức - xu hướng thời trang trẻ mới nhất 2021. Mẹo phối đồ, hướng dẫn nhận biết Real - fake cho các tín đồ thời trang.


<p>

         
      

</p>
                </p>
            </div>
            <FoucusContent />
       </div>
        )
    }
export default Menu;
