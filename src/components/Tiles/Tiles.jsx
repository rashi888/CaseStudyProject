import React from 'react'
import "./Tiles.css"
import electro from "../../assets/NavyImages/Electronics.webp"
import home from "../../assets/NavyImages/Home.webp"
import img11 from "../../assets/NewBannersImg/img11.jpg"

function Tiles() {
  return (
    <>
    <div className="tiles-container">
        <div className="box-num1">
          <h5>Upto 70% off | Kitchen appliances from shops near you</h5>
          <div className="section1">
            <div className="img-content">
              <img src={electro} alt="" height="85px" width="85px"/>
              <p>Air Frier</p>
            </div>
            <div className="img-content">
              <img src={home} alt="" height="85px" width="85px"/>
              <p>Mixer</p>
            </div>
          </div>
          <div className="section2">
            <div className="img-content">
              <img src={electro} alt="" height="90px" width="90px"/>
              <p>Air Frier</p>
            </div>
            <div className="img-content">
              <img src={home} alt="" height="90px" width="90px"/>
              <p>Mixer</p>
            </div>
          </div>
          <a href="" style={{marginLeft:'-15px'}}>See all offers</a>
        </div>
        <div className="box-num2">
          <h4>You might also like</h4>
          <img src={electro} alt="" height="135px" width="135px"/>
          <p>Silver; Material: Stainless Steel; Package Content: 1 - Piece Super Water Bottle (475 ml); Dimension in cms (L x W x H): 6.7 x 6.7 x 19.5)</p>
         <div className="price-tag" style={{display:'flex'}}>
         <h5 style={{margin:'0px 10px'}}> ₹812 </h5> <p>M.R.P <del>₹1015.00</del></p></div> 
          <div className="img-collection">
            <img src={home} alt="" height="60px" width="60px"/>
            <img src={home} alt="" height="60px" width="60px"/>
            <img src={home} alt="" height="60px" width="60px"/>
          </div>
        </div>
        <div className="box-num3">
          <h4>Explore More</h4>
          <div className="section3">
            <div className="img-content">
              <img src={electro} alt="" height="90px" width="90px"/>
              <p>Air Frier</p>
              <h6 style={{marginTop:'-10px'}}>₹809</h6>
            </div>
            <div className="img-content">
              <img src={home} alt="" height="90px" width="90px"/>
              <p>Mixer</p>
              <h6 style={{marginTop:'-10px'}}>₹899</h6>
            </div>
          </div>
          <div className="section4">
            <div className="img-content">
              <img src={electro} alt="" height="90px" width="90px"/>
              <p>Air Frier</p>
              <h6 style={{marginTop:'-10px'}}>₹599</h6>
            </div>
            <div className="img-content">
              <img src={home} alt="" height="90px" width="90px"/>
              <p>Mixer</p>
              <h6 style={{marginTop:'-10px'}}>₹629</h6>
            </div>
          </div>
          <a href="" style={{marginLeft:'-15px'}}>See all offers</a>

        </div>
        <div className="box-num4" style={{backgroundColor:'white',margin:'0',padding:'0'}}>

        <img src={img11} alt="" height="80%"  width="100%" style={{backgroundColor:'white',borderRadius:'5px',margin:'35px 0',padding:'10px 0'}}/>
        </div>
        {/* <div className="box-num4" style={{padding:'0px',margin:'0px'}}>
          <img src={img11} alt="" height="90%" width="90%"/>
        </div> */}
        {/* <div className="box-num4">
        <h4>More Items to consider</h4>
          <img src={electro} alt="" height="135px" width="135px"/>
          <p>Silver; Material: Stainless Steel; Package Content: 1 - Piece Super Water Bottle (475 ml); Dimension in cms (L x W x H): 6.7 x 6.7 x 19.5)</p>
         <div className="price-tag" style={{display:'flex'}}>
         <h5 style={{margin:'0px 10px'}}> ₹3999 </h5> <p>M.R.P <del>₹74599.00</del></p></div> 
          <div className="img-collection">
            <img src={home} alt="" height="60px" width="60px"/>
            <img src={home} alt="" height="60px" width="60px"/>
            <img src={home} alt="" height="60px" width="60px"/>
          </div>
        </div> */}
    </div>
    </>
  )
}

export default Tiles