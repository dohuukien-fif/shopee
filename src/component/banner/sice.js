import React, { useEffect } from 'react'
import { useState } from 'react'
import axios  from 'axios'
import Sices from "./siceBanner";
import { useSelector } from 'react-redux';
 function Sice() {
    const [Sice, setSice] = useState([])
    
 const fetchSice = async ()=>{
const response = await axios
.get("https://607ab7e2bd56a60017ba2fe2.mockapi.io/api/sicle")
.catch((err)=>{
    console.log(err)
})
setSice(response.data)

 }
 useEffect(()=>{
    fetchSice()
},[])
    return (
        < >
        <div className="container__sice">
            <div className="container__sice-product">
            <div className="bop">
            <span className="sice-product-size">sản phẩm <strong className="font">bán chạy</strong> </span>
         
                </div>
                <div className="bop">
                <span>Cập nhau sau:</span>
                   
                </div>
            </div>
        <Sices sice={Sice} />
        </div>
        </>
    )
}
export default Sice
