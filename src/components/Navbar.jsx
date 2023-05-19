import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import "../styles/Navbar.css";
import profile from "../assets/profile.png";
import carts from "../assets/cart1.png";

const Navbar = () => {
  return (
    <div>
        
      <div className="navbars  ">
        <div className="logos">

          <Link to="/home"> 
          <img src={logo} alt="" className="logo" />
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

        <div className="icons">
          <Link to="/login">
            <img src={profile} alt="" />
            
          </Link>
          <Link to="/">
          <img src={carts} alt="" />

          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
