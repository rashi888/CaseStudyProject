import React from 'react'
import "./Adv2.css";
import Ad1 from "../../assets/AdsImg/Ad1.png"
import Ad3 from "../../assets/AdsImg/Ad3.jpg"
import Ad7 from "../../assets/AdsImg/Ad7.jpg"

const Adv1 = () => {
    return (
        <>
            <div className="filesContainer">
                <img src={Ad1} alt="" />
                <img src={Ad3} alt="" />
                <img src={Ad7} alt="" />
            </div>
        </>
    )
}


export default Adv1