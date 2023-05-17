import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div>
        
      <div className="header navbar  ">
        <div className="logo">

          <Link to="/"> 
          <img src={logo} alt="" className="logo" />
          </Link>
        </div>
        <div className="searchBar">
          <input
            className="inputSearch form-control mr-sm-2"
            type="search"
            placeholder="Items to Search..."
            aria-label="Search"
          />
          <div className="searchIcon">
            <BiSearch />
          </div>
        </div>

        <div className="icons">
          <Link to="/login">
            {" "}
            <div className="login text-center" id="login">
              <FaUser />
            </div>
          </Link>
          <Link to="/">
            {" "}
            <div className="cart" id="cart">
              <FaShoppingBag />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
