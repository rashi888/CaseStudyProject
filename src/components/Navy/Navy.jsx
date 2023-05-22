import React from 'react'
import './Navy.css'
import { Link } from "react-router-dom"

function Navy() {
    return (
        <>
            <div>

                <link to="https://fonts.googleapis.com/css?family=Rubik&display=swap" rel="stylesheet" />
                {/* call to action */}
                {/* nav navigation commerce */}
                <div className="nav-container" style={{ marginTop: '8%', marginBottom: '-2%', zIndex: 17 }}>
                    <nav className="all-category-nav">
                        <label className="open-menu-all" htmlFor="open-menu-all">
                            <input className="input-menu-all" id="open-menu-all" type="checkbox" name="menu-open" />
                            <span className="all-navigator" style={{ textDecoration: 'none' }}><i className="fas fa-bars" /> <span>All category</span> <i className="fas fa-angle-down" />
                                <i className="fas fa-angle-up" />
                            </span>
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
                            <li className="nav-row-list"><Link to="" className="nav-row-list-link" >Smartphones</Link></li>
                            <li className="nav-row-list"><Link to="" className="nav-row-list-link">furniture</Link></li>
                            <li className="nav-row-list"><Link to="" className="nav-row-list-link">Toys</Link></li>
                            <li className="nav-row-list"><Link to="" className="nav-row-list-link">Computing</Link></li>
                            <li className="nav-row-list"><Link to="" className="nav-row-list-link">Games</Link></li>
                            <li className="nav-row-list"><Link to="" className="nav-row-list-link">Automotive</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navy