import React from "react";
import { useState, useEffect } from "react";
import MenuList from "./menuLisst";
import Button from "./button";
import { Garys } from "./data";
import "./watch.css";
import axios from "axios";
import Sice from "./sice";
import Filter from "./filterPrice";
import { Link } from "react-router-dom";
import FoucusContent from "../banner/foucusContent";
const allcontat = ["ALL", ...new Set(Garys.map((item) => item.trademark))];
function Menu() {
  const [Menus, setMenu] = useState(Garys);
  const [Buttons, setButton] = useState(allcontat);
  console.log(Menus);
  const filter = (checkbox) => {
    if (checkbox === "ALL") {
      setMenu(Garys);
      return;
    }
    const datafilter = Garys.filter(
      (item) =>
        item.trademark === checkbox ||
        item.cord === checkbox ||
        item.machie === checkbox ||
        item.Facecolor === checkbox
    );
    setMenu(datafilter);
  };

  return (
    <div>
      <div className="container__watch">
        <div className="container__watch1">
          <Button filter={filter} button={Buttons} />
          <div className="watch-input">
            <input type="text" placeholder="đ TỪ" /> -{" "}
            <input type="text" placeholder="đ ĐẾN" />
          </div>
          <div>
            <button className="menu-button">Đánh giá 4* cho danh mục</button>
            <p className="description">
              <strong>Mỹ phẩm chính hãng</strong>100% chất lượng tốt nhất chỉ có
              trên Vua Hàng Hiệu Việt Nam: Với đa dạng các dòng Son, Nước hoa,
              dưỡng da, Serum, kem chống nắng, làm sạch...cao cấp, Giá tốt nhất.
              Mỹ phẩm Hàn Quốc, Anh, Pháp, Đức, Mỹ...nhập khẩu, xách tay của
              nhiều thương hiệu nổi tiếng như: <Link>Clinique</Link>,{" "}
              <Link>Givenchy</Link>,<Link> Lancome</Link>, <Link>Whoo</Link>,
              <Link> Paula's Choice</Link>,<Link> Tom Ford</Link>,
              <Link> Ohui</Link>,<Link> M.A.C</Link>, <Link>Estee Lauder</Link>
              ...Cam kết mỹ phẩm phẩm chính hãng chất lượng..
            </p>
          </div>
        </div>
        <div className="cc">
          <div className="bum">
            <div>
              <span>Kính mát</span>
            </div>
            <div>
              <Filter />
            </div>
          </div>
          <div className="sice__watch">
            <Sice />
          </div>
          <div className="container__watch2">
            <MenuList menuss={Menus} />
          </div>
          <div className="page">
            <span>Hiển thị từ 1 đến 32 / 2085 sản phẩm</span>
            <br />
            <span>1 2 3 ... 66 Trang tiếp </span>
          </div>
        </div>
      </div>
      <div className="foucuscontent">
        <p>
          <strong>Thế giới Mỹ Phẩm cao cấp</strong> dành cho Nam và Nữ được nhập
          khẩu chính ngạch 100% từ các thương hiệu Mỹ phẩm nổi tiếng của nước
          ngoài: Hàn Quốc, Anh, Pháp, Mỹ, Đức, Nhật Bản...mang lại cho khách
          hàng sự yên tâm về chất lượng sản phẩm cũng như giá trên Vua Hàng Hiệu
          luôn tốt nhất.
        </p>

        <h3>Mỹ phẩm là gì?</h3>
        <p>
          Mỹ phẩm hay tiếng anh gọi là Cosmetics là những chất hoặc sản phẩm an
          toàn cho cơ thể con người được dùng để trang điểm hoặc thay đổi diện
          mạo hoặc mùi hương cơ thể. Nhiều mỹ phẩm được chế tạo để sử dụng cho
          mặt và tóc. Chúng thường là hỗn hợp các hợp chất hóa học, một số xuất
          phát từ nguồn gốc tự nhiên.
          <p>
            Các loại mỹ phẩm phổ biến gồm có son môi, mascara, phấn mắt, kem
            nền, phấn má hồng, phấn phủ, sữa rửa mặt và sữa dưỡng thể, dầu gội,
            sản phẩm tạo kiểu tóc (gel vuốt tóc, gôm xịt tóc,...), nước hoa. Mỹ
            phẩm thường được thoa lên mặt để làm nổi bật diện mạo nên còn được
            gọi là đồ trang điểm hay đồ hóa trang. (Xem thêm trên Wiki)
            <p>
              <h4>Mỹ phẩm được phân làm mấy loại?</h4>
              Trong quá trình sử dụng, theo kinh nghiệm của người dùng thì mỹ
              phẩm được phân thành 2 loại chính: Dược mỹ phẩm và Hóa mỹ phẩm
            </p>
          </p>
        </p>
      </div>
      <FoucusContent />
    </div>
  );
}
export default Menu;
