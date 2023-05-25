import React,{useState,useEffect} from 'react'
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

// http://localhost:8080/api/categories/

function Navy() {

    const [category, setCategory] = useState([]);

    const fetchData = () => {
      return fetch("http://localhost:8080/api/categories/")
        .then((response) => response.json())
        .then((data) => setCategory(data["content"]));
    };
  
    useEffect(() => {
      fetchData();
    }, []);
    console.log(category);

    return (
        <>
            <div style={{ marginLeft: '30px', marginRight: '30px', marginTop: '10%' }}>
                <link to="https://fonts.googleapis.com/css?family=Rubik&display=swap" rel="stylesheet" />

                <div className="nav-container" style={{ zIndex: 17 }}>

                    <nav className="featured-category">
                        <ul className="nav-row">

                            {/* <div className="category1">
                                <img src={AllCategory} alt="" height='50px' width='50px' />
                                <li className="allcategory nav-row-list"><Link to="" style={{ textDecoration: 'none' }} className='nav-row-list-link'>All category</Link></li>

                                <div className="box-inside-dropdown">
                                    <div className="item-box" >
                                        <p>Smartphones</p>
                                        <p>Furniture</p>
                                        <p>Toys</p>
                                        <p>Computing</p>
                                        <p>Games</p>
                                        <p>Automotive</p>
                                    </div>
                                    <div className="inside-item-box">
                                        <p>iphone</p>
                                        <p>Samsung Galaxy</p>
                                        <p>Realme</p>
                                        <p>Redmi</p>
                                        <p>Intex</p>
                                    </div>

                                </div>
                            </div> */}

                            <div className="all-category1">
                                <img src={AllCategory} alt="" />
                                <li className="allcategory nav-row-list"><Link to="" className="nav-row-list-link" >All Categories</Link></li>
                                <div className="categories" >
                                    <p className='p1'>Smartphones</p>
                                    <p className='p2'>Furniture</p>
                                    <p className='p3'>Toys</p>
                                    <p className='p4'>Computing</p>
                                    <p className='p5'>Games</p>
                                    <p className='p6'>Automotive</p>
                                </div>
                            </div>

                            <Link to="/grocery" className="category1">
                                <img src={Grocery} alt="" />
                                <li className="grocery nav-row-list"><Link to="" className="nav-row-list-link" >Grocery</Link></li>
                                {/* <div className="groce" >
                                    <h6>product1</h6>
                                    <h6>product2</h6>
                                </div> */}
                            </Link>
                            <Link to="/mobile" className="category1">
                                <img src={Mobile} alt="" />
                                <li className="nav-row-list"><Link to="/mobiles" className="nav-row-list-link" >Mobile</Link></li>
                            </Link>
                            <Link to="/fashion" className="category1">
                                <img src={Fashion} alt="" />
                                <li className="nav-row-list"><Link to="" className="nav-row-list-link" >Fashion</Link></li>
                            </Link >
                            <Link to="/electronics" className="category1">
                                <img src={Electronics} alt="" />
                                <li className="nav-row-list"><Link to="" className="nav-row-list-link" >Electronics</Link></li>
                            </Link>
                            <Link to="/homeproduct" className="category1">
                                <img src={Home} alt="" />
                                <li className="nav-row-list"><Link to="" className="nav-row-list-link" >Home</Link></li>
                            </Link>
                            <Link to="/beauty" className="category1">
                                <img src={Beauty} alt="" />
                                <li className="nav-row-list"><Link to="" className="nav-row-list-link" >Beauty</Link></li>
                            </Link>
                            {/* <li className="nav-row-list"><Link to="" className="nav-row-list-link" >Smartphones</Link></li>
                            <li className="nav-row-list"><Link to="" className="nav-row-list-link">furniture</Link></li>
                            <li className="nav-row-list"><Link to="" className="nav-row-list-link">Toys</Link></li>
                            <li className="nav-row-list"><Link to="" className="nav-row-list-link">Computing</Link></li>
                            <li className="nav-row-list"><Link to="" className="nav-row-list-link">Games</Link></li>
                            <li className="nav-row-list"><Link to="" className="nav-row-list-link">Automotive</Link></li> */}
                        </ul>
                    </nav>
                </div>
                {/* <div className="box-inside-dropdown">
                    <div className="item-box" >
                        <p>Smartphones</p>
                        <p>Furniture</p>
                        <p>Toys</p>
                        <p>Computing</p>
                        <p>Games</p>
                        <p>Automotive</p>
                    </div>
                    <div className="inside-item-box">
                        <p>iphone</p>
                        <p>Samsung Galaxy</p>
                        <p>Realme</p>
                        <p>Redmi</p>
                        <p>Intex</p>
                    </div>

                </div> */}
            </div>
        </>
    )
}

export default Navy