import React,{useState,useEffect} from 'react'
import "./information.css"
import FormCart from "./formCart"
import Payload from "./Payload"
import Foucus from "./../component/banner/foucusContent"
import { useHistory } from 'react-router-dom'
export default function Information() {
const [Firename, setFirename] = useState("")
const [lastname, setlastname] = useState("")
const [email, setemail] = useState("")
const [tinh, settinh] = useState("")
const [Quan, setQuan] = useState("")
const [Xa, setXa] = useState("")
const [adrres, setadrres] = useState("")
const [note, setnote] = useState("")
const [friend, setfriend] = useState(false)
const [money, setmoney] = useState(false)
const [Vn, setVn] = useState(false)
const [live, setlive] = useState(false)
const [state, setstate] = useState([])
const history=useHistory()
console.log(tinh)
const addShip=()=>{
    setstate(
        [
            ...state,{
                Firename:Firename,
                lastname:lastname,
                email:email,
                tinh:tinh,
                Quan:Quan,
                Xa:Xa,
                adrres:adrres,
                note:note,
                friend:friend,
                money:money,
                Vn:Vn,
                live:live

            }
        ]
    )
}
const onSubmit = e => {
    e.preventDefault();
    
    if(Firename===""){
        alert("bạn chưa nhập Firename")

    }else if (lastname==="") {
        alert("bạn chưa nhập Lastname")
    } else if(email==="") {
        alert("bạn chưa nhập Email")
    }else if(tinh===""){
        alert("bạn chưa nhập Tỉnh / Thành")
    }else if(Quan===""){
        alert("bạn chưa nhập Quận")
    }else if(Xa===""){
        alert("bạn chưa nhập Xã")
    }else if(adrres===""){
        alert("bạn chưa nhập Địa chỉ")
    }else if(note===""){
        alert("bạn chưa nhập Ghi chú")
    }else if(money===""){
        alert("bạn chưa nhập Ghi chú")
    }else{
     alert("chúc mừng bạn đã đặt hàng thành công")
        addShip(state);
        setFirename("")
        setlastname("")
        setemail("")
        settinh("")
        setQuan("")
        setXa("")
        setadrres("")
        setnote("")
        setfriend(false)
        setmoney(false)
        setVn(false)
        setlive(false)
    }
   
   
  };
  useEffect(() => {
    const locostroe = JSON.parse(localStorage.getItem("SHOP"))
    if(locostroe)setstate(locostroe)
     }, [])
     useEffect(() => {
     localStorage.setItem("SHOP",JSON.stringify(state))
       }, [state])
    return (
   <div>
            <form onSubmit={onSubmit}>
        <div className="information-containers-cart">
        
           <div className="information-11">
            <h5>1.Thông Tin Nhận Hàng</h5>
      <FormCart
        Firename={Firename}
        setFirename={setFirename}
        lastname={lastname}
        setlastname={setlastname}
        email={email}
        setemail={setemail}
        tinh={tinh}
        settinh={settinh}
        Quans={Quan}
        setQuans={setQuan}
        Xas={Xa}
        setXas={setXa}
        adrres={adrres}
        setadrres={setadrres}
        note={note}
        setnote={setnote}
        friend={friend}
        setfriend={setfriend}
        money={money}
        setmoney={setmoney}
        Vn={Vn}
        setVn={setVn}
        live={live}
        setlive={setlive}
      />
       
            </div>
        <div className="information0-22">
            <Payload
             money={money}
             setmoney={setmoney}
             Vn={Vn}
             setVn={setVn}
             live={live}
             setlive={setlive}
            />
            <h5>5.Thanh Toán</h5>

          <button className="btn-cart" type="submit">MUA NGAY</button>
        </div >
          
    
        </div>
        </form>
        <Foucus />
   </div>
        
    )
}
