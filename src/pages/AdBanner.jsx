import React from 'react'
import "../styles/AdBanner.css"
import model from "../assets/model.png"
import img1 from "../assets/phone1.webp";

const AdBanner = () => {
    return (
        <div>
            <section className='section'>
                <h2>Welcome to Shopease special offers</h2>
                <div className="ads">
                   <div className="lefty">
                    <img className='img1' src={img1} alt="" />
                    <h1>GET UP TO 60%</h1>
                    <h3>For the summer season</h3>
                   </div>
                   <div className="mid">
                    <h1>GET 30% Off</h1>
                    <h5>USE PROMO CODE</h5>
                    <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
                   </div>
                   <div className="righty">
                   <img className='img1' src={img1} alt="" />
                    <h1>GET UP TO 60%</h1>
                    <h3>For the summer season</h3>
                   </div>
                </div>
            </section>
        </div>
    )
}

export default AdBanner