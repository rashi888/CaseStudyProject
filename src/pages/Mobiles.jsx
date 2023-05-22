import React from "react";
import "../styles/Mobiles.css";
import { VscHeart } from "react-icons/vsc";
import { useState, useEffect } from "react";

function Mobiles() {
  const [product, setProduct] = useState([]);

  const fetchData = () => {
    return fetch(
      "http://localhost:8080/api/products?pageNumber=0&pageSize=5&sortBy=productId&sortDir=desc"
    )
      .then((response) => response.json())
      .then((data) => setProduct(data["content"]));
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(product);

  return (
    <>
      <div className="containerMobiles">
        <div className="left">
          <h2>Filters</h2>
          <div className="productLabel">
            <h4>Product Label</h4>
            <h6>Latest Season</h6>
            <h6>Offer</h6>
            <h6>New On ShopEase</h6>
            <h6>Bestseller</h6>
            <h6>Editor's Pick</h6>
          </div>
          <div className="launched">
            <h2>Launched In</h2>
            <h6>Yesterday</h6>
            <h6>Last 3 Days</h6>
            <h6>Last 7 Days</h6>
            <h6>Last 30 Days</h6>
          </div>
          <div className="size">
            <h2>Size</h2>
            <h6>XXS</h6>
            <h6>XS</h6>
            <h6>S</h6>
            <h6>M</h6>
            <h6>L</h6>
            <h6>XL</h6>
          </div>
          <div className="discount">
            <h2>Discount</h2>
            <h6>70% And Above</h6>
            <h6>60% And Above</h6>
            <h6>50% And Above</h6>
            <h6>40% And Above</h6>
            <h6>30% And Above</h6>
            <h6>20% And Above</h6>
          </div>
        </div>

        <div className="right">
          <div className="filter">
            <h6>Sort By</h6>
            <h6>Popularity</h6>
            <h6>Price -- Low to High</h6>
            <h6>Price -- High to Low</h6>
            <h6>Newest First</h6>
          </div>
          <hr />
          {product.map((item) => {
            return (<>
              <div className="prod" id="prod1">
                <div className="images">
                  <img
                    src="https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/e/n/j/-original-imaghuf9vphhbnkc.jpeg?q=70"
                    alt=""
                  />
                  <VscHeart style={{ position: "absolute", fontSize: "1.5em" }} />
                </div>
                <div className="details">
                  {item.productName}
                </div>
                <div className="details">
                  {item.productDescription}
                </div>
                <div className="priceAndOffer">
                  <h1>{item.productPrice} </h1>
                  <p>
                    <del>12,999</del> 23% off
                  </p>
                  <h6>Free delivery</h6>
                  <h6>ShopEase Guranteed</h6>
                  <p>Upto 9,450 Off On Exchange </p>
                </div>
              </div>
            </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Mobiles;
