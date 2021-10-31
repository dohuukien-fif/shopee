import React from 'react'

 const Button = ({filter,button}) => {
    return (
        <div >
      <span className="checkbox" onClick={()=>filter("ALL")}>tất cả (75)</span><br></br>
        <h6 className="container-trade">Thương hiệu</h6>
      
    <div className="trademark">
      <span onClick={()=>filter("Abercrombie & Fitch")}>Abercrombie & Fitch (75)</span><br></br>
      <span onClick={()=>filter("Acme De Lavie")}>Acme De Lavie (2)</span><br/>
      <span onClick={()=>filter("Adidas")}>Adidas(5) </span><br/>
      <span onClick={()=>filter("Alexander Mcqueen")}>Alexander Mcqueen(68)</span><br/>
      <span onClick={()=>filter("Babie Dày")}>Babie Dày(6)</span><br/>
      <span onClick={()=>filter("Bugi")}>Bugi(15)</span><br/>
      <span onClick={()=>filter("Calvin klein")}>Calvin klein(10)</span><br/>
      <span onClick={()=>filter("Casio")}>Casio(22)</span>
      </div>
      
      <h6 className="container-trade">Dây</h6>
    <div className="trademark">
      <span onClick={()=>filter("Slim Fit:ôm gọn cơ thể")}>Slim Fit:ôm gọn cơ thể (818)</span><br></br>
      <span onClick={()=>filter("Áo sơ mi")}>Áo sơ mi (22)</span><br/>
      <span onClick={()=>filter("Dáng dài")}>Dáng dài(33) </span><br/>
      <span onClick={()=>filter("Áo")}>Áo(62)</span><br/>
      <span onClick={()=>filter("Quần Bò")}>Quần Bò(35)</span><br/>
      <span onClick={()=>filter("Dây Silicon")}>Dây Silicon(89)</span><br/>
      <span onClick={()=>filter("Dây dù")}>Dây dù(36)</span><br/>
      <span onClick={()=>filter("Hợp kim")}>Hợp Kim(53)</span>
      </div>
      <h6 className="container-trade">Đường kính</h6>
    <div className="trademark">
      <span onClick={()=>filter("s")}>s(36) </span><br></br>
      <span onClick={()=>filter("M")}>M(40)</span><br/>
      <span onClick={()=>filter("L")}>L(200) </span><br/>
      <span onClick={()=>filter("XL")}>XL(120)</span><br/>
      <span onClick={()=>filter("XS")}>XS(36)</span><br/>
      <span onClick={()=>filter("29 mm")}>29 mm(55)</span><br/>
      <span onClick={()=>filter("30 mm")}>Dây dù(30)</span><br/>
 
      </div>
      <h6 className="container-trade">Kiểu mặt</h6>
    <div className="trademark">
      <span onClick={()=>filter("100% Polyeter")}> 100% Polyeter(105) </span><br></br>
      <span onClick={()=>filter("60% Conton,40% Polester")}>60% Conton,40% Polester(93)</span><br/>
      <span onClick={()=>filter("71% Conton,29% Viscose")}>71% Conton,29% Viscose(62) </span><br/>
      <span onClick={()=>filter("98% Conton,2% Elastane")}>98% Conton,2% Elastane(20)</span><br/>
      <span onClick={()=>filter("Babie Dày")}>Babie Dày(20)</span><br/>
   
 
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