import React from 'react'
import { VscHeart } from "react-icons/vsc";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import {RiArrowDownSLine} from "react-icons/ri"; 
import Swal from 'sweetalert2';

const SearchData = (props) => {
  const [api, Api] = useState(props.api);
  
  const location = useLocation();
  const [product, setProduct] = useState(location.state.searchdata); 
  // const [product, setProduct] = useState([]); 
  const [pageNumber, setPageNumber] = useState(0);
  const [sortBy, setSortBy] = useState("productId");
  const [dir, setDir] = useState("DESC");
  const [totalPages, setTotalPages] = useState(0);
  
  


  const addtocart = (id) => (e) => {
    console.log(e.target.value);
    let userId = localStorage.getItem("userId");
    if(userId === null){
      Swal.fire({
        title: "Info",
        text: "Please Login to Add Product to Cart",
      });
    }else{
    const url = "http://localhost:8080/api/cart/addToCart" ;
    const formdata = new FormData();
    formdata.append("productId", id);
    formdata.append("userId", userId);

    fetch(url, {
      method: "POST",
      body: formdata,
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token"),
      },
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
}

  const viewProduct = (id) => (e) => {
    console.log(e.target.value);
    
    window.location.href = "/singleproductview/" + id ;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  

  
  useEffect(() => {
    scrollToTop();
    fetchData();
    setProduct(location.state.searchdata);

  }, []);
  console.log(product);

  const fetchData = () => {
    const url =
      "http://localhost:8080/api/products/search/" + location.state.searchdata +
      "?pageSize=10&pageNumber=" +
      pageNumber +
      "&sortBy=" +
      sortBy +
      "&sortDir=" +
      dir;
      console.log(url);
    return fetch(url,{
      headers: {
          "Authorization": "Bearer " + localStorage.getItem("token"),
      }
  })
      .then((response) => response.json())
      .then((data) => {
        setTotalPages(data["totalPages"]);
        setProduct(data["content"]);
      });
  };



  
  return (
    <>
      <div className="universal-page">
        <div className="heading-allproducts">
        <h2 style={{ marginBottom: '20px', padding: '10px 20px', color: '#48c1cf', marginLeft: '20px' }}>All Products</h2>
        <div className="sorting-div">
          <p className='sorting'>Sort by: <bold>New Arrivals</bold></p>
         <i className='sorting'><RiArrowDownSLine/></i> 
          <div className="dropdown-sorting">
            <p>New Arrivals</p>
            <p>Price: Low to High</p>
            <p>Price: High to Low</p>
          </div>
        </div>
        </div>

        {product['content'].map((item) => {
          return (<>
            <div className="card-one"  > 
              <div className="img-section">
                <img onClick={viewProduct(item.productId)} src={"http://localhost:8080/api/products/image/" + item.productPhoto[0]} alt="" height="100%" style={{ padding: '25px 70px' }} />
              </div>
              <div className="content-section">
                <h4 style={{ marginBottom: '20px' }} >{item.productName}</h4>
                <div  className="desc-mobile" dangerouslySetInnerHTML={{ __html: item.productDescription }} style={{ marginBottom: '20px' }}></div>
                {/* <h2 style={{ margin: '10px 0px' }}>₹ <span>12000</span></h2> */}

              </div>
              <div className="price-section">
                <h6>M.R.P ₹ <del>15000</del> </h6>
                <h2 style={{ margin: '15px 0px' }}>₹ {item.productPrice}</h2>
                <button onClick={addtocart(item.productId)} type='button' className='btn-price btn-warning' >Add to Cart</button>

              </div>
            </div>
          </>
          );
        })}
        
      </div>
    </>
  )
}

export default SearchData