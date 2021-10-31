import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useUserContext } from "./../../contexts/Authcontentx";
import { Redirect } from "react-router-dom";
const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUserContext();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <div className="container__navbar">
        <Navbar color="" light expand="md">
          <div className="bor"></div>
          <NavItem></NavItem>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <Link
                className="link-navbar"
                href="https://github.com/reactstrap/reactstrap"
              >
                Thương Hiệu
              </Link>
              <NavItem className="mm">
                <Link className="link-navbar" to="/Watch">
                  Đồng hồ
                </Link>

                <div className="dropdow-title">
                  <div className="drop">
                    <div className="dropdow-top dropdow-tops">
                      <h4>THƯƠNG HIỆU </h4>
                      <ul>
                        <li>
                          <Link>Seiko</Link>
                        </li>
                        <li>
                          <Link>Versake</Link>
                        </li>
                        <li>
                          <Link>Orient</Link>
                        </li>

                        <li>
                          <Link>Marc jacobs</Link>
                        </li>
                        <li>
                          <Link>Knot</Link>
                        </li>
                        <li>
                          <Link>Citizen</Link>
                        </li>
                        <li>
                          <Link>Fossil</Link>
                        </li>
                        <li>
                          <Link>Tissot</Link>
                        </li>
                        <li>
                          <Link>Bulova</Link>
                        </li>
                        <li>
                          <Link>Casio</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdow-top">
                      <h4>THEO GIỚI TÍNH</h4>
                      <ul>
                        <li>
                          <Link>Đồng hồ Nam</Link>
                        </li>
                        <li>
                          <Link>Đồng hồ Nữ</Link>
                        </li>

                        <li>
                          <Link>Đồng hồ Unisex</Link>
                        </li>
                        <li>
                          <Link>Đồng hồ Đôi</Link>
                        </li>
                      </ul>
                      <h5>Phân loại</h5>
                      <ul>
                        <li>
                          <Link>Seiko 5</Link>
                        </li>
                        <li>
                          <Link>Seiko quân đội</Link>
                        </li>
                        <li>
                          <Link>Seiko Sports</Link>
                        </li>
                        <li>
                          <Link>Seiko Solar</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdow-top">
                      <h4>KIỂU MẶT ĐỒNG HỒ</h4>
                      <ul>
                        <li>
                          <Link>Mặt tròn</Link>
                        </li>
                        <li>
                          <Link>Mặt chữ nhật</Link>
                        </li>
                        <li>
                          <Link>Mặt Vuông</Link>
                        </li>

                        <li>
                          <Link>Mặt Oval</Link>
                        </li>
                      </ul>
                      <h5>Phong cách đồng hồ</h5>
                      <ul>
                        <li>
                          <Link>Tự động (Automatic)</Link>
                        </li>
                        <li>
                          <Link>Máy Pin (Quartz)</Link>
                        </li>
                        <li>
                          <Link>Năng lượng ánh sáng (Solar)</Link>
                        </li>
                        <li>
                          <Link>Năng lượng chuyển động (Kinetic)</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdow-topss">
                      <h4>CHẤT LIỆU DÂY</h4>
                      <ul>
                        <li>
                          <Link>Dây da</Link>
                        </li>
                        <li>
                          <Link>Dây kim loại</Link>
                        </li>
                        <li>
                          <Link>Dây cao su</Link>
                        </li>

                        <li>
                          <Link>Dây silicon</Link>
                        </li>
                        <li>
                          <Link>Dây Dù</Link>
                        </li>
                        <li>
                          <Link>Màu Đen</Link>
                        </li>
                        <li>
                          <Link>Màu Nâu</Link>
                        </li>
                        <li>
                          <Link>Dây Bạc</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdow-top">
                      <img src="https://cdn.vuahanghieu.com/unsafe/200x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/category/2020/06/dong-ho-06062020090237.jpg" />
                      <br />
                      <span>xem hêt : ĐỒNG HỒ</span>
                    </div>
                  </div>
                </div>
              </NavItem>
              <NavItem className="mm">
                <Link className="link-navbar" to="/túi-sách">
                  Túi sách
                </Link>
                <div className="dropdow-title">
                  <div className="drop">
                    <div className="dropdow-top dropdow-tops">
                      <h4>THƯƠNG HIỆU </h4>
                      <ul className="dropdow-tuis">
                        <li>
                          <Link>Charles & Keith</Link>
                        </li>
                        <li>
                          <Link>Lacoste</Link>
                        </li>
                        <li>
                          <Link>Louis Vuiton</Link>
                        </li>

                        <li>
                          <Link>Venuco</Link>
                        </li>
                        <li>
                          <Link>Gucci</Link>
                        </li>
                        <li>
                          <Link>Michael Kors</Link>
                        </li>
                        <li>
                          <Link>DKNY</Link>
                        </li>
                        <li>
                          <Link>AoKang</Link>
                        </li>
                        <li>
                          <Link>HBB</Link>
                        </li>
                        <li>
                          <Link>Versake</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdow-top">
                      <h4>THEO GIỚI TÍNH</h4>
                      <ul className="dropdow-tuis">
                        <li>
                          <Link>Túi nam</Link>
                        </li>
                        <li>
                          <Link>Túi Nữ</Link>
                        </li>

                        <li>
                          <Link>Túi Unisex</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdow-top">
                      <h4>MÀU SẮC</h4>
                      <ul className="dropdow-tuis">
                        <li>
                          <Link>Màu đen</Link>
                        </li>
                        <li>
                          <Link>Màu trắng</Link>
                        </li>

                        <li>
                          <Link>Màu kem</Link>
                        </li>
                        <li>
                          <Link>Màu nâu</Link>
                        </li>
                        <li>
                          <Link>Màu đỏ</Link>
                        </li>
                        <li>
                          <Link>Màu hồng pastel</Link>
                        </li>
                        <li>
                          <Link>Màu vàng</Link>
                        </li>
                        <li>
                          <Link>Màu da trời</Link>
                        </li>
                        <li>
                          <Link>Màu Navy</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdow-top">
                      <h4 className="dropdow-tuis">KIỂU TÚI ĐẸP</h4>
                      <ul>
                        <li>
                          <Link>Túi đeo chéo</Link>
                        </li>
                        <li>
                          <Link>Balo</Link>
                        </li>
                        <li>
                          <Link>Túi cầm tay</Link>
                        </li>

                        <li>
                          <Link>Ví</Link>
                        </li>
                        <li>
                          <Link>Túi đeo vai</Link>
                        </li>
                        <li>
                          <Link>Túi đeo hông</Link>
                        </li>
                        <li>
                          <Link>Vali</Link>
                        </li>
                        <li>
                          <Link>Máy rửa mặt Juveno</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdow-topss bage">
                      <h4>CHẤT LIỆU </h4>
                      <ul>
                        <li>
                          <Link>Da cao cấp</Link>
                        </li>
                        <li>
                          <Link>Da bò</Link>
                        </li>
                        <li>
                          <Link>Da dê</Link>
                        </li>

                        <li>
                          <Link>Canvas</Link>
                        </li>
                        <li>
                          <Link>Da Bu</Link>
                        </li>
                      </ul>

                      <ul className="bage-c">
                        <h5>Xuất xứ</h5>
                        <li>
                          <Link>Mỹ</Link>
                        </li>
                        <li>
                          <Link>Ý</Link>
                        </li>
                        <li>
                          <Link>Tây ban nha</Link>
                        </li>
                        <li>
                          <Link>Singapore</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdow-top">
                      <img src="https://cdn.vuahanghieu.com/unsafe/200x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/category/2019/04/tui-xach-27042019095144.jpg" />
                      <br />
                      <span>xem hết : TÚI SÁCH</span>
                    </div>
                  </div>
                </div>
              </NavItem>
              <NavItem className="mm">
                <Link className="link-navbar" to="/Nước- hoa">
                  Nước hoa
                </Link>
                <div className="dropdow-title">
                  <div className="drop">
                    <div className="dropdow-top dropdow-tops">
                      <h4>THƯƠNG HIỆU </h4>
                      <ul className="dropdow-hoa">
                        <li>
                          <Link>Versake</Link>
                        </li>
                        <li>
                          <Link>Chanel</Link>
                        </li>
                        <li>
                          <Link>Gucci</Link>
                        </li>

                        <li>
                          <Link>Victoria Secret</Link>
                        </li>
                        <li>
                          <Link>Chloe</Link>
                        </li>
                        <li>
                          <Link>DKNY</Link>
                        </li>
                        <li>
                          <Link>Kenzo</Link>
                        </li>
                        <li>
                          <Link>Armaf</Link>
                        </li>
                        <li>
                          <Link>Calvin Klein</Link>
                        </li>
                        <li>
                          <Link>Burberry</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdow-top">
                      <h4>THEO GIỚI TÍNH</h4>
                      <ul className="dropdow-tuis">
                        <li>
                          <Link>Nước hoa nam</Link>
                        </li>
                        <li>
                          <Link>Nước hoa Nữ</Link>
                        </li>

                        <li>
                          <Link>Nước hoa Unisex</Link>
                        </li>
                        <li>
                          <Link>Nước hoa Niche</Link>
                        </li>
                        <li>
                          <Link>Nước hoa Mini</Link>
                        </li>
                        <li>
                          <Link>Nước hoa Intense</Link>
                        </li>
                        <li>
                          <Link>Nước hoa Doanh nhân</Link>
                        </li>
                      </ul>
                      <h5>Nồng độ</h5>
                      <ul className="dropdow-oC">
                        <li>
                          <Link>Eau De Parfum (EDF)</Link>
                        </li>
                        <li>
                          <Link>Eau De Toiilete (EDT)</Link>
                        </li>
                        <li>
                          <Link>Cologne</Link>
                        </li>
                        <li>
                          <Link>Parfum</Link>
                        </li>
                        <li>
                          <Link>Eau DE cologne (EDC)</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdow-top dropdow-top-hoa">
                      <h4>NHÓM HƯƠNG</h4>
                      <ul className="dropdow-hoa">
                        <li>
                          <Link>Giày hở gót</Link>
                        </li>
                        <li>
                          <Link>Hương gỗ</Link>
                        </li>

                        <li>
                          <Link>Hương hoa</Link>
                        </li>
                        <li>
                          <Link>Xạ hương</Link>
                        </li>
                        <li>
                          <Link>Hương Phương Đông</Link>
                        </li>
                        <li>
                          <Link>Hương chanh</Link>
                        </li>
                        <li>
                          <Link>Hương Chypre</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdow-top">
                      <h4 className="dropdow-tuis">XUẤT XỨ</h4>
                      <ul className="dropdow-hoa">
                        <li>
                          <Link>Pháp</Link>
                        </li>
                        <li>
                          <Link>Mỹ</Link>
                        </li>
                        <li>
                          <Link>Anh</Link>
                        </li>

                        <li>
                          <Link>Đức</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdow-topss bage">
                      <h4>DUNG TÍCH </h4>
                      <ul>
                        <li>
                          <Link>5ml</Link>
                        </li>
                        <li>
                          <Link>10ml</Link>
                        </li>
                        <li>
                          <Link>15ml</Link>
                        </li>

                        <li>
                          <Link>30ml</Link>
                        </li>
                        <li>
                          <Link>50ml</Link>
                        </li>
                        <li>
                          <Link>75ml</Link>
                        </li>
                        <li>
                          <Link>100ml</Link>
                        </li>
                        <li>
                          <Link>100ml</Link>
                        </li>
                        <li>
                          <Link>125ml</Link>
                        </li>
                        <li>
                          <Link>150ml</Link>
                        </li>
                        <li>
                          <Link>200ml</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </NavItem>
              <NavItem className="mm">
                <Link className="link-navbar" to="/Kính">
                  Kính mát
                </Link>
                <div className="dropdow-title">
                  <div className="drop">
                    <div className="dropdow-top dropdow-tops">
                      <h4>THƯƠNG HIỆU </h4>
                      <ul className="dropdow-tuis">
                        <li>
                          <Link>Gentle Monster</Link>
                        </li>
                        <li>
                          <Link>Dolce & Gabbana</Link>
                        </li>
                        <li>
                          <Link>Gucci</Link>
                        </li>

                        <li>
                          <Link>Rayban</Link>
                        </li>
                        <li>
                          <Link>Burberry</Link>
                        </li>
                        <li>
                          <Link>Michael Kors</Link>
                        </li>
                        <li>
                          <Link>Montblantc</Link>
                        </li>
                        <li>
                          <Link>Police</Link>
                        </li>
                        <li>
                          <Link>Miu Miu</Link>
                        </li>
                        <li>
                          <Link>Elly</Link>
                        </li>
                        <li>
                          <Link>Marc Jacobs</Link>
                        </li>
                        <li>
                          <Link>Prada</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdow-top">
                      <h4>THEO GIỚI TÍNH</h4>
                      <ul className="dropdow-tuis">
                        <li>
                          <Link>Kính nam</Link>
                        </li>
                        <li>
                          <Link>Kính Nữ</Link>
                        </li>

                        <li>
                          <Link>Kính Unisex</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdow-top">
                      <h4>MÀU SẮC</h4>
                      <ul className="dropdow-hoa">
                        <li>
                          <Link>Màu vàng </Link>
                        </li>
                        <li>
                          <Link>Màu nâu</Link>
                        </li>

                        <li>
                          <Link>Màu xám</Link>
                        </li>
                        <li>
                          <Link>Xạ hương</Link>
                        </li>
                        <li>
                          <Link>Màu xanh rêu</Link>
                        </li>
                        <li>
                          <Link>Màu hồng</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdow-top">
                      <h4 className="dropdow-tuis">PHONG CÁCH</h4>
                      <ul className="dropdow-hoa">
                        <li>
                          <Link>Kính chông nắng</Link>
                        </li>
                        <li>
                          <Link>Kính mắt cận</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdow-topss bage">
                      <img src="https://cdn.vuahanghieu.com/unsafe/200x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/category/2019/02/kinh-mat-27022019144015.jpg" />
                      <br />

                      <span>xem hết : KÍNH MẮT</span>
                    </div>
                  </div>
                </div>
              </NavItem>
              <NavItem className="mm">
                <Link className="link-navbar" to="Giày">
                  Giày
                </Link>
                <div className="dropdow-title">
                  <div className="drop">
                    <div className="dropdow-top dropdow-tops">
                      <h4>THƯƠNG HIỆU </h4>
                      <ul className="dropdow-tuis">
                        <li>
                          <Link>Giày MLB</Link>
                        </li>
                        <li>
                          <Link>Lacoste</Link>
                        </li>
                        <li>
                          <Link>Gucci</Link>
                        </li>

                        <li>
                          <Link>Louis Vuitton</Link>
                        </li>
                        <li>
                          <Link>Adidas</Link>
                        </li>
                        <li>
                          <Link>Puma</Link>
                        </li>
                        <li>
                          <Link>Hermes</Link>
                        </li>
                        <li>
                          <Link>Dolce & Gabbana</Link>
                        </li>
                        <li>
                          <Link>Alexander Mcqueen </Link>
                        </li>
                        <li>
                          <Link>Anta</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdow-top dropdow-top-GIAY">
                      <h4>THEO GIỚI TÍNH</h4>
                      <ul className="dropdow-tuis">
                        <li>
                          <Link>Giày nam</Link>
                        </li>
                        <li>
                          <Link>Giày Nữ</Link>
                        </li>

                        <li>
                          <Link>Giày Unisex</Link>
                        </li>
                        <li>
                          <Link>Giày trẻ em</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdow-top">
                      <h4>PHONG CÁCH</h4>
                      <ul className="dropdow-hoa">
                        <li>
                          <Link>Giày hở gót</Link>
                        </li>
                        <li>
                          <Link>Giày thể thao</Link>
                        </li>

                        <li>
                          <Link>Sandals</Link>
                        </li>
                        <li>
                          <Link>Giày cao gót</Link>
                        </li>
                        <li>
                          <Link>Giày búp bê</Link>
                        </li>
                        <li>
                          <Link>Giày bệt</Link>
                        </li>
                        <li>
                          <Link>Giày lưới</Link>
                        </li>
                        <li>
                          <Link>Giày Tây</Link>
                        </li>

                        <li>
                          <Link>Giày Trẻ em</Link>
                        </li>

                        <li>
                          <Link>Bốp</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdow-top dropdow-top-giaymau">
                      <h4 className="dropdow-tuis">MÀU SẮC</h4>
                      <ul className="dropdow-hoa">
                        <li>
                          <Link>Màu trắng </Link>
                        </li>
                        <li>
                          <Link>Màu đen nâu</Link>
                        </li>
                        <li>
                          <Link>Màu be</Link>
                        </li>

                        <li>
                          <Link>Màu Navy</Link>
                        </li>
                        <li>
                          <Link>Màu cam</Link>
                        </li>
                        <li>
                          <Link>Họa tiết da báo</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdow-topss ">
                      <h4>CHẤT LIỆU</h4>
                      <ul>
                        <li>
                          <Link>Giày da thật</Link>
                        </li>
                        <li>
                          <Link>Giày vải</Link>
                        </li>
                        <li>
                          <Link>Gày PU</Link>
                        </li>

                        <li>
                          <Link>Giày da bê</Link>
                        </li>
                        <li>
                          <Link>Giày da lộn</Link>
                        </li>
                        <li>
                          <Link>Giày da tổng hợp</Link>
                        </li>
                        <li>
                          <Link>Giày nhựa EVA</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdow-topss bage">
                      <img src="https://cdn.vuahanghieu.com/unsafe/200x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/category/2019/03/giay-29032019135539.jpg" />
                      <br />
                      <span>xem hết : GIÀY</span>
                    </div>
                  </div>
                </div>
              </NavItem>
              <NavItem className="mm">
                <Link className="link-navbar" to="/Thoi-trang">
                  Thời Trang{" "}
                </Link>
                <div className="dropdow-title">
                  <div className="drop">
                    <div className="dropdow-top dropdow-tops">
                      <h4>THƯƠNG HIỆU </h4>
                      <ul className="dropdow-tuis">
                        <li>
                          <Link>Giày MLB</Link>
                        </li>
                        <li>
                          <Link>Lacoste</Link>
                        </li>
                        <li>
                          <Link>Gucci</Link>
                        </li>

                        <li>
                          <Link>Giovani</Link>
                        </li>
                        <li>
                          <Link>Adidas</Link>
                        </li>
                        <li>
                          <Link>Calvin Klein</Link>
                        </li>
                        <li>
                          <Link>Versace</Link>
                        </li>
                        <li>
                          <Link>Burberry</Link>
                        </li>
                        <li>
                          <Link>Moschino </Link>
                        </li>
                        <li>
                          <Link>Alexander Mcqueen</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdow-top dropdow-top-GIAY">
                      <h4>THEO GIỚI TÍNH</h4>
                      <ul className="dropdow-tuis">
                        <li>
                          <Link>Giày nam</Link>
                        </li>
                        <li>
                          <Link>Giày Nữ</Link>
                        </li>

                        <li>
                          <Link>Giày Unisex</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdow-top">
                      <h4>PHONG CÁCH</h4>
                      <ul className="dropdow-hoa">
                        <li>
                          <Link>Áo sơ mi</Link>
                        </li>
                        <li>
                          <Link>Áo khoác</Link>
                        </li>

                        <li>
                          <Link>Áo len</Link>
                        </li>
                        <li>
                          <Link>Áo nỉ</Link>
                        </li>
                        <li>
                          <Link>Áo Hoodie</Link>
                        </li>
                        <li>
                          <Link>Áo thun</Link>
                        </li>
                        <li>
                          <Link>Áo phông</Link>
                        </li>
                        <li>
                          <Link>Giày Tây</Link>
                        </li>

                        <li>
                          <Link>Áo khoác lông lũ</Link>
                        </li>

                        <li>
                          <Link>Áo lót</Link>
                        </li>
                        <li>
                          <Link>Váy liền</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdow-top dropdow-top-giaymau">
                      <h4 className="dropdow-tuis">MŨ NÓN</h4>
                      <ul className="dropdow-hoa">
                        <li>
                          <Link>Mũ Gucci </Link>
                        </li>
                        <li>
                          <Link>Màu đen nâu</Link>
                        </li>
                        <li>
                          <Link>Mũ ny Yankees</Link>
                        </li>

                        <li>
                          <Link>Mũ Lacoste</Link>
                        </li>
                        <li>
                          <Link>Mũ Calvon klein</Link>
                        </li>
                        <li>
                          <Link>Mũ MCqueen</Link>
                        </li>
                        <li>
                          <Link>Mũ Marcelo Burlon</Link>
                        </li>
                        <li>
                          <Link>Mũ Era</Link>
                        </li>
                        <li>
                          <Link>Mũ Burberry</Link>
                        </li>
                        <li>
                          <Link>Cà vạt</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdow-topss dropdow-top-fashing ">
                      <h4>THẮT LƯNG</h4>
                      <ul>
                        <li>
                          <Link>Thắt lưng viniciobelt</Link>
                        </li>
                        <li>
                          <Link>Thắt lưng Lacoste</Link>
                        </li>
                        <li>
                          <Link>Thắt lưng Gucci</Link>
                        </li>

                        <li>
                          <Link>Thắt lưng Giovani</Link>
                        </li>
                        <li>
                          <Link>Thắt lưng Levi</Link>
                        </li>
                        <li>
                          <Link>Thắt lưng louis vuitton</Link>
                        </li>
                        <li>
                          <Link>Thắt lưng Dior</Link>
                        </li>
                        <li>
                          <Link>Thắt lưng Bullko</Link>
                        </li>
                        <li>
                          <Link>Thắt lưng Uniqlo</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdow-topss bage">
                      <img src="https://cdn.vuahanghieu.com/unsafe/200x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/category/2019/02/thoi-trang-27022019171612.jpg" />
                      <br />
                      <span>xem hết : THỜI TRANG</span>
                    </div>
                  </div>
                </div>
              </NavItem>
              <NavItem className="mm">
                <Link className="link-navbar" to="/Mũ">
                  Mũ
                </Link>
                <div className="dropdow-title">
                  <div className="drop">
                    <div className="dropdow-top dropdow-tops">
                      <h4>THƯƠNG HIỆU </h4>
                      <ul className="dropdow-hoa">
                        <li>
                          <Link>MLB</Link>
                        </li>
                        <li>
                          <Link>Lacoste</Link>
                        </li>
                        <li>
                          <Link>Gucci</Link>
                        </li>

                        <li>
                          <Link>New Era</Link>
                        </li>
                        <li>
                          <Link>Alexander Mcqueen</Link>
                        </li>
                        <li>
                          <Link>Adidas</Link>
                        </li>
                        <li>
                          <Link>calvin klein</Link>
                        </li>
                        <li>
                          <Link>Armaf</Link>
                        </li>
                        <li>
                          <Link>Dolce & Gabbana</Link>
                        </li>
                        <li>
                          <Link>Burberry</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdow-top">
                      <h4>THEO GIỚI TÍNH</h4>
                      <ul className="dropdow-tuis">
                        <li>
                          <Link>mũ nam</Link>
                        </li>
                        <li>
                          <Link>mũ Nữ</Link>
                        </li>

                        <li>
                          <Link>mũ Unisex</Link>
                        </li>
                        <li>
                          <Link>Ý</Link>
                        </li>
                        <li>
                          <Link>Hàn Quốc</Link>
                        </li>
                        <li>
                          <Link>Mỹ</Link>
                        </li>
                        <li>
                          <Link>Pháp</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdow-top">
                      <h4>KIỂU DÁNG</h4>
                      <ul className="dropdow-hoa">
                        <li>
                          <Link>Mũ lưỡi trai</Link>
                        </li>
                        <li>
                          <Link>Mũ tròn</Link>
                        </li>

                        <li>
                          <Link>Mũ len</Link>
                        </li>
                      </ul>
                      <h5>Size</h5>
                      <ul>
                        <li>
                          <Link>Size S</Link>
                        </li>
                        <li>
                          <Link>Size M</Link>
                        </li>
                        <li>
                          <Link>Size 57H</Link>
                        </li>
                        <li>
                          <Link>One Size</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdow-top">
                      <h4 className="dropdow-tuis">MÀU SẮC</h4>
                      <ul className="dropdow-hoa">
                        <li>
                          <Link>Màu đen</Link>
                        </li>
                        <li>
                          <Link>Màu trắng</Link>
                        </li>
                        <li>
                          <Link>Màu xanh Navy</Link>
                        </li>

                        <li>
                          <Link>Màu đỏ </Link>
                        </li>
                        <li>
                          <Link>Màu vàng </Link>
                        </li>
                      </ul>
                      <h5>Kiểu dáng</h5>
                      <ul>
                        <li>
                          <Link>Mũ lưỡi trai</Link>
                        </li>
                        <li>
                          <Link>Mũ len</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdow-topss bage">
                      <img src="https://cdn.vuahanghieu.com/unsafe/200x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/category/2020/04/mu-22042020115926.jpg" />
                      <br />
                      <span>xem hết : mũ</span>
                    </div>
                  </div>
                </div>
              </NavItem>
              <NavItem className="mm">
                <Link className="link-navbar" to="/My-pham">
                  Mỹ phẩm
                </Link>
                <div className="dropdow-title">
                  <div className="drop">
                    <div className="dropdow-top dropdow-tops dropdow-kems">
                      <h4>THƯƠNG HIỆU </h4>
                      <ul>
                        <li>
                          <Link>Ettee Lauder</Link>
                        </li>
                        <li>
                          <Link>DBH</Link>
                        </li>
                        <li>
                          <Link>Clinique</Link>
                        </li>

                        <li>
                          <Link>Foreo</Link>
                        </li>
                        <li>
                          <Link>Clarin</Link>
                        </li>
                        <li>
                          <Link>Paula Choice</Link>
                        </li>
                        <li>
                          <Link>Lancome</Link>
                        </li>
                        <li>
                          <Link>Shu Uemura</Link>
                        </li>
                        <li>
                          <Link>YSL</Link>
                        </li>
                        <li>
                          <Link>Kieh</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdow-top dropdow-kem">
                      <h4>THEO GIỚI TÍNH</h4>
                      <ul>
                        <li>
                          <Link>Đồng hồ Nam</Link>
                        </li>
                        <li>
                          <Link>Đồng hồ Nữ</Link>
                        </li>

                        <li>
                          <Link>Đồng hồ Unisex</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdow-top dropdow-kem">
                      <h4>LOẠI DA</h4>
                      <ul>
                        <li>
                          <Link>Da thường </Link>
                        </li>
                        <li>
                          <Link>Da khô</Link>
                        </li>
                        <li>
                          <Link>Da dầu nhờn</Link>
                        </li>
                      </ul>
                      <h5>Trang điểm</h5>
                      <ul>
                        <li>
                          <Link>Dầu tẩy trang</Link>
                        </li>
                        <li>
                          <Link>Nước hoa hồng</Link>
                        </li>
                        <li>
                          <Link>Phấn phủ</Link>
                        </li>
                        <li>
                          <Link>Kem hồng</Link>
                        </li>
                        <li>
                          <Link>Che khuyết điểm</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdow-topss dropdow-kem">
                      <h4>KEM DƯỠNG DA</h4>
                      <ul>
                        <li>
                          <Link>Tinh chất/Serum</Link>
                        </li>
                        <li>
                          <Link>tẩy tế bào chết</Link>
                        </li>
                        <li>
                          <Link>Gel trị mụn</Link>
                        </li>

                        <li>
                          <Link>Kem chống nắng</Link>
                        </li>
                        <li>
                          <Link>Nước thần</Link>
                        </li>
                        <li>
                          <Link>Sữa rửa mặt</Link>
                        </li>
                        <li>
                          <Link>Mascara</Link>
                        </li>
                        <li>
                          <Link>Tắm gội</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdow-topss dropdow-topss-My ">
                      <h4>MẶT NẠ</h4>
                      <ul>
                        <li>
                          <Link>Mặt nạ Foreo</Link>
                        </li>
                        <li>
                          <Link>Mặt nạ DBH</Link>
                        </li>
                        <li>
                          <Link>Mặt nạ Clinique</Link>
                        </li>

                        <li>
                          <Link>Mặt nạ Keih</Link>
                        </li>
                      </ul>
                      <h5>Son môi</h5>
                      <ul>
                        <li>
                          <Link>Son Shu Uemura</Link>
                        </li>
                        <li>
                          <Link>Son MAC</Link>
                        </li>
                        <li>
                          <Link>Son Hermes</Link>
                        </li>
                        <li>
                          <Link>Son Gucci</Link>
                        </li>
                        <li>
                          <Link>Son YSL</Link>
                        </li>
                        <li>
                          <Link>Son Tom Ford</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdow-topss bage">
                      <img src="https://cdn.vuahanghieu.com/unsafe/200x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/category/2019/02/my-pham-27022019171231.jpg" />
                      <br />
                      <span>xem hết : MỸ PHẨM</span>
                    </div>
                  </div>
                </div>
              </NavItem>
              <NavItem className="mm">
                <Link className="link-navbarss" to="/Son">
                  Son
                </Link>
                <div className="dropdow-title">
                  <div className="drop">
                    <div className="dropdow-top dropdow-tops">
                      <h4>THƯƠNG HIỆU </h4>
                      <ul className="dropdow-hoa">
                        <li>
                          <Link>Chanel</Link>
                        </li>
                        <li>
                          <Link>Gucci</Link>
                        </li>
                        <li>
                          <Link>Charlotte Tylbury</Link>
                        </li>

                        <li>
                          <Link>Christian Louboutin</Link>
                        </li>
                        <li>
                          <Link>Clinique</Link>
                        </li>
                        <li>
                          <Link>Dior</Link>
                        </li>
                        <li>
                          <Link>Givenchy</Link>
                        </li>
                        <li>
                          <Link>Hermes</Link>
                        </li>
                        <li>
                          <Link>Tom Ford</Link>
                        </li>
                        <li>
                          <Link>YSL</Link>
                        </li>
                        <li>
                          <Link>Shu Ueruma</Link>
                        </li>
                        <li>
                          <Link>Giorgio Armani</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdow-top">
                      <h4>THEO GIỚI TÍNH</h4>
                      <ul className="dropdow-tuis">
                        <li>
                          <Link>Son nữ</Link>
                        </li>
                        <li>
                          <Link>Son Unisex</Link>
                        </li>
                      </ul>
                      <h5>Loại son</h5>
                      <ul>
                        <li>
                          <Link>Son lì</Link>
                        </li>
                        <li>
                          <Link>Son Kem</Link>
                        </li>
                        <li>
                          <Link>Son dưỡng</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdow-top">
                      <h4>MÀU SON</h4>
                      <ul className="dropdow-hoa">
                        <li>
                          <Link>ĐỎ </Link>
                        </li>
                        <li>
                          <Link>Tím</Link>
                        </li>

                        <li>
                          <Link>Cam</Link>
                        </li>
                        <li>
                          <Link>Đỏ hồng</Link>
                        </li>
                        <li>
                          <Link>Đỏ tươi</Link>
                        </li>
                        <li>
                          <Link>Hồng đất</Link>
                        </li>
                        <li>
                          <Link>Đỏ cam</Link>
                        </li>
                        <li>
                          <Link>Hồng cam</Link>
                        </li>
                        <li>
                          <Link>Đỏ nâu</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdow-top">
                      <h4 className="dropdow-tuis">Xuất Xứ</h4>
                      <ul className="dropdow-hoa">
                        <li>
                          <Link>Anh</Link>
                        </li>
                        <li>
                          <Link>Hàn Quốc</Link>
                        </li>
                        <li>
                          <Link>Mỹ</Link>
                        </li>

                        <li>
                          <Link>Nhật bản</Link>
                        </li>
                        <li>
                          <Link>Pháp </Link>
                        </li>
                        <li>
                          <Link>Ý </Link>
                        </li>
                      </ul>
                      <h5>Kiểu dáng</h5>
                      <ul>
                        <li>
                          <Link>Mũ lưỡi trai</Link>
                        </li>
                        <li>
                          <Link>Mũ len</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdow-topss bage">
                      <img src="https://cdn.vuahanghieu.com/unsafe/200x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/category/2021/02/son-17022021161647.jpg" />
                      <br />
                      <span>xem hết : SON MÔI</span>
                    </div>
                  </div>
                </div>
              </NavItem>
              <NavItem className="link-navbars">
                <Link
                  className="link-navbars"
                  href="https://github.com/reactstrap/reactstrap"
                >
                  Mã Giảm Giá
                </Link>
              </NavItem>
              <NavItem className="link-navbar">
                <Link
                  className="link-navbar"
                  href="https://github.com/reactstrap/reactstrap"
                >
                  ...
                </Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar></UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      <div className="bom"></div>
    </div>
  );
};

export default Example;
