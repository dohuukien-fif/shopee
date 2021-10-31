import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Table, Progress } from "reactstrap";
import { FaStar, FaPlus } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import Formxer from "./Formxet";
import Foucus from "./../../banner/foucusContent";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
const TabMota = ({
  name,
  price,
  price1,
  image,
  trade,
  cord,
  machie,
  Facecolo,
  settab,
  tab,
}) => {
  const [status, setstatus] = useState(false);
  const [toager, settoager] = useState(1);
  const [text, settext] = useState("");
  const [bet, setbet] = useState(false);
  const [todos, setTodos] = React.useState([]);
  const [talks, setTalks] = useState([
    {
      id: 1,
      text: "kiên đẹp trai ",
      day: "8/3/2000",
      status: true,
    },
    {
      id: 2,
      text: "kiên đẹp trai quá đi ",
      day: "8/3/2000",
      status: true,
    },
    {
      id: 3,
      text: "kiên đẹp trai soái quá ",
      day: "8/3/2000",
      status: true,
    },
  ]);

  const toggleTab = (index) => {
    settoager(index);
  };

  const handleChange = (e) => {
    settext(e.target.value);
  };

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: Math.floor(Math.random() * 10000) + 1,
        text: text,

        completed: false,
      },
    ]);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    addTodo();
    settext("");
  };
  return (
    <div className="foucus_end1">
      <div className="container-tab">
        <div
          className={toager === 1 ? "tab activetab" : "tab"}
          onClick={() => toggleTab(1)}
        >
          CHI TIẾT
        </div>
        <div
          className={toager === 2 ? "tab activetab" : "tab"}
          onClick={() => toggleTab(2)}
        >
          {" "}
          ĐÁNH GIÁ
        </div>
        <div
          className={toager === 3 ? "tab activetab" : "tab"}
          onClick={() => toggleTab(3)}
        >
          HỎI ĐÁP
        </div>
      </div>
      <div className="container-content">
        <div className={toager === 1 ? "content active-content" : "content"}>
          <p>
            <strong> {name}</strong> là dòng son dưỡng cao cấp và đắt đỏ trên
            thị trường son hiện nay. <strong>Son Dior 001 Pink </strong>sở hữu
            thiết kế thanh lịch, ngọt ngào hoàn hảo kết hợp với chất son sáp mềm
            mượt, trong trẻo cùng với màu son hồng nhẹ khiến bất cứ cô nàng nào
            cũng khao khát có được.
          </p>
          <p>
            Dior 001 Pink Addict Lip Glow là một trong những thởi son
            best-seller của hãng Dior và được giới mộ điệu coi như nàng “công
            chúa” trong thế giới son chăm sóc môi đa sắc màu, được mệnh danh là
            "người tình trong mộng" của mọi cô nàng.
          </p>
          <img className="image_tab" src={image[0]} />
          <h3>
            <sttrong>{name}</sttrong>
          </h3>
          <p>
            Kế thừa phong cách thanh lịch và sang trọng vốn có của Dior,
            <trong>{name}</trong> sở hữu vè ngoài đầy sức hút đẳng cấp với thân
            nhựa cao cấp phủ ánh kim bóng loáng, vỏ son có màu hồng nhạt trong
            trẻo.
          </p>
          <p>
            <strong>{name}</strong> sáng bóng được bao bọc bởi nắp nhựa hồng
            trong trẻo. Son nhỏ gọn mà chắc chắn. Dấu ấn thương hiệu son Dior
            được lồng ghép hài hoà khi có biểu tượng CD dập chìm trên thân. Ở
            đuôi còn có núm tròm khác biệt và tinh tế tạo cho người dùng cảm
            giác tiểu thư quyền quý.
          </p>
          <img className="image_tab" src={image[1]} />
          <h3>
            {" "}
            <strong>Chất {name} nhạt cho môi mịn, tươi tắn</strong>
          </h3>
          <p>
            Chất son bảo vệ môi nhanh chóng nổi bật hơn bất cứ dòng son dưỡng
            nào trên thị trường hiện nay. Thoa một lớp son là bao nhiêu khuyết
            điểm được lấp đầy, môi mịn và mọng hẳn. Son dưỡng Dior 001 Pink
            dưỡng tốt nhưng hạn chế bị bết dính môi hay bóng quá mức.
          </p>

          <img className="image_tab" src={image[2]} />

          <p>
            Cảm giác son lên màu thuần khiết, trong trẻo chứa đựng bao sự ngọt
            ngào. Dù môi thâm và bong tróc đều được “cứu cảnh cả”.
          </p>
          <h3>
            <strong>Mùi hương {name}</strong>
          </h3>
          <p>Son sở hữu mùi hương ngọt ngào của kẹo đầy thu hút.</p>
          <h3>
            <strong>Độ bám màu Dior 001 Pink</strong>
          </h3>
          <img className="image_tab" src={image[1]} />
          <br />

          <p>
            <Link> Cây son</Link> có các thành phần chính là Wild Mango và Luffa
            Cylindrica, chứa thành phần chống nắng SPF 10 chống môi thâm và lão
            hóa. Cộng thêm chất son vừa phải, không dính môi, son lướt trên môi
            như một thỏi thạnh mềm mượt, che phủ đi các rãnh môi xấu xí, để lại
            đôi môi căng mọng với lớp màu trong trẻo.
          </p>
          <p>
            Độ bóng trên môi sẽ mất dần đi sau khoảng 15 phút, lớp màu hồng hào
            tự nhiên được lưu lại lên tới vài giờ đồng hồ.
          </p>
          <p>
            <strong>Son dưỡng Dior 001 Pink</strong>còn bền màu đến 3-4h liền.
          </p>

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
                <td>Màu sắc</td>
                <td>{machie}</td>
              </tr>
              <tr>
                <td>Giới tính</td>
                <td>{Facecolo}</td>
              </tr>
            </tbody>
          </Table>

          <h4>
            <strong>Đánh giá sản phẩm</strong>
          </h4>
          <div className="foucus-tab">
            <div className="foucus-tab1">
              <span>
                <strong>5/5</strong>
              </span>
              <FaStar className="icon_m" /> <FaStar className="icon_m" />{" "}
              <FaStar className="icon_m" /> <FaStar className="icon_m" />{" "}
              <FaStar className="icon_m" />
            </div>
            <div className="foucus-tab2">
              <FaStar className="icon_m" /> <FaStar className="icon_m" />{" "}
              <FaStar className="icon_m" /> <FaStar className="icon_m" />{" "}
              <FaStar className="icon_m" />
              <br></br>
              <FaStar className="icon_m" /> <FaStar className="icon_m" />{" "}
              <FaStar className="icon_m" /> <FaStar className="icon_m" />{" "}
              <AiOutlineStar />
              <br></br>
              <FaStar className="icon_m" /> <FaStar className="icon_m" />{" "}
              <FaStar className="icon_m" /> <AiOutlineStar /> <AiOutlineStar />
              <br></br>
              <FaStar className="icon_m" /> <FaStar className="icon_m" />{" "}
              <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar />
              <br />
              <FaStar className="icon_m" /> <AiOutlineStar /> <AiOutlineStar />{" "}
              <AiOutlineStar /> <AiOutlineStar />
            </div>
            <div className="foucus-tab3">
              <span>
                <strong>Chia sẻ nhận xét về sản phẩm</strong>
              </span>
              <br />
              <button className="btn-tab" onClick={() => setstatus(!status)}>
                VIẾT NHẬN XÉT
              </button>
            </div>
          </div>
          <div className="form-tab">
            <Formxer status={status} />
          </div>
        </div>
        <div
          className={toager === 2 ? "content active-content" : "content"}
        ></div>
        <div className={toager === 3 ? "content active-content" : "content"}>
          <form onSubmit={onSubmit} className="exampleTexts">
            <br />
            <FormGroup>
              <Label for="exampleTexts"></Label>
              <Input
                type="textarea"
                name="text"
                id="exampleTexts"
                onChange={handleChange}
                value={text}
                placeholder="Nhập câu hỏi của bạn"
              />
              <button type="submit" className="add-btns">
                Gửi câu hỏi
              </button>
            </FormGroup>
          </form>
        </div>
      </div>
    </div>
  );
};
export default TabMota;
