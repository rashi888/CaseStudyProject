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
// import AllCategory from "../../assets/NavyImages/allcat.png"


function Navy() {
    return (
        <>
            <div style={{ marginLeft: '30px', marginRight: '30px', marginTop: '10%' }}>
                <link to="https://fonts.googleapis.com/css?family=Rubik&display=swap" rel="stylesheet" />

                <div className="nav-container" style={{ marginTop: '12%', zIndex: 17 }}>

                    <nav className="featured-category">
                        <ul className="nav-row">

                            <div className="category1">
                                <img src={AllCategory} alt="" />
                                <li ><Link to="" style={{textDecoration:'none'}} className='allcategory'>All category</Link></li>
                                <div className="item-box">
                                    <ul className="all-category-list">
                                        <li className="all-category-list-item" ><Link to="/mobiles" className="all-category-list-link" style={{ textDecoration: 'none', color: 'black' }}>Smartphones<i className="fas fa-angle-right" /></Link>
                                            <div className="category-second-list">

                                            </div>
                                        </li>
                                        <li className="all-category-list-item"><Link to="" className="all-category-list-link">Furniture <i className="fas fa-angle-right" /></Link></li>
                                        <li className="all-category-list-item"><Link to="" className="all-category-list-link">Toys<i className="fas fa-angle-right" /></Link></li>
                                        <li className="all-category-list-item"><Link to="" className="all-category-list-link">Computing<i className="fas fa-angle-right" /></Link></li>
                                        <li className="all-category-list-item"><Link to="" className="all-category-list-link" >Games<i className="fas fa-angle-right" /></Link></li>
                                        <li className="all-category-list-item"><Link to="" className="all-category-list-link" >Automotive<i className="fas fa-angle-right" /></Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="category1">
                                <img src={Grocery} alt="" />
                                <li className="grocery nav-row-list"><Link to="" className="nav-row-list-link" >Grocery</Link></li>
                                {/* <div className="groce" >
                                    <h6>product1</h6>
                                    <h6>product2</h6>
                                </div> */}
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