import React from 'react'
import {useState} from "react"
import {Link} from "react-router-dom"
import { Table,Progress } from 'reactstrap';
import { FaStar,FaPlus } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import Formxer from "./Formxet"
import Foucus from "./../../banner/foucusContent"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
const TabMota = ({name,price,price1,image,images,trade,cord,machie,Facecolo,settab,tab}) => {
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
                   <strong>  {name}</strong>  là một trong những sản phẩm nổi tiếng của Adidas với thiết kế được tính toán tốt nhất dành cho người dùng: mềm mại, thoải mái, kiểu dáng thể thao trẻ trung, chất liệu bền đẹp. Với đôi giày thời trang này chắc chắn bạn sẽ trở nên nổi bật và cuốn hút hơn. <strong>Son Dior 001 Pink </strong>sở hữu thiết kế thanh lịch, ngọt ngào hoàn hảo kết hợp với chất son sáp mềm mượt, trong trẻo cùng với màu son hồng nhẹ khiến bất cứ cô nàng nào cũng khao khát có được.
                     </p>
                     <h3><strong>Về thương hiệu {trade} nổi tiếng</strong></h3>
                     <p>
                   {trade} là một nhà sản xuất dụng cụ thể thao của Đức, một thành viên của Adidas Group, bao gồm cả công ty dụng cụ thể thao Reebok, công ty golf Taylormade, công ty sản xuất bóng golf Maxfli và Adidas golf. Adidas là nhà sản xuất dụng cụ thể thao lớn thứ hai trên thế giới.
                     </p>
                     
                      <img className="image_tab" src={images}/>
                     <p>Hiện nay, Adidas hướng đến 3 nhóm khách hàng chính với 3 dòng sản phẩm: Sport Performance hướng đến các vận động viên ở mọi cấp độ, Sport Heritage hướng đến thời trang thể thao theo cảm hứng trang phục dạo phố và Sport Style tập trung vào những khách hàng trẻ thích trang phục thể thao sành điệu và sang trọng.</p>
                     <h3><strong>Đặc điểm nổi bật của {trade}Prophere "Oreo Pack"</strong></h3>
                     <p>- Phần trên của giày Adidas Prophere "Oreo Pack" được làm từ chất liệu cao cấp bền đẹp trong suốt quá trình sử dụng.</p>
                     <p>- Đế ngoài bằng cao su mềm dẻo, lớp lót mềm mại mang lại cảm giác thoải mái cho đôi chân.</p>
                     <p>- Form giày đi lên chân vừa vặn, các đường chỉ khâu rất tinh tế và chắc chắn hài lòng mọi khách hàng.</p>
                     <p>- Giày thể thao Adidas luôn là sản phẩm luôn được khách hàng yêu thích bởi sự năng động, trẻ trung, tiện dụng, dễ dàng phối kết hợp với nhiều bộ trang phục và phù hợp đi trong nhiều hoàn cảnh khác nhau.</p>
                     <img className="image_tab" src={image[0]}/>
                     
                        <p>
                       <strong> Thương hiệu</strong> {trade}<br/>
                   <strong>  Size:</strong> {cord}<br/>
                    <strong>Xuất xứ</strong> {machie}<br/>
                    <p><strong>  màu sắc:</strong> {Facecolo}</p>
                        </p>
                       
                        <h3><strong>Hướng dẫn bảo quản giày</strong></h3>
                         <p>– Nếu bạn thường thuyên đi giày nên vệ sinh 1-2 lần/1 tuần.</p>
                         <p>– Không nên giặt bằng máy giặt vì sẽ làm cho đôi giày trở nên biến dạng mất form giày.</p>
                         <p>- Tránh ngâm trong nước quá lâu.</p>
                         <p>- Không sử dụng chất tẩy rửa.</p>
                         <p>- Tránh tiếp xúc với các chất gây loang màu.</p>
                         <p>- Nên để giày trong kệ riêng giúp bảo quản giày tốt và bền hơn.</p>
                         
                         
                         
                         
                        
                         <Table className="table" bordered>

<tbody>
 <tr>
   
   <td>Thương hiệu</td>
   <td>{trade}</td>
  
 </tr>
 <tr>
   
   <td>Size</td>
   <td>{cord}</td>

 </tr>
 <tr>
   
   <td>Xuất xứ</td>
   <td>{machie}</td>

 </tr>
 <tr>
   
   <td>Màu sắc</td>
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
