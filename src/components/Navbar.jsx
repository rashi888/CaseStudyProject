import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { FaUser } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa'
import '../styles/Navbar.css';
import { BiSearch } from 'react-icons/bi'
// import Navy from './Navy';

const Navbar = () => {
    return (
        <>
            <div className="header navbar px-5 " >
                <div className="logo">
                    <Link to="/home">  <img src={logo} alt="" className='logo' /></Link>
                </div>
                <div className="searchBar" >
                    <input class="inputSearch form-control mr-sm-2" type="search" placeholder="Items to Search..." aria-label="Search" />
                    <div className="searchIcon"><BiSearch /></div>
                </div>

                <div className="icons" >
                    <Link to="/login">  <div className="login text-center" id='login' ><FaUser /></div></Link>
                    <Link to="/cart"> <div className="cart" id="cart" ><FaShoppingBag /></div></Link>
                </div>
            </div>

        </>
    );
}

export default Navbar;