import React from 'react'

 const Button = ({filter,button}) => {
    return (
        <div >
      <span className="checkbox" onClick={()=>filter("ALL")}>tất cả (75)</span><br></br>
        <h6 className="container-trade">Thương hiệu</h6>
      
    <div className="trademark">
      <span onClick={()=>filter("Balenciaga")}>Balenciaga (75)</span><br></br>
      <span onClick={()=>filter("Burberry")}>Burberry (2)</span><br/>
      <span onClick={()=>filter("Cartier")}>Cartier(5) </span><br/>
      <span onClick={()=>filter("Chanel")}>Chanel(68)</span><br/>
      <span onClick={()=>filter("Chlóe")}>Chlóe(6)</span><br/>
      <span onClick={()=>filter("Bugi")}>Bugi(15)</span><br/>
      <span onClick={()=>filter("Calvin klein")}>Calvin klein(10)</span><br/>
      <span onClick={()=>filter("Casio")}>Casio(22)</span>
      </div>
      
      <h6 className="container-trade">Dây</h6>
    <div className="trademark">
      <span onClick={()=>filter("52 mm")}>52 mm (818)</span><br></br>
      <span onClick={()=>filter("53 mm")}>53 mm (22)</span><br/>
      <span onClick={()=>filter("54 mm")}>54 mm(33) </span><br/>
      <span onClick={()=>filter("55 mm")}>55 mm(62)</span><br/>
      <span onClick={()=>filter("63 mm")}>63 mm(35)</span><br/>
      <span onClick={()=>filter("Dây Silicon")}>Dây Silicon(89)</span><br/>
      <span onClick={()=>filter("Dây dù")}>Dây dù(36)</span><br/>
      <span onClick={()=>filter("Hợp kim")}>Hợp Kim(53)</span>
      </div>
      <h6 className="container-trade">Đường kính</h6>
    <div className="trademark">
      <span onClick={()=>filter("Anh")}>Anh(36) </span><br></br>
      <span onClick={()=>filter("canada")}>canada(40)</span><br/>
      <span onClick={()=>filter("Hàn Quốc")}>Hàn Quốc(200) </span><br/>
      <span onClick={()=>filter("Mỹ")}>Mỹ(120)</span><br/>
      <span onClick={()=>filter("Parfum")}>Parfum(36)</span><br/>
      <span onClick={()=>filter("29 mm")}>29 mm(55)</span><br/>
      <span onClick={()=>filter("30 mm")}>Dây dù(30)</span><br/>
 
      </div>
      <h6 className="container-trade">Kiểu mặt</h6>
    <div className="trademark">
      <span onClick={()=>filter("Đen")}> Đen(105) </span><br></br>
      <span onClick={()=>filter("Đen,nâu")}>Đen,nâu(93)</span><br/>
      <span onClick={()=>filter("Đen,vàng")}>Đen,vàng(62) </span><br/>
      <span onClick={()=>filter("Đen,xám")}>Đen,xám(20)</span><br/>
      <span onClick={()=>filter("Đỏ đô")}>Đỏ đô(20)</span><br/>
   
 
      </div>
      <h6 className="container-trade">Màu mặt</h6>
    <div className="trademark">
      <span onClick={()=>filter("24 mm")}>Nâu Đen </span><br></br>
      <span onClick={()=>filter("25 mm")}>Xanh lam</span><br/>
      <span onClick={()=>filter("26 mm")}>Xanh lá cây </span><br/>
      <span onClick={()=>filter("27 mm")}>Xanh lục</span><br/>
      <span onClick={()=>filter("28 mm")}>Đen xanh</span><br/>
  
 
      </div>
      <h6 className="container-trade">Chịu nước</h6>
    <div className="trademark">
      <span onClick={()=>filter("24 mm")}>30 cm </span><br></br>
      <span onClick={()=>filter("25 mm")}>50 cm</span><br/>
      <span onClick={()=>filter("26 mm")}>100 m </span><br/>
      <span onClick={()=>filter("27 mm")}>200 m</span><br/>
      <span onClick={()=>filter("28 mm")}>Không chống nước</span><br/>
     
 
      </div>
      <h6 className="container-trade">Xuất xứ</h6>
    <div className="trademark">
      <span onClick={()=>filter("24 mm")}>Anh </span><br></br>
      <span onClick={()=>filter("25 mm")}>Dan mạch</span><br/>
      <span onClick={()=>filter("26 mm")}>Hàn quốc </span><br/>
      <span onClick={()=>filter("27 mm")}>Mỹ</span><br/>
      <span onClick={()=>filter("28 mm")}>Nhật bản</span><br/>
      
 
      </div>
      <h6 className="container-trade">Màu sắc</h6>
    <div className="trademark">
      <span onClick={()=>filter("24 mm")}>Bạc </span><br></br>
      <span onClick={()=>filter("25 mm")}>Bạc - nâu</span><br/>
      <span onClick={()=>filter("26 mm")}>Be </span><br/>
      <span onClick={()=>filter("27 mm")}>Da</span><br/>
      <span onClick={()=>filter("28 mm")}>Demi</span><br/>
      
 
      </div>
      <h6 className="container-trade">Giới tính </h6>
    <div className="trademark">
      <span onClick={()=>filter("24 mm")}>Nam  </span><br></br>
      <span onClick={()=>filter("25 mm")}>Nữ</span><br/>
      <span onClick={()=>filter("26 mm")}>Unisex </span><br/>
      <span onClick={()=>filter("27 mm")}>Nam và nữ</span><br/>
     
 
      </div>
  
          
        </div>
    )
}
export default Button;