import React from 'react'

 const Button = ({filter,button}) => {
    return (
        <div >
    
        <h6 className="container-trade">Thương hiệu</h6>
        <span className="checkbox" onClick={()=>filter("ALL")}>tất cả (75)</span><br></br>
    <div className="trademark">
      <span onClick={()=>filter("Phillip Lim")}>Phillip Lim (75)</span><br></br>
      <span onClick={()=>filter("Aldo")}>Aldo (2)</span><br/>
      <span onClick={()=>filter("Alexander Mcqueen")}>Alexander Mcqueen(5) </span><br/>
      <span onClick={()=>filter("Aokang")}>Aokang(68)</span><br/>
      <span onClick={()=>filter("Burberry")}>Burberry(6)</span><br/>
      <span onClick={()=>filter("Bugi")}>Bugi(15)</span><br/>
      <span onClick={()=>filter("Calvin klein")}>Calvin klein(10)</span><br/>
      <span onClick={()=>filter("Casio")}>Casio(22)</span>
      </div>
      
      <h6 className="container-trade">Dây</h6>
    <div className="trademark">
      <span onClick={()=>filter("100% Polyester")}>100% Polyester (818)</span><br></br>
      <span onClick={()=>filter("Canvar")}>Canvar (22)</span><br/>
      <span onClick={()=>filter("Canvar,da")}>Canvar,da(33) </span><br/>
      <span onClick={()=>filter("Connton")}>Connton(62)</span><br/>
      <span onClick={()=>filter("Da bê")}>Da bê(35)</span><br/>
      <span onClick={()=>filter("Dây Silicon")}>Dây Silicon(89)</span><br/>
      <span onClick={()=>filter("Dây dù")}>Dây dù(36)</span><br/>
      <span onClick={()=>filter("Hợp kim")}>Hợp Kim(53)</span>
      </div>
      <h6 className="container-trade">Đường kính</h6>
    <div className="trademark">
      <span onClick={()=>filter("Anh")}>Anh(36) </span><br></br>
      <span onClick={()=>filter("Canada")}>Canada(40)</span><br/>
      <span onClick={()=>filter("Đức")}>Đức(200) </span><br/>
      <span onClick={()=>filter("Hàn quốc")}>Hàn quốc(120)</span><br/>
      <span onClick={()=>filter("Mỹ")}>Mỹ(36)</span><br/>
      <span onClick={()=>filter("29 mm")}>29 mm(55)</span><br/>
      <span onClick={()=>filter("30 mm")}>Dây dù(30)</span><br/>
 
      </div>
      <h6 className="container-trade">Kiểu mặt</h6>
    <div className="trademark">
      <span onClick={()=>filter("Bạc")}> Bạc(105) </span><br></br>
      <span onClick={()=>filter("Be")}>Be(93)</span><br/>
      <span onClick={()=>filter("Da")}>Da(62) </span><br/>
      <span onClick={()=>filter("Đen")}>Đen(20)</span><br/>
      <span onClick={()=>filter("Đen")}>Đen(20)</span><br/>
   
 
      </div>
      <h6 className="container-trade">Màu mặt</h6>
    <div className="trademark">
      <span onClick={()=>filter("24 mm")}>Nâu đen </span><br></br>
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