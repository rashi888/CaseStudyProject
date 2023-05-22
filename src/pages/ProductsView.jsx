import React from 'react'
import '../styles/ProductsView.css';
import img1 from '../assets/PhoneImgs/phone1.webp';
import img2 from '../assets/PhoneImgs/phone2.webp';
import img3 from '../assets/PhoneImgs/phone3.webp';
import img4 from '../assets/PhoneImgs/phone7.webp';
import img5 from '../assets/PhoneImgs/phone8.webp';
import mainImg from "../assets/PhoneImgs/phone2.webp"

function ProductsView() {
  return (
    <>
      <div className="prod1">
        <div className="imgs">
          <div className="img1"> <img src={img1} alt="" /></div>
          <div className="img2"> <img src={img2} alt="" /></div>
          {/* <div className="img3"> <img src={img3} alt="" /></div> */}
          <div className="img4"> <img src={img4} alt="" /></div>
          <div className="img5"> <img src={img5} alt="" /></div>
        </div>
        <div className="imgMain">
          <img src={mainImg} alt="" />
        </div>
        <div className="prodDetails">
          <h2>REDMI Note 12 (Sunrise Gold, 64 GB)  (6 GB RAM)</h2>
          <h5>4.21,143 Ratings & 99 Reviews</h5>
          <h6>Extra ₹4000 off</h6>
          <h1>₹14,999 <h6><del>₹18,999</del> <span style={{ color: 'darkgreen' }}>21% off</span> </h6></h1>
          <h6>+ ₹49 Secured Packaging Fee</h6>
          <h6>Available offers</h6>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero fuga ipsum. Aperiam at ipsum atque quia nulla delectus quibusdam laborum pariatur reprehenderit dolores, obcaecati, ad magnam perspiciatis! Dignissimos, fuga.</p>
          <button>ADD TO CART</button>
        </div>
      </div>
    </>
  )
}

export default ProductsView