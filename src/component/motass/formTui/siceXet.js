import React, { Component } from "react";
import Slider from "react-slick";
import {SiceImage} from "./dataSice"
export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="sice-Motas">
      
        <Slider {...settings}>
         {
             SiceImage.map((img,index)=>{
                 return <div className="slice-img">
                 <img className="img-sicexet" src={img.image}/>
                <div className="name-sice">
                <span className="name-sice">{img.name}</span>
                </div>
                 <div>
                     <span className="sice-price">{img.price}</span>
                     <span className="sice-price2">{img.price1}</span>
                 </div>
                 </div>
             })

         }
        </Slider>
      </div>
    );
  }
}