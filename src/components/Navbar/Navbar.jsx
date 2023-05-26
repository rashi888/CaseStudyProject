import React from "react";
// import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
// import { FaUser } from "react-icons/fa";
// import { FaShoppingBag } from "react-icons/fa";
import "./Navbar.css";
// import profile from "../../assets/NavbarImg/profile.png";
// import carts from "../../assets/NavbarImg/cart1.png";
// import logoo from "../../assets/NavbarImg/logoo.png";

import profile from "../../assets/All_Icons/user.png"
import carts from "../../assets/All_Icons/carty.png"
// import logoo from "../../assets/NavbarImg/ShopEase1.png"
import logoo from "../../assets/NavbarImg/log.jpg"

const Navbar = () => {
    return (
        <div>

            <div className="navbars  ">
                <div className="logos">

                    <Link to="/home">
                        {/* <img src={logo} alt="" className="logo" /> */}
                        <img src={logoo} alt="" className="logo" />
                    </Link>
                </div>
                <div className="searchBars">
                    <input
                        className="inputSearchs"
                        type="search"
                        placeholder="Items to Search..."
                        aria-label="Search"
                    />
                    <div className="searchIcons">
                        <BiSearch />
                    </div>
                </div>

                <div className="icons"  >
                    <div className="profilediv" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
                        <p style={{ color: 'white', padding: '15px 0px 0px 0px' }}> Profile</p>
                        <Link to="/login">
                            <img className="profileimg" src={profile} alt="" />
                            <div className="profile">
                                <h6>My Profile</h6>
                                <h6>LogOut</h6>
                            </div>
                        </Link>
                    </div>


                    <div className="cartdiv" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
                        <p style={{ color: 'white', padding: '15px 0px 0px 0px' }}>Cart</p>
                        <Link to="/cart">
                            <img className="cartimg" src={carts} alt="" />
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;
