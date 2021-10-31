import React, { useEffect, useRef } from "react";
import axios from "axios";
import "./Mota.css";
import { FaStar, FaPlus } from "react-icons/fa";
import { BiCheckSquare } from "react-icons/bi";
import {
  AiOutlineDoubleRight,
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
  selectedProducts,
  selectedProductss,
  accTOCART,
} from "../../action/actionType";
import Foucus from "./../banner/foucusContent";
import { Link } from "react-router-dom";
import { Garys } from "./../MyPham/data";
import { useState } from "react";
import Detamypham from "./detamypham";
import DetaThum from "./detaSon";
import TabMota from "./formMypham/tabMota";
import SiceXet from "./formMypham/siceXet";
const ProductDetails = (props) => {
  const [product, setproduct] = useState(Garys);
  const [Indexs, setIndexs] = useState(0);
  const [total, setTotal] = useState(0);
  const [hide, sethide] = useState(false);
  const [tab, settab] = useState(false);

  const imgDiv = useRef();
  const { myphamId } = useParams();
  const dispatch = useDispatch();
  console.log(product);
  let detas = product.filter((item, index) => {
    return item.id === myphamId;
  });
  const productssss = (productsss) => {
    const action = accTOCART(productsss, 1);
    dispatch(action);
  };
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    imgDiv.current.style.backgroundPosition = `${x}% ${y}%`;
  };

  return (
    <div>
      {detas.map((product) => (
        <div>
          {product.length === 0 ? (
            <div>...Loading</div>
          ) : (
            <div>
              <div className="title-Mota">
                <span>Trang chủ / {product.name}</span>
              </div>
              <div className="container__Mota">
                <div className="containet_fulter">
                  <div className="container_fulter1">
                    <img
                      className="image-Mota"
                      onMouseMove={handleMouseMove}
                      src={`${product.image[Indexs]}`}
                      ref={imgDiv}
                      onMouseLeave={() =>
                        (imgDiv.current.style.backgroundPosition = `center`)
                      }
                    />
                  </div>
                  <div className="container_fulter2">
                    <div>
                      <span>{product.trademark}</span>
                      <h3 style={{ fontWeight: "700" }}>{product.name}</h3>
                    </div>

                    <div className="fulter3">
                      <span>
                        <span className="informas">Xuất xứ :</span>
                        {product.machie}
                      </span>
                      <span className="tranfor">
                        <span className="informas">Danh mục : </span>Son môi
                      </span>

                      <div>
                        <span>
                          <span className="informas">Đánh giá :</span>
                          <FaStar className="icon_m" />{" "}
                          <FaStar className="icon_m" />{" "}
                          <FaStar className="icon_m" />{" "}
                          <FaStar className="icon_m" />{" "}
                          <FaStar className="icon_m" /> (5){" "}
                          <span>Viết đánh giá</span>{" "}
                        </span>
                      </div>
                    </div>
                    <div className="descriptions">
                      <div className="description1">
                        <div>
                          <h3 className="price-des">
                            <strong className="price-des">
                              {product.price}
                            </strong>
                          </h3>
                          <h5 className="price-dess">
                            <strong className="price-dess">
                              {product.price1}
                            </strong>
                          </h5>
                        </div>
                        <div className="information-des">
                          <div>
                            <span>
                              <span className="informas">Thương hiêuh :</span>
                              {product.trademark}
                            </span>
                          </div>
                          <br></br>
                          <div className="informa">
                            <span>
                              <span className="informas">loại da :</span>
                              {product.cord}
                            </span>
                          </div>
                          <br />
                          <div className="informa">
                            <span>
                              <span className="informas">Xuất xứ :</span>{" "}
                              {product.machie}
                            </span>
                          </div>
                          <br />
                          <div className="informa">
                            <span>
                              <span className="informas">Gọi đặt mua :</span>{" "}
                              <strong style={{ color: "crimson" }}>
                                093.934.8888
                              </strong>{" "}
                              (7:30 - 22:00)
                            </span>
                          </div>
                        </div>
                        <div className="see-information">
                          <h6>
                            <strong>Xem thông tin chi tiết</strong>{" "}
                            <AiOutlineDoubleRight />{" "}
                          </h6>
                        </div>
                        <div className="add">
                          <button
                            className="edit"
                            onClick={productssss(product)}
                          >
                            THÊM VÀO GIỎ HÀNG
                          </button>
                          <button className="cartss">MUA NGÀY</button>
                        </div>
                        <div className="share">
                          <span>
                            CHIA SẺ QUA{" "}
                            <AiFillFacebook className="share-icon" />{" "}
                            <AiOutlineTwitter className="share-icon" />{" "}
                            <AiFillInstagram className="share-icon" />{" "}
                          </span>
                        </div>
                      </div>
                      <div className="description2">
                        <div className="dnescriptio2-2">
                          <div className="description2-2_2">
                            <img src="https://vuahanghieu.com/assets/images/shop.svg" />{" "}
                            <span>Mỹ Phẩm Sino</span>
                            <br />
                            <FaStar className="icon_m" />{" "}
                            <FaStar className="icon_m" />{" "}
                            <FaStar className="icon_m" />{" "}
                            <FaStar className="icon_m" />{" "}
                            <FaStar className="icon_m" /> <br />
                            <img src="https://vuahanghieu.com/assets/images/verify.svg" />
                            <span>Gian hàng đảm bảo</span>
                            <br />
                            <img src="https://vuahanghieu.com/assets/images/phone-call.svg" />
                            <span>093.934.8888</span>
                          </div>
                          <div className="description2-2_3">
                            <img
                              src="https://vuahanghieu.com/assets/images/checkbox.svg"
                              className="icon_des"
                            />
                            <span>
                              miễn phí trả đổi trong 7 ngày{" "}
                              <Link>chi tiết</Link>{" "}
                            </span>
                            <br />
                            <img
                              src="https://vuahanghieu.com/assets/images/checkbox.svg"
                              className="icon_des"
                            />
                            <span>Kiểm tra hàng trước khi nhận </span>
                            <br />
                            <img
                              src="https://vuahanghieu.com/assets/images/checkbox.svg"
                              className="icon_des"
                            />
                            <span>Hoàn tiền nếu phát hiên hàng giả </span>
                            <br />
                            <button className="btn-see">XEM SHOP</button>
                            <br />
                            <p className="contrac">
                              bạn muốn bán hàng cùng vua hãy ?{" "}
                              <Link>đăng kí</Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="foucus_des">
                  <span>
                    <strong>Sản phẩm thường mua cùng</strong>
                    <span className="foucus-fulter">
                      (Giảm 20.000 ₫ với mỗi sản phẩm mua kèm)
                    </span>
                  </span>
                  <span>
                    <strong>
                      <i>Lựa chon khác</i>
                    </strong>
                  </span>
                </div>
                <div className="foucus-content">
                  <div className="foucus-content1">
                    <img src={`${product.image[0]}`} />{" "}
                    <FaPlus className="icon1" />{" "}
                    <img src={`${product.image[1]}`} />{" "}
                    <FaPlus className="icon1" />{" "}
                    <img src={`${product.image[2]}`} />
                  </div>
                  <div className="foucus-content2">
                    <span>
                      {" "}
                      <BiCheckSquare /> {product.name}{" "}
                      <strong className="price-foucus">{product.price}</strong>
                    </span>
                    <br />
                    <span>
                      {" "}
                      <BiCheckSquare /> <Link>{product.name}</Link>{" "}
                      <strong className="price-foucus">{product.price}</strong>
                    </span>
                    <br />
                    <span>
                      {" "}
                      <BiCheckSquare />
                      <Link> {product.name} </Link>
                      <strong className="price-foucus">{product.price}</strong>
                    </span>
                    <div className="foucus-content2-2">
                      <span>
                        Tổng tiền{" "}
                        <span className="price-foucuss">{product.price}</span>
                      </span>
                      <button className="edits"> + THÊM VÀO GIỎ HÀNG</button>
                    </div>
                  </div>

                  <div className="foucus-content3">
                    <Detamypham image={product.image} setindexs={setIndexs} />
                  </div>
                </div>
                <div className="foucus_end">
                  <div className="foucus_end1">
                    <TabMota
                      name={product.name}
                      price={product.price}
                      image={product.image}
                      trade={product.trademark}
                      cord={product.cord}
                      machie={product.machie}
                      Facecolo={product.Facecolor}
                      price1={product.price1}
                      settab={settab}
                      tab={tab}
                    />
                  </div>

                  <div className="foucus_end2-pham">
                    <h4 className="title_foucus_end2">Có thể bạn quan tâm</h4>
                    <div className="foucus_end2-2">
                      <span>
                        <Link>Đồng hồ</Link>
                      </span>
                      <span>
                        <Link>Mũ Lacoste</Link>
                      </span>
                      <span>
                        <Link>Túi sách hiệu</Link>
                      </span>
                      <span>
                        <Link>Mũ Gucci</Link>
                      </span>
                      <span>
                        <Link>Son Mac</Link>
                      </span>
                      <span>
                        <Link>Nước hoa</Link>
                      </span>
                      <span>
                        <Link>Máy rửa mặt </Link>
                      </span>
                      <span>
                        <Link>Lăn Khử mùi</Link>
                      </span>
                      <span>
                        <Link>Giày</Link>
                      </span>
                      <span>
                        <Link>Kem </Link>
                      </span>
                      <span>
                        <Link>Son môi</Link>
                      </span>
                      <span>
                        <Link>Áo phông</Link>
                      </span>
                      <span>
                        <Link>MLB</Link>
                      </span>
                    </div>
                    <div className="foucus_end2-3">
                      <h4 className="title_foucus_end2-3">Sản phẩm tương tự</h4>
                      <div className="title_foucus_end2-3-3">
                        <div>
                          <img
                            className="image_fouter2"
                            src={product.image[0]}
                          />
                        </div>
                        <div>
                          <span className="name_foucus2">{product.name}</span>
                          <br />
                          <div className="custom-price">
                            <span className="price_foucus2">
                              {product.price}
                            </span>
                            <br />
                            <span className="price1-foucus2">
                              {product.price1}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="title_foucus_end2-3-3">
                        <div>
                          <img
                            className="image_fouter2"
                            src={product.image[1]}
                          />
                        </div>
                        <div>
                          <span className="name_foucus2">{product.name}</span>
                          <br />
                          <div className="custom-price">
                            <span className="price_foucus2">
                              {product.price}
                            </span>
                            <br />
                            <span className="price1-foucus2">
                              {product.price1}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="title_foucus_end2-3-3">
                        <div>
                          <img
                            className="image_fouter2"
                            src={product.image[2]}
                          />
                        </div>
                        <div className="informatin-foucus2">
                          <span className="name_foucus2">{product.name}</span>
                          <br />
                          <div className="custom-price">
                            <span className="price_foucus2">
                              {product.price}
                            </span>
                            <br />
                            <span className="price1-foucus2">
                              {product.price1}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="title_foucus_end2-3-3">
                        <div>
                          <img
                            className="image_fouter2"
                            src={product.image[3]}
                          />
                        </div>
                        <div>
                          <span className="name_foucus2">{product.name}</span>
                          <br />
                          <div className="custom-price">
                            <span className="price_foucus2">
                              {product.price}
                            </span>
                            <br />
                            <span className="price1-foucus2">
                              {product.price1}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sice-foucu">
                  <h4 className="title-Motas">
                    Sản phẩm khác của gian hàng Mỹ phẩm Sino
                  </h4>
                </div>
                <SiceXet />
                <Foucus />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductDetails;
