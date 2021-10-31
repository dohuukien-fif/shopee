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
                   <strong>  {name}</strong> là dòng sản phẩm nổi tiếng của thương hiệu Obagi Mỹ, hỗ trợ da tươi trẻ và mịn màng, hỗ trợ nuôi dưỡng cải thiện da luôn khỏe mạnh.
                     </p>
                     <p>
                     Với hàm lượng Retinol 1% là một dạng vitamin A đặc thù có khả năng hỗ trợ làm tình trạng da nhăn, sạm, nám, tàn nhang... Hỗ trợ làm mịn và trẻ da bất ngờ có trong kem dưỡng hỗ trợ da trẻ hóa, Hỗ trợ giảm mụn Obagi 360 Retinol 1% 28g là sản phẩm thích hợp cho những làn da nhăn nheo, sạm nám, kém sức sống và chịu tổn thương từ tác động môi trường
                     </p>
                      <img className="image_tab" src={image[0]}/>
                      <h3><sttrong>{name}</sttrong></h3>
                        <p>
                       <trong>{name}</trong>  là sản phẩm được nghiên cứu bởi tập đoàn Obagi, ra đời tại Mỹ, được áp dụng công nghệ sản xuất tiên tiến với đội ngũ chuyên gia bác sĩ chuyên sâu để tạo nên những công thức cải thiện da vượt bậc. Obagi được xem là thương hiệu mỹ phẩm nổi tiếng về khả năng hỗ trợ làm giảm nám, sạm, tàn nhang... tuyệt vời cho làn da phái nữ.
                        </p>
                        <h4><strong>Về thương hiệu Obagi</strong></h4>
                      <p>
                     <i> Obagi là một công ty sản xuất kinh doanh các sản phẩm chuyên về chăm sóc da, đặt trụ sở tại Long Beach, California. Các hệ thống sản phẩm của Obagi được chế tạo để hỗ trợ giảm những rối loạn về da của người lớn.</i>
                      </p>
                      <p><i>Các sản phẩm trong hệ thống Obagi Nuderm được các Bác sĩ Zein E. Obagi và các chuyên gia sáng chế năm 1988. Bác sĩ Obagi và các cộng tác viên của Ông bắt đầu sản xuất và bán các sản phẩm này.</i></p>
                      <h4><strong>Kem dưỡng Obagi 360 Retinol 1%</strong></h4>
                      <p>
                     <i> Sử dụng kem dưỡng hỗ trợ da trẻ hóa, hỗ trợ làm giảm mụn Obagi lên da bạn sẽ thấy sự cải thiện rõ rệt trong một thời gian ngắn, với khả năng hỗ trợ thúc đẩy tuần hoàn máu, hỗ trợ da được cải thiện.</i>
                      </p>
                      <p><i>Hỗ trợ làm giảm nếp nhăn nheo, dấu chân chim sẽ dần đầy và biến mất, mặt khác những đốm nâu li ti gây tối màu da cũng mờ đi hỗ trợ làn da trắng sáng, đều màu và căng mịn.</i></p>


                        <img className="image_tab" src={image[1]}/>
                        <h3> <strong>Chất {name} nhạt cho môi mịn, tươi tắn</strong></h3>
                        <p>Chất son bảo vệ môi nhanh chóng nổi bật hơn bất cứ dòng son dưỡng nào trên thị trường hiện nay. Thoa một lớp son là bao nhiêu khuyết điểm được lấp đầy, môi mịn và mọng hẳn. Son dưỡng Dior 001 Pink dưỡng tốt nhưng hạn chế bị bết dính môi hay bóng quá mức.</p>
                      
                         <img className="image_tab" src={image[2]}/>
                        
                        <p>
                        <strong>Thành phần khác:</strong> Tham khảo chi tiết trên hướng dẫn sử dụng đi kèm.
                        </p>
                        <h3><strong>Ưu điểm nổi bật của kem dưỡng da, {name}</strong></h3>
                         <p>- Hỗ trợ tăng cường tái tạo tế bào mới, hỗ trợ giảm nếp nhăn và hỗ trợ giảm mụn.</p>
                         <p>- Hỗ trợ cải thiện nám, đồi mồi hỗ trợ cho làn da trắng sáng, đều màu.</p>
                         <p>- Hỗ trợ thúc đẩy tuần hoàn máu, chuyển hóa năng lượng cho vitamin C và E hỗ trợ làm giảm oxy hóa tế bào, hỗ trợ cải thiện các dấu hiệu về da.</p>
                        <p>- Phù hợp với mọi làn da.</p>
                       
                         <img className="image_tab" src={image[1]}/><br/>
                         <h3><strong>Hướng dẫn sử dụng kem dưỡng da {name}</strong></h3>
                       
                         <p>
                         Cách sử dụng đúng cho sản phẩm mỹ phẩm của Obagi cần:
                         </p>
                         <p>
                         <strong>Bước 1:</strong> Rửa mặt thật sạch để có thể hấp thụ tốt dưỡng chất.
                         </p>
                         <p><strong>Bước 2:</strong> Lấy kem chấm lên vùng da mặt thành hình chữ T, tránh bôi vào vùng da mắt sau đó massage nhẹ cho kem này thấm đều hơn, nên dùng Rentinol vào buổi tối.</p>
                        
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
   
   <td>Loại da</td>
   <td>{cord}</td>

 </tr>
 <tr>
   
   <td>Giới tính</td>
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
