import React from 'react'

 const Button = ({filter,button}) => {
    return (
        <div >
      <span className="checkbox" onClick={()=>filter("ALL")}>tất cả (75)</span><br></br>
        <h6 className="container-trade">Thương hiệu</h6>
      
    <div className="trademark">
      <span onClick={()=>filter("Victoria's Secret")}>Victoria's Secret (75)</span><br></br>
      <span onClick={()=>filter("Abercrombie & Fitch")}>Abercrombie & Fitch (2)</span><br/>
      <span onClick={()=>filter("Acqua Di Parma")}>Acqua Di Parma(5) </span><br/>
      <span onClick={()=>filter("Afnan Perfumess")}>Afnan Perfumess(68)</span><br/>
      <span onClick={()=>filter("Atelier Cologne")}>Atelier Cologne(6)</span><br/>
      <span onClick={()=>filter("Bugi")}>Bugi(15)</span><br/>
      <span onClick={()=>filter("Calvin klein")}>Calvin klein(10)</span><br/>
      <span onClick={()=>filter("Casio")}>Casio(22)</span>
      </div>
      
      <h6 className="container-trade">Dây</h6>
    <div className="trademark">
      <span onClick={()=>filter("4 - 5h")}>4 - 5h (818)</span><br></br>
      <span onClick={()=>filter("4 - 6h")}>4 - 6h (22)</span><br/>
      <span onClick={()=>filter("6 - 8h")}>6 - 8h(33) </span><br/>
      <span onClick={()=>filter("8 - 10h")}>8 - 10h(62)</span><br/>
      <span onClick={()=>filter("3 - 6h")}>3 - 6h(35)</span><br/>
      <span onClick={()=>filter("Dây Silicon")}>Dây Silicon(89)</span><br/>
      <span onClick={()=>filter("Dây dù")}>Dây dù(36)</span><br/>
      <span onClick={()=>filter("Hợp kim")}>Hợp Kim(53)</span>
      </div>
      <h6 className="container-trade">Đường kính</h6>
    <div className="trademark">
      <span onClick={()=>filter("Eau De Toilette")}>Eau De Toilette(36) </span><br></br>
      <span onClick={()=>filter("Cologner")}>Cologner(40)</span><br/>
      <span onClick={()=>filter("Eau de Parfum")}>Eau de Parfum(200) </span><br/>
      <span onClick={()=>filter("Extrait")}>Extrait(120)</span><br/>
      <span onClick={()=>filter("Parfum")}>Parfum(36)</span><br/>
      <span onClick={()=>filter("29 mm")}>29 mm(55)</span><br/>
      <span onClick={()=>filter("30 mm")}>Dây dù(30)</span><br/>
 
      </div>
      <h6 className="container-trade">Kiểu mặt</h6>
    <div className="trademark">
      <span onClick={()=>filter("Floral - tông mùi")}> Floral - tông mùi(105) </span><br></br>
      <span onClick={()=>filter("Orienta - tông mùi Phương Đông")}>Orienta - tông mùi Phương Đông(93)</span><br/>
      <span onClick={()=>filter("Woody - tông mùi gỗ")}>Woody - tông mùi gỗ(62) </span><br/>
      <span onClick={()=>filter("Citrus - hương trái cây")}>Citrus - hương trái cây(20)</span><br/>
      <span onClick={()=>filter("Chypre - hương hoa cỏ trái cây")}>Citrus - hương trái cây(20)</span><br/>
   
 
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