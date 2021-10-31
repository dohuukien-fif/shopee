import React, { Component } from "react";
import Slider from "react-slick";
import {SiceImage} from "./dataSice/datasice"
export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 8,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
    return (
      <div className='sice-watch'>
     
        <Slider {...settings}>
   
      {SiceImage.map((img,index)=>{
            return(
              
             
             <div>
                  <img className="sice_image" src={img.image}/>
             </div>
              
              
            )
        })}
     
        </Slider>
      </div>
    );
  }
}