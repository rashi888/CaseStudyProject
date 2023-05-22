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
                </div>
                <ul className="footer__nav">
                    <li className="nav__item">
                        <h2 className="nav__title">Store Information</h2>
                        <ul className="nav__ul">
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
                    </li>
                    <li className="nav__item nav__item--extra">
                        <h2 className="nav__title">Support</h2>
                        <ul className="nav__ul nav__ul--extra">
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
                    </li>
                    <li className="nav__item">
                        <h2 className="nav__title">Connect</h2>
                        <ul className="nav__ul">
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
                    </li>
                </ul>
                <div className="legal">
                    <p>Copyright © 2023 by Shopease and its affiliates. All rights reserved.</p>
                    {/* <div className="legal__links">
        <span>
          Made with <span className="heart">♥</span> remotely from Anywhere
        </span>
      </div> */}
                </div>
            </footer>
        </>

    )
}

export default Footer
