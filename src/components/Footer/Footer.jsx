import React from "react"
import "./Footer.css"
import oneimg from "../../assets/FooterImg/original.png"
import twoimg from "../../assets/FooterImg/return-policy-icon-17.png"
import threeimg from "../../assets/FooterImg/free.png"
import { Link, useNavigate } from "react-router-dom"
import logoo from "../../assets/NavbarImg/ShopEaseLogo1.png"

const Footer = () => {
    const navigate =useNavigate();

    const handleClick = () => {
        navigate('/new-route');
        window.scrollTo(0, 0); // Scroll to the top of the page
      };

    return (
        <>
            <header>{/* Content */}</header>
            <main>{/* Content */}</main>
            <footer className="footer">


                <div className="footer__addr">
                    <img src={logoo} alt="" style={{ height: '58px', width: '210px', marginBottom: '-10px' }} />

                    <div className="legal" style={{ marginTop: '35px' }}>
                        <p>Copyright © 2023 by Shopease and its affiliates. All rights reserved.</p>
                    </div>
                    <div className="become-seller" >
                    <p style={{ fontSize: '22px', color: '#54b9c4', fontWeight: 700, marginTop: '10px' }}>BECOME A SELLER</p>
                    <p style={{ marginTop: '-13px', fontWeight: 400, fontSize: '14px' }}>REACH MORE CUSTOMERS</p>
                    <Link to="/msignup" ><button className="btn-merchant-signup" onClick={handleClick}>Sign Up Now</button> </Link>
                    </div>
                </div>
                <div className="line1"></div>
                <div className="support" style={{ width: '400px', height: '250px', padding: '0', marginTop: '35px',marginLeft:'15px' }}>
                    <h2 className="nav__title">Useful Links</h2>
                    <div className="lists-list" style={{ display: 'flex' }}>
                        <div className="list1-list">
                            <ul>
                                <li>
                                    <Link to="/aboutus"> <button className="btn-to-top" onClick={handleClick}>About Us</button> </Link>
                                </li>
                                <li>
                                    <Link to="/returnpolicy"><button className="btn-to-top" onClick={handleClick}>Return Policy</button> </Link>
                                </li></ul>
                        </div>
                        <div className="list1-list">
                            <ul> <li>
                                <Link to="/termsandconditions"> <button className="btn-to-top" onClick={handleClick}>Term & Conditions</button> </Link>
                            </li>
                                <li>
                                    <Link to="/faq"> <button className="btn-to-top" onClick={handleClick}>FAQs</button> </Link>
                                </li></ul>
                        </div>

                    </div>
                    <div className="contact-us-div">
                        <h2 className="nav__title" style={{marginLeft:'93px',marginBottom:'20px'}} >Contact Us</h2>
                        <p style={{ marginLeft: '18px', marginTop: '15px' }}>Toll Free: 1800 1234 1234</p>
                        <p style={{ marginLeft: '18px', marginTop: '15px' }}>Mail Us at: customerservice@shopease.com</p>
                    </div>
                </div>

                <div className="line1"></div>
                <div className="promises" style={{ width: '350px', height: '250px', padding: '0' }}>
                    <div className="original" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={oneimg} alt="" height="60px" width="60px" />
                        <p style={{ marginTop: '15px', marginLeft: '10px' }}> 100% ORIGINAL guarantee for  all  products at shopease.com</p>
                    </div>
                    <div className="return-policy" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={twoimg} alt="" height="70px" width="70px" />
                        <p style={{ marginTop: '15px', marginLeft: '10px' }}> Return within 15 days of  receiving your order</p>
                    </div>
                    <div className="free-delivery" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={threeimg} alt="" height="70px" width="70px" />
                        <p style={{ marginTop: '15px', marginLeft: '10px' }}> Get free delivery for every order above 499</p>
                    </div>
                </div>

               

            </footer>

        </>

    )
}

export default Footer