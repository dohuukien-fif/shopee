import React from 'react'
import { AiFillFacebook,AiFillInstagram,AiOutlineTwitter } from "react-icons/ai";

import  Foucus2Content  from './foucus2Content';
const FoucusContent = () => {
    const hanSubmit =(e)=>{
        e.preventdefault();
        
    }
    return (
        <div>
  <div className="container_foucus-home">
  <div className="foucus-1">
  <h6 className="foucus2_1">Vua Hàng Hiệu™ - Mua hàng hiệu chính hãng trực tuyến, Giá Tốt Nhất</h6>
  </div>
  <div className="foucus2">
       <span className="foucus2_1">Đăng ký để nhận ưu đãi qua email:</span>
      <div>
     <form onSubmit={hanSubmit} >
     <input type="email" className="foucus2-2" placeholder="Nhập email của bạn"/>
      <button type="submit" className="foucus2_2-2">Đăng Kí</button>
     </form>
      </div>
       <span className="icon-homes"><AiFillFacebook className="icon-homes" />  <span  className="icon-home"><AiFillInstagram className="icon-homes" /> </span>< span  className="icon-home"><AiOutlineTwitter className="icon-homes" /></span></span>
  </div>
  <div className="border">

  </div>
  <Foucus2Content />
  </div>
        </div>
    )
}
export default FoucusContent;
