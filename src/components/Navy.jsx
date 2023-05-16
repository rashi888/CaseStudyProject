import React from 'react'
import '../styles/navy.css'
import {Link} from "react-router-dom"

function Navy() {
    return (
        <>
            <div>
 
 <link href="https://fonts.googleapis.com/css?family=Rubik&display=swap" rel="stylesheet" />
 {/* call to action */}
 {/* nav navigation commerce */}
 <div className="nav-container">
   <nav className="all-category-nav">
     <label className="open-menu-all" htmlFor="open-menu-all">
       <input className="input-menu-all" id="open-menu-all" type="checkbox" name="menu-open" />
       <span className="all-navigator"><i className="fas fa-bars" /> <span>All category</span> <i className="fas fa-angle-down" />
         <i className="fas fa-angle-up" />
       </span>
       <ul className="all-category-list">
         <li className="all-category-list-item"><Link to="/mobiles" className="all-category-list-link">Smartphones<i className="fas fa-angle-right" /></Link>
           <div className="category-second-list">
             <ul className="category-second-list-ul">
               <li className="category-second-item"><a href="https://www.cupcom.com.br/">Iphone 10</a></li>
               <li className="category-second-item"><a href="https://www.cupcom.com.br/">Galaxy Note 10</a></li>
               <li className="category-second-item"><a href="https://www.cupcom.com.br/">Motorola One </a></li>
               <li className="category-second-item"><a href="https://www.cupcom.com.br/">Galaxy A80 </a></li>
               <li className="category-second-item"><a href="https://www.cupcom.com.br/">Galaxy M </a></li>
               <li className="category-second-item"><a href="https://www.cupcom.com.br/">Huaway P30 </a></li>
             </ul>
             <div className="img-product-menu"><img src="https://i.ibb.co/Vvndkmy/banner.jpg" /></div>
           </div>
         </li>
         <li className="all-category-list-item"><a href="https://www.cupcom.com.br/" className="all-category-list-link">Furniture <i className="fas fa-angle-right" /></a></li>
         <li className="all-category-list-item"><a href="https://www.cupcom.com.br/" className="all-category-list-link">Toys<i className="fas fa-angle-right" /></a></li>
         <li className="all-category-list-item"><a href="https://www.cupcom.com.br/" className="all-category-list-link">Computing<i className="fas fa-angle-right" /></a></li>
         <li className="all-category-list-item"><a href="https://www.cupcom.com.br/" className="all-category-list-link">Games<i className="fas fa-angle-right" /></a></li>
         <li className="all-category-list-item"><a href className="all-category-list-link">Automotive<i className="fas fa-angle-right" /></a></li>
       </ul>
     </label>
   </nav>
   <nav className="featured-category">
     <ul className="nav-row">
       <li className="nav-row-list"><a href="https://www.cupcom.com.br/" className="nav-row-list-link">Smartphones</a></li>
       <li className="nav-row-list"><a href="https://www.cupcom.com.br/" className="nav-row-list-link">furniture</a></li>
       <li className="nav-row-list"><a href="https://www.cupcom.com.br/" className="nav-row-list-link">Toys</a></li>
       <li className="nav-row-list"><a href="https://www.cupcom.com.br/" className="nav-row-list-link">Computing</a></li>
       <li className="nav-row-list"><a href="https://www.cupcom.com.br/" className="nav-row-list-link">Games</a></li>
       <li className="nav-row-list"><a href="https://www.cupcom.com.br/" className="nav-row-list-link">Automotive</a></li>
     </ul>
   </nav>
 </div>
</div>
        </>
    )
}

export default Navy