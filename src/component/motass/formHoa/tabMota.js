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
                   <strong>  {name}</strong> mẫu 2018 là mùi hương nước hoa nữ sang trọng toanh từ thương hiệu {trade} của Mỹ. Victoria's Very Sexy mang hương thơm quyến rũ, cuốn hút, dành tặng cho những cô gái nữ tính, thích tỏa sáng nơi đám đông và khẳng định vẻ đẹp sexy của mình.
                     </p>
                     <h3><strong>Lịch sử ra đời {trade} 2018</strong></h3>
                     <p>
                     Nước hoa Very Sexy 2018 của hãng Victoria's Secret được hãng ra mắt vào năm 2018, và nhiều người dù là Fan ruột cũng đã nhầm tưởng nó giống với mùi hương của Very sexy 2012, chỉ thay đổi về ngoại hình cũng như năm sản xuất.
                     </p>
                     <p>Very Sexy 2018 trở nên gai góc và táo bạo hơn với hương thơm của Hoa tú cầu cùng Cây xương rồng. {trade} Sexy 2018 nếu được đặt tên khác thì có lẽ xứng đáng với cái tên "vũ khí khiêu gợi" bởi cách nó biến người đối diện thành một kẻ tò mò. Sự gợi cảm và cuốn hút đậm chất nữ tính của Very Sexy 2018 càng trở nên khó lường hơn khi được đi cùng những cô nàng tự tin và quyết đoán. </p>
                      <img className="image_tab" src={images}/>
                      <h3><sttrong>Thành phần nước hoa {name}</sttrong></h3>
                        <p>
                        Thành phần của chai nước hoa Victoria's Secret này là một sự pha trộn của hoa lan vani, một loại cam nhỏ và nho đen Hy Lạp. 
                        </p>
                      <p>
                      Bên cạnh đó, Quả mâm xôi đen và Quýt Clementine là hai hương bạn có thể dễ dàng cảm nhận được khi sử dụng nước hoa này.
                      </p>
                        <img className="image_tab" src={image[1]}/>
                        <h3> <strong>Thiết kế chai nước hoa {trade}</strong></h3>
                        <p>Thiết kế phong cách mới của {name} 2018 trên nắp chai có thêm nơ đen rất kiêu sa, với gam màu chai đỏ rượu nóng bỏng gợi những hình ảnh liên tưởng đến các bữa tiệc cuồng nhiệt, nơi mà các cô gái thoả sức thả thính các chàng trai bằng hương thơm nước hoa cao cấp nồng nàn.</p>
                      
                         <img className="image_tab" src={image[2]}/>
                         <h3><strong>Hương thơm Nước Hoa {name} độc đáo</strong></h3>
                        <p>
                        Với sự trở lại lần này, Nước hoa Very Sexy 2018 7ml mang hương thơm cay khơi gợi xúc cảm đầy quyến rũ và khiêu khích đưa người dùng thăng hoa bởi sự hòa quyện độc đáo từ hương phong lan, vani, nho đen, … làm xao xuyến mọi con tim ngay từ lần đầu gặp gỡ đầu.
                        </p>
                     
                         <img className="image_tab" src={image[1]}/><br/>
 
                <div>
                  <span>Hương Đầu: Quýt Clementine, Cà phê Cappuccino, Cây xương rồng, Tiêu, Quả mâm xôi đen</span>
                       <span>Hương giữa: Hoa trinh nữ, Hoa tú cầu, Hoa trà (Camelia), Hoa phong lan</span>
                 <span>Hương cuối: Hương gỗ, Quả mâm xôi đen, Xạ hương, Hổ phách</span>
                </div>
                        
                         <Table className="table" bordered>

<tbody>
 <tr>
   
   <td>Thương hiệu</td>
   <td>{trade}</td>
  
 </tr>
 <tr>
   
   <td>Nồng độ</td>
   <td>{cord}</td>

 </tr>
 <tr>
   
   <td>Lưu Hường</td>
   <td>{machie}</td>

 </tr>
 <tr>
   
   <td>Nhóm hương</td>
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
