import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
  selectedProducts
} from "./../action/actionType";
import { FaStar,FaPlus } from "react-icons/fa";
import {BiCheckSquare } from "react-icons/bi";
import {Link} from "react-router-dom"
import { AiOutlineDoubleRight,AiFillFacebook,AiOutlineTwitter,AiFillInstagram } from "react-icons/ai";
const ProductDetails = () => {
  const product = useSelector((state) => state.product22);
  console.log(product)
  const { id, name, image, price, category,description } = product;
  const {productId} =useParams();
 
        const dispatch = useDispatch();
  const callApi =async (id)=>{
    const response = await axios
    .get(`https://607ab7e2bd56a60017ba2fe2.mockapi.io/api/product/${id}`)
    .catch((err)=>{
      console.log(err)
    })
    dispatch(selectedProduct(response.data))
  }
  useEffect(() => {
   if(productId&&productId !=="")callApi(productId)

  }, [productId])
  return (
    <div className="ui grid containers">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
      <div>

<div className="title-Mota">
        <span>Trang chủ / {product.name}</span>
      </div>
      <div className="container__Mota">
      <div className="containet_fulter">
            
            <div className="container_fulter1">
             
              < img className="image-Mota"  src={product.image}
               
              />
              </div>
              <div  className="container_fulter2">
              <div>
              <span>{product.trademark}</span>
                 <h3 style={{fontWeight:"700"}}>{product.name}</h3>
              </div>
                     
              <div className="fulter3">
              <span ><span className="informas">Xuất xứ :</span>{product.machie}</span>
                 <span className="tranfor"><span className="informas">Danh mục : </span>Son môi</span>
              
                <div>
                  <span><span className="informas" >Đánh giá :</span><FaStar className="icon_m" /> <FaStar className="icon_m"  /> <FaStar className="icon_m"  /> <FaStar className="icon_m"  /> <FaStar className="icon_m"  /> (5) <span>Viết đánh giá</span>  </span>
                </div>
                </div>
               <div className="descriptions">
               <div className="description1">
               <div>
                  <h3 className="price-des"><strong className="price-des">{product.price}</strong></h3>
                  <h5 className="price-dess"><strong className="price-dess">{product.price1}</strong></h5>
                  </div>
                  <div className="information-des">
                    <div >
                    <span ><span className="informas">Giới tính  :</span>Unisex</span>
                      </div><br></br>
                   <div className="informa">
                   <span ><span className="informas">Màu sắc  :</span>{product.machie}</span>
                     </div><br/>
                   <div className="informa">
                   <span ><span className="informas">Xuất xứ  :</span> Anh</span>
                     </div><br/>
                   <div className="informa">
                   <span><span className="informas">Gọi đặt mua :</span> <strong style={{color:"crimson"}}>093.934.8888</strong> (7:30 - 22:00)</span>

                   </div>
                    </div>
                    <div className="see-information">
                      <h6><strong>Xem thông tin chi tiết</strong> <AiOutlineDoubleRight /> </h6>
                    </div>
                    <div className="add">
                      <button className="edit" >THÊM VÀO GIỎ HÀNG</button>
                      <button className="cartss">MUA NGÀY</button>
                    </div> 
                    <div className="share">
                      <span>CHIA SẺ QUA  <AiFillFacebook className="share-icon" /> <AiOutlineTwitter className="share-icon" /> <AiFillInstagram className="share-icon" /> </span>
                      </div>
                 </div>
                      <div className="description2">
                        <div className="dnescriptio2-2">
                             <div className="description2-2_2">
                             <img src="https://vuahanghieu.com/assets/images/shop.svg"/> <span>Mỹ Phẩm Sino</span><br/>
                             <FaStar className="icon_m" /> <FaStar className="icon_m" /> <FaStar className="icon_m" /> <FaStar className="icon_m" /> <FaStar className="icon_m" /> <br/>
                              <img src="https://vuahanghieu.com/assets/images/verify.svg"/><span>Gian hàng đảm bảo</span><br/>
                              <img src="https://vuahanghieu.com/assets/images/phone-call.svg"/><span>093.934.8888</span>
                               </div>
                               <div className="description2-2_3">
                               <img src="https://vuahanghieu.com/assets/images/checkbox.svg" className="icon_des"/><span>miễn phí trả đổi trong 7 ngày <Link>chi tiết</Link> </span><br/>
                                 <img src="https://vuahanghieu.com/assets/images/checkbox.svg" className="icon_des"/><span>Kiểm tra hàng trước khi nhận  </span><br/>
                                 <img src="https://vuahanghieu.com/assets/images/checkbox.svg" className="icon_des"/><span>Hoàn tiền nếu phát hiên hàng giả  </span><br/>
                                  <button className="btn-see">XEM SHOP</button><br/>
                                       <p className="contrac">bạn muốn bán hàng cùng vua hãy ? <Link>đăng kí</Link></p>
                                 </div>
                               </div>
                        </div>
                        </div>
                 </div>
                     
                </div>
                      



        </div>
        </div>
     
     
    
     
      )}
    </div>
  );
};

export default ProductDetails;