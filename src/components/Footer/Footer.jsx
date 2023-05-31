import React from "react"
import "./Footer.css"
import oneimg from "../../assets/FooterImg/original.png"
import twoimg from "../../assets/FooterImg/return-policy-icon-17.png"
import threeimg from "../../assets/FooterImg/free.png"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <>
            <header>{/* Content */}</header>
            <main>{/* Content */}</main>
            <footer className="footer">
                <div className="footer__addr">
                    <h1 className="footer__logo">ShopEase</h1>
                    
                    <p style={{margin:'2px',fontWeight:300}}>Facebook</p>
                    <p style={{margin:'2px',fontWeight:300}}>Twitter</p>
                    <p style={{margin:'2px',fontWeight:300}}>Instagram</p>
                    <address style={{marginTop:'10px'}}>
                        only on ShopEase website
                        <br />
                        {/* <Link className="footer__btn" to="mailto:example@gmail.com">
                            Email Us
                        </Link> */}
                    </address>

                    <div className="legal">
                        <p>Copyright © 2023 by Shopease and its affiliates. All rights reserved.</p>
                    </div>
                    <Link to="/msignup" style={{marginLeft:'-20px'}}>Become a Seller</Link>
                </div>
                <div className="footer-content">
                    <div className="store-info"  style={{ width: '300px',height:'330px', padding: '0' }}>
                        <h2 className="nav__title">Store Information</h2>
                        <ul >
                            <li>
                                <Link to="#">About Us</Link>
                            </li>
                            <li>
                                <Link to="#">Customer Service</Link>
                            </li>
                            <li>
                                <Link to="#">Term & Conditions</Link>
                            </li>
                            <li>
                                <Link to="#">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="#">Youtube</Link>
                            </li>
                            <li>
                                <Link to="#">Facebook</Link>
                            </li>
                            <li>
                                <Link to="#">Instagram</Link>
                            </li>
                        </ul>
                    </div>
                   
                    <div className="support" style={{ width: '230px',height:'240px', padding: '0' }}>
                    <h2 className="nav__title">Support</h2>
                        <ul >
                            <li>
                                <Link to="#">Return Policy</Link>
                            </li>
                            <li>
                                <Link to="#">Delivery Info</Link>
                            </li>
                            <li>
                                <Link to="#">Shipping Charges</Link>
                            </li>
                            <li>
                                <Link to="#">Store Locator</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="promises" style={{ width: '420px',height:'250px', padding: '0' }}>
                        <div className="original" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={oneimg} alt="" height="60px" width="60px" />
                            <p style={{ marginTop: '15px', marginLeft: '10px' }}> 100% ORIGINAL guarantee for  all  products at shopease.com</p>
                        </div>
                        <div className="return-policy" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={twoimg} alt="" height="70px" width="70px" />
                            <p style={{ marginTop: '15px', marginLeft: '10px' }}> Return within 30 days of  receiving your order</p>
                        </div>
                        <div className="free-delivery" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={threeimg} alt="" height="70px" width="70px" />
                            <p style={{ marginTop: '15px', marginLeft: '10px' }}> Get free delivery for every order above 799</p>
                        </div>
                    </div>
                </div>
               
            </footer>

        </>

    )
}

export default Footer