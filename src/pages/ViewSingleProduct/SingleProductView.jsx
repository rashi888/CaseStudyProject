import React from 'react'
import './SingleProductView.css';
import img1 from '../../assets/PhoneImgs/phone1.webp';
import img2 from '../../assets/PhoneImgs/phone2.webp';
import mainImg from "../../assets/PhoneImgs/phone2.webp"
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";

function SingleProductView() {

  const addtocart = (id) => (e) => {
    console.log(e.target.value);
    let userId = localStorage.getItem("userId");
    const url = "http://localhost:8080/api/cart/addToCart" ;
    const formdata = new FormData();
    formdata.append("productId", id);
    formdata.append("userId", userId);

    fetch(url, {
      method: "POST",
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Success",
          text: "Product Added to Cart Successfully",
          icon: "success",
          });
      })
      .catch((error) => {
        console.log(error);
      }
      );
      

  };
  return (
    <>
      <div className="prod1" >
        <div className="imgMain">
          <div className="image-big"><img src={mainImg} alt="" /></div> 
          <div className="image-small" >
            <div className="im1"><img src={img1} alt="" height='100px' width='100px'/></div>
            <div className="im2">  <img src={img2} alt="" height='100px' width='100px'/></div>
          
        
          </div>
        </div>
        <div className="prodDetails">
          <h2>REDMI Note 12 (Sunrise Gold, 64 GB)  (6 GB RAM)</h2>
          <h5>4.21,143 Ratings & 99 Reviews</h5>
          <h6>Extra ₹4000 off</h6>
          <h1>₹14,999 <h6><del>₹18,999</del> <span style={{ color: 'darkgreen' }}>21% off</span> </h6></h1>
          <h6>+ ₹49 Secured Packaging Fee</h6>
          <h6>Available offers</h6>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero fuga ipsum. Aperiam at ipsum atque quia nulla delectus quibusdam laborum pariatur reprehenderit dolores, obcaecati, ad magnam perspiciatis! Dignissimos, fuga.</p>
         <Link onClick={addtocart} to="/"><button>Add to cart</button></Link> 
        </div>
      </div>
    </>
  )
}

export default SingleProductView