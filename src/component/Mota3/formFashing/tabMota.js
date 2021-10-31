import React from 'react'
import {useState} from "react"
import {Link} from "react-router-dom"
import { Table,Progress } from 'reactstrap';
import { FaStar,FaPlus } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import Formxer from "./Formxet"
import Foucus from "./../../banner/foucusContent"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
const TabMota = ({name,price,price1,image,trade,cord,machie,Facecolo,settab,tab}) => {
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
                   <strong>  {name}</strong>được thiết kế bắt mắt với gam màu trắng thanh lịch. Chiếc áo {trade} Polo Shirt được làm từ chất liệu cao cấp mang lại cảm giác thoải mái cho người mặc.
                     </p>
                  
                      <img className="image_tab" src={image[0]}/>
                      <h3><sttrong>Về Thương Hiệu {name}</sttrong></h3>
                        <p>
                        Thương hiệu Dolce & Gabbana được 2 nhà thiết kế thời trang người Ý là Domenico Dolce và Stefano Gabbana thành lập vào năm 1985. Với sự phát triển nhanh như vũ bão, Dolce & Gabbana hầu như kinh doanh tất cả các mặt hàng thời trang, bao gồm cả đồ da và giày dép, với quy mô mở rộng ở Ý, Nhật Bản, Tây Ban Nha, Pháp…
                        </p>

                        <img className="image_tab" src={image[1]}/>
                      
                        <p>Dolce & Gabbana với các dòng sản phẩm cao cấp, tập trung vào các thiết kế đắt tiền và sang trọng, cọi trọng giá trị lâu dài hơn là thay đổi theo mùa. Dòng sản phẩm này thường được tạo ra bởi các nhà thiết kế nổi tiếng.</p>
                        <h3> <strong>Mô tả Áo  {name}</strong></h3>
                        <strong>{trade}</strong> Tham khảo chi tiết trên hướng dẫn sử dụng đi kèm.
                         <img className="image_tab" src={image[2]}/>
                        
                        <p>
                        Áo cổ bẻ, tay ngắn với logo ở ngực tạo điểm nhấn độc đáo. Màu sắc áo đơn giản bạn có thể kết hợp với nhiều phong cách khác nhau... Khéo léo kết hợp những bộ trang phục với nhau chắc chắn bạn sẽ có những sét đồ thời trang ưng ý khi xuống phố.
                        </p>
                        <h3><strong>Hướng dẫn bảo quản áo</strong></h3>
                         <p>- Không nên giặt chung với áo màu bị phai, vì rất dễ dính màu từ áo khác.</p>
                         <p>- Khi giặt bạn nên vò và vắt nhẹ nhàng tránh làm hư form áo.</p>
                         <p>- Nên phơi áo dưới ánh nắng nhẹ, hoặc nơi râm mát, thoáng gió, không nên phơi dưới ánh nắng quá gắt.</p>
                        <p>- Khi ủi là áo nên lộn mặt trái của sản phẩm.</p>
                        
                         <Table className="table" bordered>

<tbody>
 <tr>
   
   <td>Thương hiệu</td>
   <td>{trade}</td>
  
 </tr>
 <tr>
   
   <td>Kiểu dáng</td>
   <td>{cord}</td>

 </tr>
 <tr>
   
   <td>Size</td>
   <td>{machie}</td>

 </tr>
 <tr>
   
   <td>Chất liệu</td>
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
