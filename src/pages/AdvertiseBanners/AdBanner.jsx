import React from 'react'
import "./AdBanner.css"
import img1 from "../../assets/PhoneImgs/phone1.webp";

const AdBanner = () => {
    return (
        <div>
            <section className='section' >
                <h2 >Welcome to Shopease special offers</h2>
                <div className="ads" >

                   <div className="lefty" >
                    {/* <img className='img1' src={img1} alt="" /> */}
                    <h4 style={{marginTop:'30px'}}>GET UP TO 60%</h4>
                    <h6>For the summer season</h6>
                   </div>

                   <div className="mid">
                    <h2>GET 30% Off</h2>
                    <h5>USE PROMO CODE</h5>
                    <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
                   </div>

                   <div className="righty">
                   {/* <img className='img1' src={img1} alt="" /> */}
                    <h2>GET UP TO 60%</h2>
                    <h3>For the summer season</h3>
                   </div>
                </div>
            </section>
        </div>
    )
}

export default AdBanner