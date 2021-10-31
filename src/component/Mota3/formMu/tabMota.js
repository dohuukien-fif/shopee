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
                       
                   <strong>  {name}</strong> là là chiếc mũ thời trang cao cấp tới từ thương hiệu MLB Hàn Quốc. Với thiết kế hiện đại, thời trang Mũ MLB New York Yankees đang là item "Hot" được giới trẻ yêu thích.
                     </p>
                     <h3><strong>Về thương hiệu {trade} {cord}</strong></h3>
                     <p>
                     {trade}là tên viết tắt của Major League Baseball – tổ chức thể thao chuyên nghiệp của môn bóng chày. Các sản phẩm của MLB lấy cảm hứng từ sự pha trộn giữa thể thao, thời trang đường phố và văn hóa. Thương hiệu chuyên thiết kế và sản xuất trang phục, giày & phụ kiện cho nam, nữ lấy cảm hứng từ logo của những đội bóng chày danh tiếng đem đến những bộ sưu tập là sự kết hợp giữa tiện ích và thời trang.
                     </p>
                      <img className="image_tab" src={images}/>
                      
                        <p>
                        Trong lĩnh vực thời trang, nhờ việc sản xuất những trang phục và phụ kiện cho những đội tuyển bóng chày thuộc tổ chức này, MLB đã có được những thành công lớn khi thuyết phục được những tín đồ đam mê bóng chày trên toàn nước Mỹ, Canada và Hàn Quốc. Không những vậy, những dòng sản phẩm này cũng có tầm ảnh hưởng và có một vị trí trong làng thời trang thế giới.
                        </p>
                      <p>
                      <h3><sttrong>Đặc Điểm của {name}</sttrong></h3>
                 <strong> {name}</strong> là chiếc mũ cao cấp được làm bằng chất liệu 100% Polyester thoáng khí. Form mũ với các đường chỉ khâu tinh tế, tỉ mỉ hài lòng mọi khách hàng.
                      </p>
                      <p>Biểu tượng Logo tông màu vàng nổi bật đầy tinh tế tạo điểm nhấn cho chiếc mũ thêm phong cách và thời trang.

</p>
                        <img className="image_tab" src={image[1]}/><br/>
                 
                        <strong> {name} </strong>   <p> mang nét thể thao dành cho những người đàn ông năng động, khỏe khoắn. Màu sắc mũ trung tính dễ dàng kết hợp với nhiều trang phục khác nhau cho bạn sét đồ cá tính. Chiếc mũ phù hợp đội trong nhiều hoàn cảnh khác nhau khi đi chơi, dạo phố, du lịch....</p>
                      
                         <img className="image_tab" src={image[0]}/>
                        
                        <p>
                        Mũ {trade} này là 1 trong những dòng mũ bán chạy hiện nay, dễ phối hợp với các phong cách thời trang khác nhau và vô cùng tiện lợi khi mang theo bên mình.
                        </p>
                        <h3><strong>Hướng dẫn bảo quản mũ {trade}</strong></h3>
                         <p>- Khi không sử dụng mũ nên treo lên gọn gàng nơi có vị trí khô ráo và thoáng mát.</p>
                      <p>- Khi giặt mũ nên giặt bằng tay, không nên dùng máy giặt vì sẽ làm mất form và hư dáng mũ.</p>
                         <p>- Tránh giặt cùng những chất gây loang màu.</p>
                             <p>- Không nên bỏ mũ trong túi xách quá lâu sẽ khiến chúng mất đi hình dáng ban đầu.</p>
                         <p>- Nên có túi đựng riêng để bảo quản mũ được mới và bền hơn.</p>
                         
                         
                    

                       
                         
                        
                         <Table className="table" bordered>

<tbody>
 <tr>
   
   <td>Thương hiệu</td>
   <td>{trade}</td>
  
 </tr>
 <tr>
   
   <td>Xuất xứ</td>
   <td>{cord}</td>

 </tr>
 <tr>
   
   <td>chất liệu</td>
   <td>{Facecolo}</td>

 </tr>
 <tr>
   
   <td>Giới tính</td>
   <td>{machie}</td>

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
