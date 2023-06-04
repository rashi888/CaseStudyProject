import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BannerMain.css"
import img10 from "../../assets/NewBannersImg/img10.png"
import img15 from "../../assets/NewBannersImg/img15.jpg"
import img16 from "../../assets/NewBannersImg/img16.jpg"
import img17 from "../../assets/NewBannersImg/img17.jpg"
import img18 from "../../assets/NewBannersImg/img18.png"

export default class BannersSmall extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true, // Enable automatic transitions
      autoplaySpeed: 3000,// Set the transition interval in milliseconds
    };
    return (
      <div style={{ margin: 'auto', marginBottom: '50px', marginTop: '20px' }}>
        <Slider {...settings}>
          <div className="carousel1-banner">
            <img src={img15} alt="" height="280px" width="1250px" />
          </div>
          <div className="carousel1-banner">
            <img src={img16} alt="" height="280px" width="1250px" />
          </div>
          <div className="carousel1-banner">
            <img src={img17} alt="" height="280px" width="1250px" />
          </div>
          <div className="carousel1-banner">
            <img src={img18} alt="" height="250px" width="1250px" />
          </div>
          {/* <div className="carousel1-banner">
            <img src={img10} alt="" height="250px" width="1250px" />
          </div> */}
          {/* <div className="carousel1-banner">
            <img src={gifBanner6} alt="" height="250px" width="1250px" />
          </div>
          <div className="carousel1-banner">
            <img src={gifBanner5} alt="" height="250px" width="1250px" />
          </div> */}
        </Slider>
      </div>
    );
  }
}