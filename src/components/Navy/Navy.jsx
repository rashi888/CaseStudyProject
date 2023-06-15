import React, { useState, useEffect } from 'react'
import './Navy.css'
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'

import AllCategory from "../../assets/NavyImages/All-category2.png"
import Grocery from "../../assets/NavyImages/Grocery.webp"
import Mobile from "../../assets/NavyImages/Mobile.webp"
import Fashion from "../../assets/NavyImages/Fashion.webp"
import Electronics from "../../assets/NavyImages/Electronics.webp"
import Home from "../../assets/NavyImages/Home1.png"
import Beauty from "../../assets/NavyImages/Beauty 2.png"


function Navy() {
   
    const [category, setCategory] = useState([]);

    const fetchData = () => {

        return fetch("http://localhost:8080/api/categories/",{
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token"),
            }
        })
            .then((response) => response.json())
            .then((data) => setCategory(data));

        // haiu
    };


    useEffect(() => {
        fetchData();
    }, []);
    // console.log(category);
    // console.log("hello")
    // console.log(setCategory);

    const navigate = useNavigate();

    return (
        <>
            <div style={{ marginLeft: '30px', marginRight: '30px', marginTop: '10%' }}>
                <link to="https://fonts.googleapis.com/css?family=Rubik&display=swap" rel="stylesheet" />

                <div className="nav-container" style={{ zIndex: 17 }}>

                    <nav className="featured-category">
                        <ul className="nav-row">

    
                            <Link to='/allproducts' className="all-category1 custom-link">
                                <img src={AllCategory} alt="" />
                                <li className="allcategory nav-row-list" ><Link to="" className="nav-row-list-link" >All Categories</Link></li>
                                <div className="categories">
                                    {category.map((item) => {
                                        return (
                                            <Link to={"category/"+item.categoryId} className='custom-link'>
                                                <p  className='p1' style={{margin:'-20px auto',width:'200px',padding:'12px'}}>{item.categoryTitle}</p>
                                            </Link>
                                        );
                                    })}

                                </div>
                            </Link>

                            <Link to="/Grocery" className="category1 custom-link">
                                <img src={Grocery} alt="" />
                                <li className="grocery nav-row-list"><Link to="/Grocery" className="nav-row-list-link" >Grocery</Link></li>
                                {/* <div className="groce" >
                                    <h6>product1</h6>
                                    <h6>product2</h6>
                                </div> */}
                            </Link>
                            <Link to="/Mobile" className="category1 custom-link">
                                <img src={Mobile} alt="" />
                                <li className="nav-row-list"><Link to="/Mobile" className="nav-row-list-link" >Mobile</Link></li>
                            </Link>
                            <Link to="/Fashion" className="category1 custom-link">
                                <img src={Fashion} alt="" />
                                <li className="nav-row-list"><Link to="/Fashion" className="nav-row-list-link" >Fashion</Link></li>
                            </Link >
                            <Link to="/Electronics" className="category1 custom-link">
                                <img src={Electronics} alt="" />
                                <li className="nav-row-list"><Link to="/Electronics" className="nav-row-list-link" >Electronics</Link></li>
                            </Link>
                            <Link to="/Home" className="category1 custom-link">
                                <img src={Home} alt="" />
                                <li className="nav-row-list"><Link to="/Home" className="nav-row-list-link" >Home</Link></li>
                            </Link>
                            <Link to="/Beauty" className="category1 custom-link">
                                <img src={Beauty} alt="" />
                                <li className="nav-row-list"><Link to="/Beauty" className="nav-row-list-link" >Beauty</Link></li>
                            </Link>
                             </ul>
                    </nav>
                </div>
                
            </div>
        </>
    )
}

export default Navy