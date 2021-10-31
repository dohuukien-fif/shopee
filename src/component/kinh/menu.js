import React from "react";
import { useState, useEffect } from "react";
import MenuList from "./menuLisst";
import Button from "./button";
import { Gary } from "./data";
import "./watch.css";
import axios from "axios";
import Sice from "./sice";
import Filter from "./filterPrice";
import { Link } from "react-router-dom";
import FoucusContent from "../banner/foucusContent";
const allcontat = ["ALL", ...new Set(Gary.map((item) => item.trademark))];
function Menu() {
  const [Menus, setMenu] = useState(Gary);
  const [Buttons, setButton] = useState(allcontat);
  console.log(Menus);
  const filter = (checkbox) => {
    if (checkbox === "ALL") {
      setMenu(Gary);
      return;
    }
    const datafilter = Gary.filter(
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
              <strong>Kính mắt chính hãng </strong> cho Nam và Nữ độc quyền tại
              Việt Nam. Kính mắt cận, kính râm chống nắng Chanel, MK, Elly,
              Catier, Diors, Gucci, Rayban, GM…đủ mẫu tròn, vuông thời trang Cao
              cấp. Bảo hành tại Việt Nam. Những chiếc kính mắt với thiết kế hợp
              xu hướng còn giúp bạn khẳng định được phong cách cũng như gu thời
              trang tinh tế của mình. Vuahanghieu luôn cập nhật những xu hướng
              thời trang mắt kính mới nhất từ các thương hiệu nổi tiếng để mang
              đến cho bạn nhiều lựa chọn cho phù hợp với phong cách của mình.
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
          <strong>Mắt kính thời trang</strong> không chỉ giúp bảo vệ mắt mà còn
          là một món phụ kiện thời trang phối hợp với quần áo có thể toát lên gu
          thời trang của bạn. Nếu bạn đang tìm địa chỉ mua kính mắt thời trang
          giá tốt thì Vua Hàng Hiệu là gợi ý dành cho bạn. Các sản phẩm 100%
          nhập khẩu, có đầy đủ giấy tờ, bill và bảo hành của hãng, luôn được cập
          nhật những mẫu mới nhất, thịnh hành nhất.
        </p>
        <p>
          Đến với sàn TMĐT Vua Hàng Hiệu để cùng trải nghiệm mua sắm online tiện
          lợi, nhanh chóng và hiệu quả!
        </p>
      </div>
      <FoucusContent />
    </div>
  );
}
export default Menu;
