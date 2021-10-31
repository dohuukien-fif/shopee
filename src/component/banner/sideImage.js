import React from 'react'
import {sideImage} from "./data/side"
import {useState} from "react"
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa';
const SideImage=({side})=> {
     const [current, setcurrent] = useState(0)
     const length = side.length;
     const nextSide =()=>{
         setcurrent(current=== length-1?0:current+1)
     }
     const prevSide =()=>{
        setcurrent(current=== 0?length-1:current-1)
    }
    return (
        <div>
            <div className="side__image">
                    <div className="side__image1">
                    <FaArrowAltCircleLeft className="left-arow"  onClick={prevSide}/>
                    <FaArrowAltCircleRight className="right-arow" onClick={nextSide} />
                    {sideImage.map((side,index)=>{
                        
            return(
                <div key={index}>
                    {index === current && (    <div> <img  src={side.image} alt='travel image' className="sideimg"/>
                 
                      </div>)}
           
            </div>
            )
                   
              })}
             
                    </div>
                    <div className="side__image2">
                          <img src="./img/banner1.jpg"></img>
                          <img className="side__image2-img" src="./img/banner2.jpg"></img>
                         </div>
            </div>
           
        </div>
    )
}
export default SideImage
