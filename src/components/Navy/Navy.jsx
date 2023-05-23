import React from 'react'
import './Navy.css'
import { Link } from "react-router-dom"

import AllCategory from "../../assets/NavyImages/All-category2.png"
import Grocery from "../../assets/NavyImages/Grocery.webp"
import Mobile from "../../assets/NavyImages/Mobile.webp"
import Fashion from "../../assets/NavyImages/Fashion.webp"
import Electronics from "../../assets/NavyImages/Electronics.webp"
import Home from "../../assets/NavyImages/Home1.png"
import Beauty from "../../assets/NavyImages/Beauty 2.png"

function Navy() {
    return (
        <>
            <div>

                <link to="https://fonts.googleapis.com/css?family=Rubik&display=swap" rel="stylesheet" />
                {/* call to action */}
                {/* nav navigation commerce */}
                <div className="nav-container" style={{ marginTop: '15%', marginBottom: '-2%', zIndex: 17 }}>
                    <nav className="all-category-nav">

                        <label className="open-menu-all" htmlFor="open-menu-all">
                            <input className="input-menu-all" id="open-menu-all" type="checkbox" name="menu-open" />
                            <span className="all-navigator" style={{ textDecoration: 'none' }}><i className="fas fa-bars" /> <span>All category</span> <i className="fas fa-angle-down" />
                                <i className="fas fa-angle-up" />
                            </span>
                            

                            {/* <input className="input-menu-all" id="open-menu-all" type="checkbox" name="menu-open" />
                            <span className="all-navigator" style={{ textDecoration: 'none' }}> <img src={AllCategory} height='50px' width='50px' /> <span>All category</span> <i className="fas fa-angle-down" />
                                <i className="fas fa-angle-up" />
                            </span> */}
                            

                            <ul className="all-category-list">
                                <li className="all-category-list-item" ><Link to="/mobiles" className="all-category-list-link" style={{ textDecoration: 'none', color: 'gray' }}>Smartphones<i className="fas fa-angle-right" /></Link>
                                    <div className="category-second-list">
                                        <ul className="category-second-list-ul">
                                            <li className="category-second-item"><Link to="">Iphone 10</Link></li>
                                            <li className="category-second-item"><Link to="">Galaxy Note 10</Link></li>
                                            <li className="category-second-item"><Link to="">Motorola One </Link></li>
                                            <li className="category-second-item"><Link to="">Galaxy A80 </Link></li>
                                            <li className="category-second-item"><Link to="">Galaxy M </Link></li>
                                            <li className="category-second-item"><Link to="">Huaway P30 </Link></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="all-category-list-item"><Link to="" className="all-category-list-link">Furniture <i className="fas fa-angle-right" /></Link></li>
                                <li className="all-category-list-item"><Link to="" className="all-category-list-link">Toys<i className="fas fa-angle-right" /></Link></li>
                                <li className="all-category-list-item"><Link to="" className="all-category-list-link">Computing<i className="fas fa-angle-right" /></Link></li>
                                <li className="all-category-list-item"><Link to="" className="all-category-list-link" >Games<i className="fas fa-angle-right" /></Link></li>
                                <li className="all-category-list-item"><Link to="" className="all-category-list-link" >Automotive<i className="fas fa-angle-right" /></Link></li>
                            </ul>
                            
                        </label>
                    </nav>


                    <nav className="featured-category">
                        <ul className="nav-row">
                            <div className="category1">
                                <img src={Grocery} alt="" />
                                <li className="nav-row-list"><Link to="" className="nav-row-list-link" >Grocery</Link></li>
                            </div>
                            <div className="category1">
                                <img src={Mobile} alt="" />
                                <li className="nav-row-list"><Link to="" className="nav-row-list-link" >Mobile</Link></li>
                            </div>
                            <div className="category1">
                                <img src={Fashion} alt="" />
                                <li className="nav-row-list"><Link to="" className="nav-row-list-link" >Fashion</Link></li>
                            </div>
                            <div className="category1">
                                <img src={Electronics} alt="" />
                                <li className="nav-row-list"><Link to="" className="nav-row-list-link" >Electronics</Link></li>
                            </div>
                            <div className="category1">
                                <img src={Home} alt="" />
                                <li className="nav-row-list"><Link to="" className="nav-row-list-link" >Home</Link></li>
                            </div>
                            <div className="category1">
                                <img src={Beauty} alt="" />
                                <li className="nav-row-list"><Link to="" className="nav-row-list-link" >Beauty</Link></li>
                            </div>
                            {/* <li className="nav-row-list"><Link to="" className="nav-row-list-link" >Smartphones</Link></li>
                            <li className="nav-row-list"><Link to="" className="nav-row-list-link">furniture</Link></li>
                            <li className="nav-row-list"><Link to="" className="nav-row-list-link">Toys</Link></li>
                            <li className="nav-row-list"><Link to="" className="nav-row-list-link">Computing</Link></li>
                            <li className="nav-row-list"><Link to="" className="nav-row-list-link">Games</Link></li>
                            <li className="nav-row-list"><Link to="" className="nav-row-list-link">Automotive</Link></li> */}
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navy