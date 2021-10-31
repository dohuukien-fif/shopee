import React,{useState,useEffect} from 'react'
import * as yup from 'yup';
import  {Formik}  from 'formik';
import{Form,Row,Col,InputGroup,Button,FloatingLabel}from"react-bootstrap"
import { AiTwotoneCheckCircle } from "react-icons/ai";
import axios from "axios"
const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  username: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zip: yup.string().required(),
  file: yup.mixed().required(),
  terms: yup.bool().required().oneOf([true], 'terms must be accepted'),
});

function FormCart(props) {
  const {Firename,setFirename,lastname,setlastname,email,setemail,tinh,settinh,Quans,setQuans,Xas,setXas,adrres,setadrres,note,setnote,friend,setfriend,money,setmoney,Vn,setVn,live,setlive}=props
  const [Polisst, setPolisst] = useState([])
  const [Quan, setQuan] = useState([])
  const [Xa, setXa] = useState([])
  const Feach = async()=>{
    const response = await axios
    .get("https://dc.tintoc.net/app/api-customer/public/provinces")
    .then(err=>{
      setPolisst(err.data)
    })
  }
  const FeachQuan = async()=>{
    const response = await axios
    .get("https://dc.tintoc.net/app/api-customer/public/districts")
    .then(err=>{
      setQuan(err.data)
    })
  }
  const FeachXa = async()=>{
    const response = await axios
    .get("https://dc.tintoc.net/app/api-customer/public/wards")
    .then(err=>{
      setXa(err.data)
    })
  }
  useEffect(() => {

    Feach()
    FeachQuan()
    FeachXa()
  }, [])
  console.log(Polisst)

    return (
           
        <Form noValidate>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="6"
            controlId="validationFormik101"
            className="position-relative "
          >
            <Form.Label className="form-name">*Họ tên người nhận</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={Firename}
              onChange={(e)=>setFirename(e.target.value)}
              isValid=""
              placeholder="Họ tên người nhận"
            />
            {!Firename||Firename.length<2?<span className="erros">vui lòng nhâp tên người nhận</span>:<span className="currer">Nhập thành công</span>}
            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            md="6"
            controlId="validationFormik102"
            className="position-relative"
          >
            <Form.Label className="form-name">*Điện thoại người nhận</Form.Label>
            <Form.Control
              type="tel"
              name="lastName"
              value={Number(lastname)}
              onChange={(e)=>setlastname(e.target.value)}
              isValid=""
              required
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              placeholder="Điện thoại người nhận"
            />
{!lastname||lastname.length<9?<span className="erros">Vui lòng nhập số điện thoại của bạn</span>:<span className="currer">Nhập thành công</span>}
            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
          </Form.Group>
         
        </Row>
        <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label className="form-name">*Email </Form.Label>
    <Form.Control type="email"required value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Địa chỉ email" />
    {!email||email==="@"?<span className="erros">vui lòng nhâp email của bạn</span>:<span className="currer">Nhập thành công</span>}
 </Form.Group>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="4"
            controlId="validationFormik103"
            className="position-relative"
            placeholder="Địa chỉ email"
          >
           
            <Form.Label className="form-name">*Tỉnh / Thành phố</Form.Label>
            <select value={tinh} onChange={(e)=>settinh(e.target.value)} class="form-select" aria-label="Default select example">
  <option selected> -- Chọn Tỉnh / Thành</option>
{Polisst.map((item,index)=>(
   <option >{item.name} </option>
))}
</select>
{!tinh?<span className="erros">vui lòng chọn Tỉnh / Thành</span>:<span className="currer">Chọn thành công</span>}
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationFormik104"
            className="position-relative"
          >
            <Form.Label className="form-name">*Quận / Huyện</Form.Label>
            <select value={Quans} onChange={(e)=>setQuans(e.target.value)} class="form-select" aria-label="Default select example">
  <option selected> -- Chọn Quận / Huyện</option>
  {Quan.map((item,index)=>(
   <option >{item.name} </option>
))}
</select>
{!Quans?<span className="erros">vui lòng chon Quận / Huyện</span>:<span className="currer">Chọn thành công</span>}
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationFormik105"
            className="position-relative"
          >
            <Form.Label className="form-name">*Xã / Phường</Form.Label>
            <select value={Xas} onChange={(e)=>setXas(e.target.value)} class="form-select" aria-label="Default select example">
  <option selected> -- Chọn Xã / Phường</option>
  {Xa.map((item,index)=>(
   <option >{item.name} </option>
))}
</select>
{!Xas?<span className="erros">vui lòng chọn Xã / Phường</span>:<span className="currer">Chọn thành công</span>}
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="6"
            controlId="validationFormik101"
            className="position-relative "
          >
            <Form.Label className="form-name">*Địa chỉ</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={adrres}
              onChange={(e)=>setadrres(e.target.value)}
              isValid=""
              placeholder="Nhập địa chỉ chính xác của bạn"
            />
            {!adrres?<span className="erros">vui lòng nhâp tên người nhận</span>:<span className="currer">Nhập thành công</span>}
            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            md="6"
            controlId="validationFormik102"
            className="position-relative"
          >
            <Form.Label className="form-name">*Ghi chú giao hàng</Form.Label>
            <select value={note} onChange={(e)=>setnote(e.target.value)} class="form-select" aria-label="Default select example">
  <option selected> Giao trong giờ hành chính</option>
  <option value="1"> Giao trong giờ hành chính</option>
  <option value="2">Đặt hàng hộ người thân</option>
  <option value="3">Ghi chú khác</option>
</select>
          </Form.Group>
          <h5 className="payload-shiper">2.HÌNH THỨC GIAO HÀNG</h5>
          <Form.Group>
    <div className="container-shiper">
    <div className="form-cart">
      <div >
       <div className="kks">
        <AiTwotoneCheckCircle className="icon-shiper" />
       </div>
      </div>
      <div className="gg">
      <span style={{fontWeight:"600",fontSize:"14px"}} >Giao Hàng Tiêu Chuẩn</span><br/>
   <span style={{fontSize:"13px"}}>Miễn phí vận chuyển đối với đơn hàng từ 500.000đ giao tại nội thành Hà Nội, TP Hồ Chí Minh.

Các địa chỉ khác: 30.000đ.</span>
      </div>
    </div>
    </div>
  </Form.Group>
<h5 className="payload-shiper">3. Thông Tin Qua Tặng </h5>
        <Form.Group>
        <div className="checkbox-cart">
        <Form.Check 
    type="switch"
    id="custom-switch"
    label=""
    value={friend}
    onChange={(e)=>setfriend(!friend)}
  />
  <span>Gửi quà tặng đến bạn bè, người thân <strong>(30.000 đ bao gồm phí gói quà và thiệp)</strong></span>
        </div>
        </Form.Group>
        </Row>
        
      </Form>
    )
}
export default FormCart 