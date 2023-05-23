import React from 'react'
import "./Adv1.css";
import Ad4 from "../../assets/AdsImg/Ad4.jpg"
import Ad6 from "../../assets/AdsImg/Ad6.png"
import Ad8 from "../../assets/AdsImg/Ad8.jpg"

const Adv1 = () => {
    return (
        <>
            <div className="filesContainer">
                <img src={Ad4} alt="" />
                <img src={Ad6} alt="" />
                <img src={Ad8} alt="" />
            </div>
        </>
    )
}


export default Adv1