import React from 'react'

 const Button = ({filter,button}) => {
    return (
        <div >
      <span className="checkbox" onClick={()=>filter("ALL")}>tất cả (75)</span><br></br>
        <h6 className="container-trade">Thương hiệu</h6>
      
    <div className="trademark">
      <span onClick={()=>filter("Bobbi Brown")}>Bobbi Brown (75)</span><br></br>
      <span onClick={()=>filter("Channel")}>Channel (2)</span><br/>
      <span onClick={()=>filter("Charlotte Tilbury")}>Charlotte Tilbury(5) </span><br/>
      <span onClick={()=>filter("Christian Louboutin")}>Christian Louboutin(68)</span><br/>
      <span onClick={()=>filter("Cles De Peau")}>Cles De Peau(6)</span><br/>
      <span onClick={()=>filter("Bugi")}>Bugi(15)</span><br/>
      <span onClick={()=>filter("Calvin klein")}>Calvin klein(10)</span><br/>
      <span onClick={()=>filter("Casio")}>Casio(22)</span>
      </div>
      
      <h6 className="container-trade">Dây</h6>
    <div className="trademark">
      <span onClick={()=>filter("Anh")}>Anh (818)</span><br></br>
      <span onClick={()=>filter("Hàn Quốc")}>Hàn Quốc (22)</span><br/>
      <span onClick={()=>filter("Mỹ")}>Mỹ(33) </span><br/>
      <span onClick={()=>filter("Nhật bản")}>Nhật bản(62)</span><br/>
      <span onClick={()=>filter("Pháp")}>Quần Bò(35)</span><br/>
      <span onClick={()=>filter("Dây Silicon")}>Dây Silicon(89)</span><br/>
      <span onClick={()=>filter("Dây dù")}>Dây dù(36)</span><br/>
      <span onClick={()=>filter("Hợp kim")}>Hợp Kim(53)</span>
      </div>
      <h6 className="container-trade">Đường kính</h6>
    <div className="trademark">
      <span onClick={()=>filter("Đỏ")}>Đỏ(36) </span><br></br>
      <span onClick={()=>filter("Đỏ đậm")}>Đỏ đậm(40)</span><br/>
      <span onClick={()=>filter("Đỏ rượu vang")}>Đỏ rượu vang(200) </span><br/>
      <span onClick={()=>filter("Hồng đất")}>Hồng đất(120)</span><br/>
      <span onClick={()=>filter("Hồng")}>Hồng(36)</span><br/>
      <span onClick={()=>filter("29 mm")}>29 mm(55)</span><br/>
      <span onClick={()=>filter("30 mm")}>Dây dù(30)</span><br/>
 
      </div>
      <h6 className="container-trade">Kiểu mặt</h6>
    <div className="trademark">
      <span onClick={()=>filter("Nữ ")}> Nữ (105) </span><br></br>
      <span onClick={()=>filter("Unisex")}>60% Conton,40% Polester(93)</span><br/>
   
   
 
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