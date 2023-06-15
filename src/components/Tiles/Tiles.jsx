import React from 'react'
import "./Tiles.css"
import electro from "../../assets/NavyImages/Electronics.webp"
import home from "../../assets/NavyImages/Home.webp"
import img11 from "../../assets/NewBannersImg/img11.jpg"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"
import sec from "../../assets/AdsImg/youmight.jpg"
import lap1 from '../../assets/LaptopImg/1img.jpg'
import lap2 from '../../assets/LaptopImg/2img.jpg'
import lap3 from '../../assets/LaptopImg/3img.jpg'
import lap4 from '../../assets/LaptopImg/4img.jpg'
import beauty1 from "../../assets/LaptopImg/beauty2.jpg"
import beauty2 from "../../assets/LaptopImg/beauty1.jpg"
import beauty3 from "../../assets/LaptopImg/beauty3.jpg"
import beauty4 from "../../assets/LaptopImg/beauty4.jpg"
import beauty5 from "../../assets/LaptopImg/beauty5.jpg"

function Tiles() {


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

  return (
    <>
      <div className="tiles-container">
        <div className="box-num1">
          <h5>Specs you need</h5>
          <div className="section1">
            <div className="img-content" style={{ paddingRight: '40px' }}>
              <img onClick={srch("HP Pavilion Plus")} src={lap1} alt="" height="100px" width="100px" />
              <p style={{ fontSize: '15px' }}>HP Pavilion Plus...</p>
            </div>
            <div className="img-content" style={{ marginTop: '-12px' }}>
              <img onClick={srch("dell")} src={lap2} alt="" height="110px" width="110px" />
              <p style={{ fontSize: '15px' }}>Dell Vostro 3510 Laptop...</p>
            </div>
          </div>
          <div className="section2" style={{ marginTop: '-20px' }}>
            <div className="img-content" style={{ padding: '0px' }}>
              <img onClick={srch("ideapad")} src={lap3} alt="" height="100px" width="100px" />
              <p style={{ fontSize: '15px' }}>Lenovo IdeaPad Slim 3 Intel...</p>
            </div>
            <div className="img-content" style={{ padding: '0px' }}>
              <img onClick={srch("acer")} src={lap4} alt="" height="110px" width="110px" />
              <p style={{ fontSize: '15px' }}> Acer Swift X AMD Ryzen...</p>
            </div>
          </div>
          {/* <a href="" style={{ marginLeft: '-15px' }}>See all offers</a> */}
        </div>
        <div className="box-num2">
          <h4>You might also like</h4>
          <img onClick={srch("iphone 14 yellow")} src={sec} height="80%" width="100%" style={{ backgroundColor: 'white', borderRadius: '5px', margin: '35px 0', padding: '10px 0' }} />
        </div>


        <div className="box-num3" style={{ padding: '15px', }}>
          <h5>Explore more from across the store</h5>
          <img onClick={srch("Salicylic")}  src={beauty1} height="47%" style={{ paddingLeft: '45px' }} />
          <p style={{fontSize:'14px'}}>
            Minimalist 2% Salicylic Acid Face Wash For Oily Skin...</p>
          <div className="images-contain" style={{marginTop:'-10px',marginRight:'5px',display:'flex',justifyContent:'space-between'}}>
            <img onClick={srch("professionnel")}  src={beauty2} height="70px" width="70px" style={{border:'1px solid lightgray'}}/>
            <img onClick={srch("perfora")}  src={beauty3} height="70px" width="70px" style={{border:'1px solid lightgray'}}/>
            <img onClick={srch("raw essentials")}  src={beauty4} height="70px" width="70px" style={{border:'1px solid lightgray'}}/>
            <img onClick={srch("Salicylic")}  src={beauty5} height="70px" width="70px" style={{border:'1px solid lightgray'}}/>
          </div>
          {/* <div className="section3">
            <div className="img-content">
              <img src={electro} alt="" height="90px" width="90px" />
              <p>Air Frier</p>
              <h6 style={{ marginTop: '-10px' }}>₹809</h6>
            </div>
            <div className="img-content">
              <img src={home} alt="" height="90px" width="90px" />
              <p>Mixer</p>
              <h6 style={{ marginTop: '-10px' }}>₹899</h6>
            </div>
          </div> */}



          {/* <div className="section4">
            <div className="img-content">
              <img src={electro} alt="" height="90px" width="90px" />
              <p>Air Frier</p>
              <h6 style={{ marginTop: '-10px' }}>₹599</h6>
            </div>
            <div className="img-content">
              <img src={home} alt="" height="90px" width="90px" />
              <p>Mixer</p>
              <h6 style={{ marginTop: '-10px' }}>₹629</h6>
            </div>
          </div>
          <a href="" style={{ marginLeft: '-15px' }}>See all offers</a> */}

        </div>
        <div className="box-num4" style={{ backgroundColor: 'white', margin: '0', padding: '0' }}>

          <img onClick={srch("iphone 14 yellow")} src={img11} height="80%" width="100%" style={{ backgroundColor: 'white', borderRadius: '5px', margin: '35px 0', padding: '10px 0' }} />
        </div>
      </div>
    </>
  )
}

export default Tiles