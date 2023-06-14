import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BannerMain.css"
import gifBanner1 from "../../assets/BannerGifs/adbannergif.gif"
import gifBanner2 from "../../assets/BannerGifs/End of season.gif"
import gifBanner3 from "../../assets/BannerGifs/img3banner.png"
import gifBanner4 from "../../assets/BannerGifs/img4banner.png"
import gifBanner5 from "../../assets/BannerGifs/img5banner.png"
import gifBanner6 from "../../assets/BannerGifs/Only at.png"
import gifBanner7 from "../../assets/BannerGifs/skincare.png"

export default class BannerMain extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true, 
      autoplaySpeed: 3000,
    };
    return (
      <div style={{ margin: 'auto', marginBottom: '50px', marginTop: '20px' }}>
        <Slider {...settings}>
          <div className="carousel1-banner">
            <img src={gifBanner1} height="250px" width="1250px" />
          </div>
          <div className="carousel1-banner">
            <img src={gifBanner4} height="250px" width="1250px" />
          </div>
          <div className="carousel1-banner">
            <img src={gifBanner2} height="250px" width="1250px" />
          </div>
          <div className="carousel1-banner">
            <img src={gifBanner7} height="250px" width="1250px" />
          </div>
          <div className="carousel1-banner">
            <img src={gifBanner3}  height="250px" width="1250px" />
          </div>
          <div className="carousel1-banner">
            <img src={gifBanner6} height="250px" width="1250px" />
          </div>
          <div className="carousel1-banner">
            <img src={gifBanner5} height="250px" width="1250px" />
          </div>
        </Slider>
      </div>
    );
  }
}