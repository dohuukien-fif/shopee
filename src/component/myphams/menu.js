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
              <strong> Mũ nón hàng hiệu nhập khẩu chính hãng</strong> Mũ Nón
              Gucci, Nón Lacoste, Nón Calvin Klein, Mũ MLB..thời trang cao cấp,
              hàng da thật auth, mẫu mã trẻ trung năng động mới nhất 2021. Với
              nhiều kiểu dang bucket, lưỡi trai, ông địa, nồi, len,..., Giá tốt
              nhất tại Vua Hàng Hiệu Việt Nam.
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
          <div className="sice__watchs">
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
          <strong>Mũ Nón Hàng Hiệu</strong> là phụ kiện thời trang không thể
          thiếu đối với giưới trẻ hiện nay. Những chiếc mũ cao cấp không chỉ để
          che nắng mà còn tôn lên phong cách thời trang, thể hiện tính cách và
          sự các tính của người mang mũ (nón).
        </p>

        <h3>Mũ nón trên Vua Hàng Hiệu</h3>
        <p>
          Các sản phẩm mũ nhập khẩu được phân phối chính thức trên sàn thương
          mại điện tử Vua Hàng Hiệu hiện nay đều được cung cấp từ các thương
          hiệu phụ kiện mũ nổi tiếng trên thế giới trong đó có 53 chiếc mũ cho
          nam, 2 chiếc nón cho nữ và 57 dòng mũ Unisex .
          <p>
            Là địa chỉ chuyên cung cấp các sản phẩm nón thời trang chính hãng từ
            các thương hiệu nổi tiếng thế giới như: Nón Gucci, Nón lacsote, Nón
            CK, Nón MLB, Nón McQueen, ... tới toàn bộ khách hàng thông qua hệ
            thống các kênh Online.
            <p>
              Mũ lưỡi trai/Nón kết chuẩn Form cứng cáp và luôn được khách hàng
              tin tưởng và đặt mua.
              <h3>TOP THƯƠNG HIỆU MŨ NÓN AUTH XU HƯỚNG 2020</h3>
            </p>
          </p>
        </p>
      </div>
      <FoucusContent />
    </div>
  );
}
export default Menu;
