import React from 'react'
import img14 from "../../assets/NewBannersImg/img14.png"
import { Link, useNavigate } from "react-router-dom"

function MsignBanner() {

    const navigate =useNavigate();

    const handleClick = () => {
        navigate('/new-route');
        window.scrollTo(0, 0); // Scroll to the top of the page
      };


    return (
        <>
            <div className="msign-banner" >
            <Link to="/msignup" onClick={handleClick} > <img src={img14} alt="" height="95%" width="95%" style={{margin:'40px auto'}} /></Link>
            </div>
        </>
    )
}

export default MsignBanner