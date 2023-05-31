import React from "react"
import "./Footer.css"
import {Link} from "react-router-dom"

const Footer = () => {
    return (
        <>
            <header>{/* Content */}</header>
            <main>{/* Content */}</main>
            <footer className="footer">
                <div className="footer__addr">
                    <h1 className="footer__logo">ShopEase</h1>
                    <h2>Contact</h2>
                    <address>
                        5534 Somewhere In. The World 22193-10212
                        <br />
                        {/* <Link className="footer__btn" to="mailto:example@gmail.com">
                            Email Us
                        </Link> */}
                    </address>

                    <div className="legal">
                        <p>Copyright © 2023 by Shopease and its affiliates. All rights reserved.</p>
                    </div>
                </div>
                <div className="footer-content">
                    <div className="store-info">
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
                        </ul>
                    </div>
                    <div className="support">
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
                    <div className="connect">
                        <h2 className="nav__title">Connect</h2>
                        <ul >
                            <li>
                                <Link to="#">Youtube</Link>
                            </li>
                            <li>
                                <Link to="#">Facebook</Link>
                            </li>
                            <li>
                                <Link to="#">Instagram</Link>
                            </li>
                            <li>
                                <Link to="#">RSS Feeds</Link>
                            </li>
                            <li>
                                <Link to="#">From the Blog</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>

        </>

    )
}

export default Footer