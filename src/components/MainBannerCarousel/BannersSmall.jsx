import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BannerMain.css"
import img15 from "../../assets/NewBannersImg/img15.jpg"
import img16 from "../../assets/NewBannersImg/img16.jpg"
import img17 from "../../assets/NewBannersImg/img17.jpg"
import img18 from "../../assets/NewBannersImg/img18.png"
import axios from "axios";
import {Link} from "react-router-dom"

import { useNavigate } from "react-router-dom";

const BannersSmall=()=>{
  const navigate = useNavigate();

  const refresh = () => window.location.reload(true)
    
    
  const srch = (search) => (e) => {
    axios.get('http://localhost:8080/api/products/search/' + search,{
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token"),
        }
    })
        .then(response => {
            console.log(response.data);
  
            navigate("/search", { state: { searchdata: response.data } });
            refresh();
  
        })
        .catch(error => {
            console.log(error);
        });
  }
  
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
          <img onClick={srch("echo pop")}  src={img15} alt="" height="280px" width="1250px" />
        </div>
        <div className="carousel1-banner">
          <img  onClick={srch("kitchen storage")} src={img16} alt="" height="280px" width="1250px" />
        </div>
        <Link to={"category/5"} className="carousel1-banner">
          <img  src={img17} alt="" height="280px" width="1250px" />
          </Link>
         <Link to={"category/8"} className="carousel1-banner">
          <img src={img18} alt="" height="250px" width="1250px" />
        </Link>
      </Slider>
    </div>
  );
}
export default BannersSmall