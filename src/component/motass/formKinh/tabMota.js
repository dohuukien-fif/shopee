import React from 'react'
import {useState} from "react"
import {Link} from "react-router-dom"
import { Table,Progress } from 'reactstrap';
import { FaStar,FaPlus } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import Formxer from "./Formxet"
import Foucus from "./../../banner/foucusContent"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
const TabMota = ({name,price,images,price1,image,trade,cord,machie,Facecolo,settab,tab}) => {
    const [status, setstatus] = useState(false)
  const [toager, settoager] = useState(1);
  const [text, settext] = useState('')
  const [bet, setbet] = useState(false)
  const [todos, setTodos] = React.useState([]);
  const [talks,setTalks]= useState([
        
    {
      id:1,
      text:'kiên đẹp trai ',
      day:'8/3/2000',
      status:true
  },
  {
      id:2,
      text:'kiên đẹp trai quá đi ',
      day:'8/3/2000',
      status:true
  },
  {
      id:3,
      text:'kiên đẹp trai soái quá ',
      day:'8/3/2000',
      status:true
  },
  
])
const Addtaks = (talkss)=>{
const id = Math.floor(Math.random()*10000)+1
const NewTalks = {id,...talkss}
setTalks ([...talks,NewTalks])
}



    const toggleTab = (index) => {
        settoager(index);

      };
      
      const handleChange = e => {
        settext(e.target.value);
      };
     
    
    
      const addTodo = () => {
        setTodos([
          ...todos,
          {
            id: todos.length + 1,
            text: text,
           
            completed: false
          }
        ]);
      };
    
      const onSubmit = e => {
        e.preventDefault();
      
        addTodo();
       settext("")
      };
    return (
   
      <div className="foucus_end1">
                   <div className="container-tab">
                     <div className={toager === 1 ? "tab activetab" : "tab"}onClick={() => toggleTab(1)}>CHI TIẾT</div>
                     <div className={toager === 2 ? "tab activetab" : "tab"} onClick={() => toggleTab(2)}> ĐÁNH GIÁ</div>
                     <div className={toager === 3 ? "tab activetab" : "tab"} onClick={() => toggleTab(3)}>HỎI ĐÁP</div>
                     </div>
                 <div className="container-content">
                 <div className={toager === 1 ? "content active-content" : "content"}>
                     <p>
                   <strong>  {name}</strong> là chiếc kính Unisex thời trang cao cấp, sở hữu một khung acetate hoàn toàn màu đen với hai đinh tán kim loại bằng vàng ở phía trước khung và mảnh logo chữ V quen thuộc của hãng Gentle Monster ở bên thái dương.
                     </p>
                     <h3><strong>Về thương hiệu {trade} nổi tiếng</strong></h3>
                     <p>
                   {trade} là thương hiệu mắt kính thời trang cao cấp của Hàn Quốc được biết đến với tên gọi kính chữ V hay kính {trade}. Với chiến dịch quảng bá thông minh qua phim truyền hình với những ngôi sao điện ảnh nổi tiếng, hãng kính Hàn Quốc nhanh chóng phủ sóng khắp nơi. Đồng thời, Gentle Monster cũng chú trọng đến chất lượng và trải nghiệm của khách hàng trong từng sản phẩm của mình.
                     </p>
                      <img className="image_tab" src={images}/>
                     <p>{trade} là thương hiệu non trẻ đến từ phương Đông nhưng đã tấn công vào những thị trường lớn trên thế giới. Tốc độ càn quét của thương hiệu Hàn Quốc này khiến các tín đồ kính mắt hiện đại cảm thấy vô cùng choáng ngợp. Thương hiệu Gentle Monster cũng được biết đến nhiều qua sự xuất hiện trên màn ảnh cùng với những ngôi sao nổi tiếng của xứ sở kim chi.</p>
                        <h3><strong>Đặc điểm nổi bật của kính mắt cận {name}</strong></h3>
                      <p>
                    <strong>{name}</strong>sở hữu thiết kế hiện đại, phong cách trẻ trung năng động, dễ kết hợp với nhiều trang phục khác nhau. Chiếc kính Gentle Monster South Side sở hữu kích thước mặt trước khung 146 mm, mặt khung cạnh 152 mm, chiều rộng len 48 mm, chiều cao len 41 mm.
                      </p>
                        <img className="image_tab" src={image[1]}/>
                      
                        <p>Kính mắt Form thời trang, hợp xu hướng. Gọng kính chắc chắn làm bằng chất liệu cao cấp.</p>
                      <p>
                      Đẳng cấp và khác biệt, sang trọng và tao nhã - đây là những tính từ miêu tả chính xác về kính mắt thời trang cao cấp của thương hiệu Gentle Monster, chiếc kính mắt cận GM này góp phần tô điểm cho bộ trang phục của bạn, khiến phong cách của bạn trở lên sành điệu, thời thượng và vô cùng bắt mắt.
                      </p>
                      <h3><strong>Hình ảnh mắt kính cận Gentle Monster South Side đen</strong></h3>
                         <img className="image_tab" src={image[2]}/>
                        
                        
                         <Table className="table" bordered>

<tbody>
 <tr>
   
   <td>Thương hiệu</td>
   <td>{trade}</td>
  
 </tr>
 <tr>
   
   <td>Xuất xứ</td>
   <td>{machie}</td>

 </tr>
 <tr>
   
   <td>Độ rộng tròng</td>
   <td>{cord}</td>

 </tr>
 <tr>
   
   <td>màu sắc</td>
   <td>{Facecolo}</td>

 </tr>

</tbody>
</Table>

<h4><strong>Đánh giá sản phẩm</strong></h4>
<div className="foucus-tab">
<div  className="foucus-tab1">
  <span><strong>5/5</strong></span>
   <FaStar className="icon_m" /> <FaStar className="icon_m" /> <FaStar className="icon_m" /> <FaStar className="icon_m" /> <FaStar className="icon_m" />

</div>
<div  className="foucus-tab2">
<FaStar className="icon_m" /> <FaStar className="icon_m" /> <FaStar className="icon_m" /> <FaStar className="icon_m" /> <FaStar className="icon_m" /><br></br>
<FaStar className="icon_m" /> <FaStar className="icon_m" /> <FaStar className="icon_m" /> <FaStar className="icon_m" /> <AiOutlineStar /><br></br>
<FaStar className="icon_m" /> <FaStar className="icon_m" /> <FaStar className="icon_m" /> <AiOutlineStar /> <AiOutlineStar /><br></br>
<FaStar className="icon_m" /> <FaStar className="icon_m" /> <AiOutlineStar/> <AiOutlineStar /> <AiOutlineStar /><br/>
<FaStar className="icon_m" />  <AiOutlineStar /> <AiOutlineStar/> <AiOutlineStar/> <AiOutlineStar />

</div>
<div  className="foucus-tab3">
  <span><strong>Chia sẻ nhận xét về sản phẩm</strong></span><br/>
  <button className="btn-tab" onClick={()=>setstatus(!status)}>VIẾT NHẬN XÉT</button>

</div>

</div>
<div className="form-tab">
 <Formxer status={status} />

</div>
                 </div>
                 <div className={toager === 2 ? "content active-content" : "content"}>
                

                 </div>
                 <div className={toager === 3 ? "content active-content" : "content"}>

                 <form onSubmit={onSubmit} className="exampleTexts">

<br />
                       <FormGroup>
                          <Label for="exampleTexts"></Label>
                          <Input type="textarea" name="text" id="exampleTexts"     onChange={handleChange}
                          value={text} placeholder="Nhập câu hỏi của bạn" />
                             <button type="submit" className="add-btns">
                               Gửi câu hỏi
                                 </button>
                             </FormGroup>
                             
</form>
                 </div>
                   
                
                   </div>
                  
                  
               
 </div>
    )
}
export default TabMota;
