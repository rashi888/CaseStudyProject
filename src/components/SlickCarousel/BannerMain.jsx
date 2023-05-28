import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../../assets/CarouselImg/1.png'
import image2 from '../../assets/CarouselImg/2.png'
import image3 from '../../assets/CarouselImg/3.png'

export default class BannerMain extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div style={{maxWidth:'1250px',margin:'auto',marginTop:'30px',marginBottom:'50px'}}>
        <Slider {...settings}>
          <div>
            <img src={image1} alt="" height="250px" width="100%"/>
          </div>
          <div>
          <img src={image2} alt="" height="250px" width="100%"/>
          </div>
          <div>
          <img src={image3} alt="" height="250px"width="100%"/>
          </div>
          <div>
          <img src={image1} alt="" height="250px" width="100%"/>
          </div>
          <div>
          <img src={image2} alt="" height="250px" width="100%"/>
          </div>
          <div>
          <img src={image3} alt="" height="250px" width="100%"/>
          </div>
        </Slider>
      </div>
    );
  }
}