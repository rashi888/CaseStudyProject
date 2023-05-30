import React from "react"
import "./Footer.css"

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
                        <a className="footer__btn" href="mailto:example@gmail.com">
                            Email Us
                        </a>
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
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Customer Service</a>
                            </li>
                            <li>
                                <a href="#">Term & Conditions</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div className="support">
                        <h2 className="nav__title">Support</h2>
                        <ul >
                            <li>
                                <a href="#">Return Policy</a>
                            </li>
                            <li>
                                <a href="#">Delivery Info</a>
                            </li>
                            <li>
                                <a href="#">Shipping Charges</a>
                            </li>
                            <li>
                                <a href="#">Store Locator</a>
                            </li>
                        </ul>
                    </div>
                    <div className="connect">
                        <h2 className="nav__title">Connect</h2>
                        <ul >
                            <li>
                                <a href="#">Youtube</a>
                            </li>
                            <li>
                                <a href="#">Facebook</a>
                            </li>
                            <li>
                                <a href="#">Instagram</a>
                            </li>
                            <li>
                                <a href="#">RSS Feeds</a>
                            </li>
                            <li>
                                <a href="#">From the Blog</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>

        </>

    )
}

export default Footer
