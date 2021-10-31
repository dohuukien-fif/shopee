import React from 'react'
import {useState} from "react"
import {Link} from "react-router-dom"
import { Table,Progress } from 'reactstrap';
import { FaStar,FaPlus } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import Formxer from "./Formxet"
import Foucus from "./../../banner/foucusContent"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
const TabMota = ({name,price,price1,images,image,trade,cord,machie,Facecolo,settab,tab}) => {
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
                   <strong>  {name}</strong>là chiếc túi xách nữ cao cấp được thiết kế kiểu dáng trẻ trung, hiện đại. Đây là một mẫu túi dành cho những cô nàng yêu thích sự trẻ trung nhưng không kém phần cuốn hút và nổi bật.
                     </p>
                     <h3><strong>Về thương hiệu {trade}</strong></h3>
                     <p>
                    {trade}là thương hiệu giày dép và phụ kiện thời trang Singapore dành cho phái đẹp, với dây chuyền sản xuất nhanh, giá cả phải chăng và các thiết kế mới được tung ra đều đặn hàng tuần.
                     </p>
                      <img className="image_tab" src={images}/>
                      
                        <p>
                        Ra đời tại một trong những quốc gia phát triển và tiên tiến ở khu vực Châu Á, {trade} chịu ảnh hưởng của các phong cách Tây Âu, tối giản và đề cao tính cá biệt. Đồng thời là sự hoà hợp và rung cảm với thị hiếu cổ điển của văn hoá Phương Đông thế kỷ XX.
                        </p>
                      <p>
                      Thời trang{trade} là những nhịp điệu trẻ trung, phóng khoáng của phong cách trẻ mang màu sắc đường phố và thành thị. Những sáng tạo trong những chiếc túi xách {trade} mang dấu ấn của phong cách chiết trung, là sự "dân chủ hoá" và "đại chúng" trong thời trang.
                      </p>
                        <img className="image_tab" src={image[1]}/>
                        <h3> <strong>Thiết kế túi xách  {name} </strong></h3>
                        <p><strong>{name}</strong> được làm từ chất liệu da nhân tạo cao cấp, bền đẹp trong suốt quá trình sử dụng. Form túi vừa vặn, đường may tỉ mỉ từng chi tiết hài lòng mọi khách hàng.</p>
                      
                         <img className="image_tab" src={image[2]}/>
                        
                        <p>
                        Phần quai đeo mắt xích móc nối tông màu vàng với phần dây tông màu trơn cách điệu rất chắc chắn. Màu sắc túi đơn giản dễ dàng kết hợp với nhiều trang phục khác nhau theo sở thích của bản thân.
                        </p>
                    
                         <p>Với chiếc túi xách thời trang này bạn sẽ trở nên nổi bật và tự tin hơn khi xuống phố, đi chơi, gặp gỡ mọi người xung quanh.</p>
                         <img className="image_tab" src={image[1]}/><br/>
                         <h3><strong>Hướng dẫn bảo quản túi xách {trade}</strong></h3>
                         <p>- Để chiếc túi xách luôn mới và đẹp thì bạn cần phải lau chùi túi thường xuyên khoảng 1 lần/ 1 tuần.</p>
                       <p>- Nên để túi lên kệ và tránh treo túi bằng quai vì trọng lượng có thể làm hư quai và dáng túi</p>
                       <p>- Sử dụng khăn mềm để vệ sinh túi.</p>
                       <p>- Không cho túi xách vào máy giặt dễ làm mất form và biến dạng.</p>
                       <p>- Tránh để túi tiếp xúc trực tiếp ánh mặt trời quá lâu.</p>
                        
                         <Table className="table" bordered>

<tbody>
 <tr>
   
   <td>Thương hiệu</td>
   <td>{trade}</td>
  
 </tr>
 <tr>
   
   <td>Chất liệu</td>
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
