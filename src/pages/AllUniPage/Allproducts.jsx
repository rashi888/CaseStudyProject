import React from 'react'
import "./Allproducts.css"
import icon from "../../assets/All_Icons/user icon.png"
// import img from "../../assets/MSignupImg/msignup.jpg"
import img from "../../assets/PhoneImgs/phone1.webp"

function Allproducts() {
  return (
    <>
      <div className="universal-page">
        <h2 style={{marginBottom:'20px',padding:'10px'}}>All Products</h2>
        <div className="card-1">
          <div className="img-1">
            <img src={img} alt="" height="200px"/>
          </div>
          <div className="content-1">
            <h4 style={{margin:'0'}} >vivo T2x 5G (Marine Blue, 128 GB)  (4 GB RAM)</h4>
            <p style={{margin:'5px 0px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <h2 style={{margin:'5px 0px'}}>₹ <span>12000</span></h2>
           
          </div>
        </div>
        <div className="card-1">
          <div className="img-1">
            <img src={img} alt="" height="200px"/>
          </div>
          <div className="content-1">
            <h4 style={{margin:'0'}} >vivo T2x 5G (Marine Blue, 128 GB)  (4 GB RAM)</h4>
            <p style={{margin:'5px 0px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <h2 style={{margin:'5px 0px'}}>₹ <span>12000</span></h2>
           
          </div>
        </div>
     

      </div>
    </>
  )
}

export default Allproducts