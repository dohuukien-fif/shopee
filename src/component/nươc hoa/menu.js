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
import FoucusContent from "../banner/foucusContent"
//const allcontat = ["ALL",...new Set(Datas.map(item=>item.trademark))]
function Menu(){
    const [Menus, setMenu] = useState(Datas);
    const [Buttons, setButton] = useState([]);
console.log(Menus)
       const filter =(checkbox)=>{
           if(checkbox ==="ALL"){
          setButton(Menus)
               return ;
           }
  
           const datafilter = Menus.filter(item=>item.trademark ===checkbox||item.cord ===checkbox||item.machie ===checkbox||item.Facecolor ===checkbox)
           setButton(datafilter)
           
       }
  
        return (
       <div>
                <div className="container__watch">
                  <div className="container__watch1">
                  <Button filter={filter}  />
                  <div className="watch-input">
                      <input type="text" placeholder="đ TỪ"/> -  <input type="text" placeholder="đ ĐẾN"/>
                  </div>
                  <div>
                      <button className="menu-button">Đánh giá 4* cho danh mục</button>
                      <p className="description">
                     <strong> NƯỚC HOA hàng hiệu chính hãng nhập khẩu 100%</strong>  thành phần chính là tinh dầu chiết xuất từ tự nhiên. Xuất hiện dưới dạng lỏng hoặc rắn. Sử dụng với mục đích tạo ra mùi thơm cho cơ thể, cảm giác dễ chịu, sự quyến rũ giới tính hay đơn giản chỉ là che giấu một mùi khó chịu nào đó. Mùi hương nước hoa thể hiện nét cả tính của mỗi người.
                      </p>
                  </div>
                  </div>
                  <div className="cc">
                      <div className="bum">
                           <div>
                               <span >Nước hoa</span>
                           </div>
                           <div >
                               <Filter />
                           </div>
                      </div>
                      <div className="sice__watch">
                          <Sice  />
                      </div>
                  <div className="container__watch2">
                     
                     <MenuList menuss={Buttons}/>
                   
                     </div>
                     <div className="page">
                        <span>Hiển thị từ 1 đến 32 / 2085 sản phẩm</span><br/>
                        <span>1 2 3 ... 66 Trang tiếp </span>
                  </div>
                  </div>
               
            </div>
            <div className="foucuscontent"> 
                <p>
             
<strong>Nước hoa chính hãng</strong> là những chai nước hoa Auth nhập khẩu từ các thương hiệu dầu thơm nổi tiếng trên thế giới. Nước hoa không chỉ là mùi hương mà còn thể hiện phong cách cá tính của người dùng nó, đặc biệt hơn Nước hoa còn giúp bạn gây ấn tượng, thiện cảm với những người xunh quanh
                </p>
                <p>
                Sự tinh tế của mùi hương và ý tưởng hình thành của nhà sản xuất, Nước hoa nhập khẩu trên sàn thương mại Vua Hàng Hiệu hiện nay có 300+ chai nước hoa nữ, 150+ chai nước hoa nam và 43 chai nước hoa Unisex cho cả nam và nữ với da dạng phong cách và hương thơm.
                </p>
                <h3>Nước hoa là gì?</h3>
                <p>
                Nước Hoa (tiếng Anh: Perfume, tiếng Pháp: Parfum) được bắt nguồn từ cụm từ Latin "Per fumum" có nghĩa là "truyền tải thông qua sương/khói". Có lịch sử phát triển hàng ngàn năm, gắn liền với lịch sử văn minh của loài người. Bắt đầu từ vùng Lưỡng Hà, trải qua Hy Lạp, La Mã, lan rộng cả ở châu Á (Ấn Độ, Trung Quốc) rồi ra khắp thế giới.
<p>
Seiko là thương hiệu đồng hồ bền bỉ lâu đời nổi tiếng thế giới của thương hiệu đồng hồ Nhật. Điểm mạnh kết hợp linh hoạt giữa công nghệ mới mang tính năng hiện đại và thiết kế cơ khí truyền thống mạnh mẽ. Ưu thế được nhập khẩu chính thức về Việt Nam, bạn chẳng lo ngại mua phải <Link to="">đồng hồ Seiko</Link> giả nhái trên Vua Hàng Hiệu. 
         
            <p>
            Nước Hoa (tiếng Anh: Perfume, tiếng Pháp: Parfum) được bắt nguồn từ cụm từ Latin "Per fumum" có nghĩa là "truyền tải thông qua sương/khói". Có lịch sử phát triển hàng ngàn năm, gắn liền với lịch sử văn minh của loài người. Bắt đầu từ vùng Lưỡng Hà, trải qua Hy Lạp, La Mã, lan rộng cả ở châu Á (Ấn Độ, Trung Quốc) rồi ra khắp thế giới.

Là hỗn hợp các chất tạo mùi như tinh dầu, chất thơm, chất hãm hương (lưu hương), và dung môi hòa tan. Dùng để tạo ra cho cơ thể người, con vật, đồ vật hay không gian một mùi hương dễ chịu. Các thành phần của nước hoa có thể được tổng hợp nhân tạo hoặc chiết xuất từ thực vật và động vật. Ngành bào chế nước hoa ngày nay bắt đầu từ cuối thế kỷ XIX, với việc sản xuất đại trà (mang tính thương mại) các chất thơm như vani, coumarin
            </p>
</p>
                </p>
            </div>
            <FoucusContent />
       </div>
        )
    }
export default Menu;
