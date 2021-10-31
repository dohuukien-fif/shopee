import React from 'react'
import {useState,useEffect} from "react"
import MenuList from "./menuLisst"
import Button from "./button"
import {Data} from "./data"
import "./watch.css"
import axios from 'axios'
import Sice from "./sice"
import Filter from "./filterPrice"
import {Link} from "react-router-dom"
import FoucusContent from "./../banner/foucusContent"
const allcontat = ["ALL",...new Set(Data.map(item=>item.trademark))]
function Menu(){
    const [Menus, setMenu] = useState(Data);
    const [bum, setbum] = useState([])
    const [Buttons, setButton] = useState(allcontat);
    
    var data = JSON.parse(localStorage.getItem('HH'));
       const filter =(checkbox)=>{
     
           if(checkbox ==="ALL"){
            setbum(Menus)
               return ;
           }
           const datafilter = Menus.filter(item=>item.trademark ===checkbox||item.cord ===checkbox||item.machie ===checkbox||item.Facecolor ===checkbox)
           localStorage.setItem('HH',JSON.stringify(datafilter))
           setbum(datafilter)
         
           console.log(bum)
       }
        return (
       <div>
                <div className="container__watch">
                  <div className="container__watch1">
                  <div className="btn_filter">
                  <Button filter={filter} button={Buttons} />
                  </div>
                  <div className="watch-input">
                      <input type="text" placeholder="đ TỪ"/> -  <input type="text" placeholder="đ ĐẾN"/>
                  </div>
                  <div>
                      <button className="menu-button">Đánh giá 4* cho danh mục</button>
                      <p className="description">
                     <strong> Đồng hồ đeo tay chính hãng</strong> nam nữ đẹp hàng hiệu, cam kết chính hãng, top watch thời trang đẹp máy cơ, automatic, quartz chính hãng từ các thương hiệu cao cấp nổi tiếng thế giới Seiko, Tissot, Casio, Versace, Orient, Burberry, Fossil, Calvin Klein.... Ưu đãi bảo hành toàn cầu, mẫu mã hợp xu hướng, cá tính mạnh mẽ thời trang cho nữ, lịch lãm cho nam
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
                     
                     <MenuList menuss={bum}/>
                   
                     </div>
                     <div className="page">
                        <span>Hiển thị từ 1 đến 32 / 2085 sản phẩm</span><br/>
                        <span>1 2 3 ... 66 Trang tiếp </span>
                  </div>
                  </div>
               
            </div>
            <div className="foucuscontent"> 
                <p>
             
<strong>Thế giới Đồng hồ đeo tay chính hãng</strong> - Phụ kiện thời trang thể hiện phong cách và tính cách của nam và nữ. Đồng hồ đeo tay cao cấp được thiết kế với nhiều kiểu dáng, chất liệu và với những cấu tạo bộ máy bền bỉ với thời gian.
                </p>
                <h3>Top thương hiệu đồng hồ cao cấp nổi tiếng thế giới</h3>
                <p>
                Cùng Vua Hàng Hiệu review nhanh Top <strong>hãng đồng hồ đeo tay nổi tiếng</strong> được yêu thích và thịnh hành nhất thế giới.<br/>
<h5><strong>Seiko</strong></h5>
<p>
Seiko là thương hiệu đồng hồ bền bỉ lâu đời nổi tiếng thế giới của thương hiệu đồng hồ Nhật. Điểm mạnh kết hợp linh hoạt giữa công nghệ mới mang tính năng hiện đại và thiết kế cơ khí truyền thống mạnh mẽ. Ưu thế được nhập khẩu chính thức về Việt Nam, bạn chẳng lo ngại mua phải <Link to="">đồng hồ Seiko</Link> giả nhái trên Vua Hàng Hiệu. 
            <h5><strong>Citizen</strong></h5>
            <p>
            Thế mạnh sản xuất của hãng Citizen Nhật Bản từ đồng hồ máy cơ, đồng hồ pin, đồng hồ năng lượng mặt trời, phân khúc cao cấp đến bình dân đều được Citizen “phủ sóng”.Đặc biệt dòng <Link>Đồng hồ</Link>
            </p>
</p>
                </p>
            </div>
            <FoucusContent />
       </div>
        )
    }
export default Menu;
