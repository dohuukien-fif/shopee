import React from "react";
import { useState, useEffect } from "react";
import MenuList from "./menuLisst";
import Button from "./button";
import { Datas } from "./data";
import "./watch.css";
import axios from "axios";
import Sice from "./sice";
import Filter from "./filterPrice";
import { Link } from "react-router-dom";
import FoucusContent from "../banner/foucusContent";
//const allcontat = ["ALL",...new Set(Datas.map(item=>item.trademark))]
function Menu() {
  const [Menus, setMenu] = useState(Datas);
  //const [Buttons, setButton] = useState(allcontat);
  console.log(Menus);
  const filter = (checkbox) => {
    if (checkbox === "ALL") {
      setMenu(Datas);
      return;
    }
    const datafilter = Datas.filter(
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
          <Button filter={filter} />
          <div className="watch-input">
            <input type="text" placeholder="đ TỪ" /> -{" "}
            <input type="text" placeholder="đ ĐẾN" />
          </div>
          <div>
            <button className="menu-button">Đánh giá 4* cho danh mục</button>
            <p className="description">
              <strong>Giày Dép chính hãng</strong> là một trong những phụ kiện
              thời trang quan trọng trong tủ giày của của nam giới lẫn phụ nữ,
              cho nên việc tìm ra được thương hiệu hay đôi giày thích hợp là
              điều cần thiết. Hãy tham khảo những sản phẩm từ các thương hiệu
              giày dép nổi tiếng có mặt tại Vua Hàng Hiệu. Với đa dạng các sản
              phẩm như:{" "}
              <i style={{ color: "gray" }}>
                Giày thể thao, giày vải, Giày lười, Boot cho nữ, giày đế xuồng,
                giày cao gót, giày đế bệt, dép ...
              </i>{" "}
              Chúng tôi tin tưởng rằng đây là nơi mua sắm hàng đầu Việt Nam dành
              cho quý khách hàng.
            </p>
          </div>
        </div>
        <div className="cc">
          <div className="bum">
            <div>
              <span>Giày</span>
            </div>
            <div>
              <Filter menus={Menus} />
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
          <strong>Giày dép</strong> hay giầy là một phụ kiện thời trang đi vào
          bàn chân con người để bảo vệ và làm êm chân trong khi thực hiện các
          hoạt động khác nhau. Giày cũng được sử dụng như một món đồ trang trí
          tạo nên phong cách thời trang cho người mang nó.
        </p>
        <p>
          <strong>Phân loại Giày:</strong> <Link>Giày cho nam</Link> -{" "}
          <Link>Giày cho nữ</Link> - <Link>Giày cho tre em </Link> -{" "}
          <Link>Giày Unisex</Link>
        </p>
        <p>
          Giày thường được làm từ chất liệu da, gỗ, vải,... nhưng đang ngày càng
          được làm từ cao su, nhựa và các vật liệu hoá dầu khác.
        </p>
        <h3>Thiết kế kiểu dáng của Giày</h3>
        <p>
          <strong> Thiết kế của giày</strong> đã đa dạng và phong phú cho cả nam
          và nữ theo thời gian, văn hoá và mục đích sử dụng. Ngoài ra thời trang
          cũng chi phối nhiều yếu tố thiết kế, chẳng hạn như giày có gót rất cao
          (giày cao gót) hay có gót phẳng (giày thể thao). Giày dép hiện đại rất
          khác nhau về mục đích sử dụng, phong cách và giá thành.
          <p>
            Dép đơn giản có thể rất mỏng và chỉ bao gồm một dây duy nhất trong
            khi giày thời trang hiện đại có thể được làm từ các vật liệu rất tốn
            kém, kết cấu phức tạp và giá hàng ngàn đôla một đôi. Các loại giày
            khác cho các mục đích sử dụng khác như giày leo núi hay giày trượt
            tuyết,...Tuy nhiên, Vua Hàng Hiệu sẽ liệt kê 6 loại giày thường được
            sử dụng nhé:
          </p>
        </p>
      </div>
      <FoucusContent />
    </div>
  );
}
export default Menu;
