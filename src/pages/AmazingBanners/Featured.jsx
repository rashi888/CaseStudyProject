import React from 'react'
import first from "../../assets/Featured brands/fb1.png"
import second from "../../assets/Featured brands/fb2.png"
import third from "../../assets/Featured brands/fb3.png"
import fourth from "../../assets/Featured brands/fb4.png"
import fifth from "../../assets/Featured brands/fb5.png"
import sixth from "../../assets/Featured brands/fb6.png"
import featured from "../../assets/Featured brands/featuredTitle.png"
import "./amazingbanners.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"

function Featured() {

  const navigate = useNavigate();
  const refresh = () => window.location.reload(true)


  const srch = (search) => (e) => {
    axios.get('http://localhost:8080/api/products/search/' + search, {
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
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const navig=(arg)=>{
    navigate("category/"+arg)
}



  return (
    <>
      <div className="featured-container" style={{ margin: '50px auto', padding: '0 3rem' }}>
        <img src={featured} alt="" width="46%" style={{ marginLeft: '28%', marginBottom: '10px' }} />
        <div className="one-img" style={{ display: 'flex', margin: '50px auto', justifyContent: 'space-around' }}>
          <img onClick={srch("campus")} src={third} alt="" height="45%" width="45%" className='imgFearured1' />
          <img onClick={srch("spykar")} src={second} alt="" height="45%" width="45%" className='imgFearured1' />
        </div>
        <div className="two-img" style={{ display: 'flex', margin: '50px 20px', justifyContent: 'space-around' }}>
          <img onClick={srch("Starbucks")} src={fifth} alt="" height="45%" width="45%" className='imgFearured1' />
          <img onClick={srch("casio watch")} src={fourth} alt="" height="45%" width="45%" className='imgFearured1' />
        </div>
        <div className="third-img" style={{ display: 'flex', margin: '50px 20px', justifyContent: 'space-around' }}>
          <img onClick={srch("alexa speaker")} src={first} alt="" height="45%" width="45%" className='imgFearured1' />
          <img onClick={srch("skinn titan")} src={sixth} alt="" height="45%" width="45%" className='imgFearured1' />
        </div>
      </div>
    </>
  )
}

export default Featured