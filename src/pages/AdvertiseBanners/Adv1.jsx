import React from 'react'
import "./Adv1.css";
import Ad2 from "../../assets/AdsImg/Ad2.jpg"
import Ad5 from "../../assets/AdsImg/Ad5.jpg"
import Ad9 from "../../assets/AdsImg/Ad9.jpg"

const Adv1 = () => {
  return (
    <>
      <div className="filesContainer">
        <img src={Ad2} alt="" />
        <img src={Ad5} alt="" />
        <img src={Ad9} alt="" />
        {/* <div className="img1-ad">  <img src={Ad2} alt="" /></div>
      <div className="img2-ad"> <img src={Ad5} alt="" /></div>
      <div className="img3-ad"> <img src={Ad9} alt="" /></div> */}
      </div>
    </>
  )
}


export default Adv1