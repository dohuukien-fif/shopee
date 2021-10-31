import React from 'react'
import{Form,Row,Col,InputGroup,Button,FloatingLabel}from"react-bootstrap"

export default function Payload(props) {
const {money,setmoney,Vn,setVn,live,setlive}=props
    return (
        <div>
              <h5>4.Phương Thức Thanh Toán</h5>
        <div className="boder-payload" >
          
       <div className="payload-container_fulter">
       <Form>

{['checkbox'].map((type) => (
  <div key={`default-${type}`} className="mb-3">
    <div className="check-carts">
    <Form.Check 
      type={type}
      id={`default-${type}`}
  value={money}
  onChange={(e)=>setmoney(!money)}
      
    />
   <div className="payload-checkbox">
   <span className="payload-money">Thanh Toán Nhận Hàng</span><br/>
    <span className="payload-moneys">Quý khách sẽ thanh toán bằng tiền mặt khi nhận hàng</span>
   </div>
    </div>
    <div className="check-carts">
    <Form.Check 
      type={type}
      id={`default-${type}`}
      value={Vn}
      onChange={(e)=>setVn(!Vn)}
      
    />
   <div className="payload-checkbox">
   <span className="payload-money" >Thanh Toán Trực Tuyến</span><br/>
    <span className="payload-moneys">Thanh toán qua cổng VNPay</span>
   </div>
    </div>
    <div className="check-carts">
    <Form.Check 
      type={type}
      id={`default-${type}`}
      value={live}
      onChange={(e)=>setlive(!live)}
      
    />
   <div className="payload-checkbox">
   <span className="payload-money">Thanh Toán Bằng Chuyển Khoản</span><br/>
    <span className="payload-moneys">Chuyển khoản trực tiếp đến tài khoản của Vua Hàng Hiệus</span>
   </div>
    </div>

   
  </div>
))}

</Form>
       </div>
        </div>
                
        </div>
    )
}
