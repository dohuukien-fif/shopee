import React, { Component } from "react";
import Slider from "react-slick";
import {Link} from "react-router-dom"
export default class Responsive extends Component {
  render() {
      var {sice}=this.props;
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [
        {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
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
      <div>
        
<div className="banner_sice">
<Slider {...settings}>
         {sice.map((img,id)=>{
              return(
                <>
               <Link to={`/products/${id}`}>
               <img className="image_banner" src={img.image}/>
               </Link>
                <div className="sice__name-price">
                    <h6 className="sice_name">{img.name}</h6>
                      <span className="sice_price"><strong>{img.price}</strong></span>
                </div>
                </>
              )
               
              
          })}
        </Slider>
</div>
      </div>
    );
  }
}