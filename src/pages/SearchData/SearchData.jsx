import React from 'react'
import { VscHeart } from "react-icons/vsc";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import {RiArrowDownSLine} from "react-icons/ri"; 

const SearchData = (props) => {
  const [api, Api] = useState(props.api);
  
  const location = useLocation();
  const [product, setProduct] = useState(location.state.searchdata); 
  // const [product, setProduct] = useState([]); 
  
  


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


  

  const fetchData = () => {
    return fetch(api
      // "http://localhost:8080/api/products?pageNumber=0&pageSize=5&sortBy=productId&sortDir=desc"
      // "http://localhost:8080/api/category/1/products"
    )
      .then((response) => response.json())
      .then((data) => setProduct(data["content"]));
  };

  useEffect(() => {
    fetchData();
    setProduct(location.state.searchdata);

  }, []);
  console.log(product);

  
  return (
    <>
      <div className="universal-page">
        <div className="heading-allproducts">
        <h2 style={{ marginBottom: '20px', padding: '10px 20px', color: '#48c1cf', backgroundColor: "white", marginLeft: '20px' }}>All Products</h2>
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

        {product.map((item) => {
          return (<>
            <div className="card-one" > 
              <div className="img-section">
                <img src={"http://localhost:8080/api/products/image/" + item.productPhoto} alt="" height="100%" style={{ padding: '25px 70px' }} />
              </div>
              <div className="content-section">
                <h4 style={{ marginBottom: '20px' }} >{item.productName}</h4>
                <p style={{ margin: '10px 0px' }}> {item.productDescription}</p>
                {/* <h2 style={{ margin: '10px 0px' }}>₹ <span>12000</span></h2> */}

              </div>
              <div className="price-section">
                <h6>M.R.P ₹ <del>15000</del> </h6>
                <h2 style={{ margin: '15px 0px' }}>₹ {item.productPrice}</h2>
                <button onClick={addtocart} type='button' className='btn-price btn-warning' >Add to Cart</button>

              </div>
            </div>
          </>
          );
        })}
        <nav aria-label="Page navigation example" style={{ margin: '30px 20px', padding: '10px'}}>
          <ul class="pagination" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <li class="page-item" style={{backgroundColor:'yellow'}}>
              <a class="page-link" href="#" aria-label="Previous" style={{fontSize:'24px'}}>
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item f-10"><a class="page-link" href="#" style={{fontSize:'24px'}}>1</a></li>
            <li class="page-item"><a class="page-link" href="#" style={{fontSize:'24px'}}>2</a></li>
            <li class="page-item"><a class="page-link" href="#" style={{fontSize:'24px'}}>3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next" style={{fontSize:'24px'}}>
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default SearchData