import React from 'react'
import banner1 from "../assets/1.jpg"
import banner2 from "../assets/2.jpg"
import banner3 from "../assets/3.jpg"
import "../styles/Advs.css";

const Advs = () => {
    return (
        <>
            <div className="containbanners">
                <img src={banner1} alt="" />
                <img src={banner2} alt="" />
                <img src={banner3} alt="" />
            </div>
        </>
    )
}

export default Advs