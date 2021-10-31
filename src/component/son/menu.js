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
    const datafilter = Menus.filter(
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
              <strong> Son môi hàng hiệu nữ chính hãng 2021</strong> Mua các
              thỏi son nhập khẩu chính hãng của Nhật, Hàn, Pháp, Mỹ. Son lì, son
              dưỡng, Son lipstick cao cấp Son Shu Nhật, Son Tom Ford, Son MAC,
              Son YSL, Son Gucci...màu đẹp, đủ màu cho mọi lứa tuổi. Cá tính,
              phong cách nữ.
            </p>
          </div>
        </div>
        <div className="cc">
          <div className="bum">
            <div>
              <span>Son</span>
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

      <FoucusContent />
    </div>
  );
}
export default Menu;
