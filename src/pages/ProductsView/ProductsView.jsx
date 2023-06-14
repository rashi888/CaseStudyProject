import React from 'react'
import './ProductsView.css'
import { VscHeart } from "react-icons/vsc";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

const ProductsView = (props) => {
  const [mobileApi, setMobileApi] = useState(props.api);
  
  const location = useLocation();
  // const [product, setProduct] = useState(location.state.searchdata); 
  const [product, setProduct] = useState([]); 
  
  


  


  

  const fetchData = () => {
    return fetch(mobileApi,{
      headers: {
          "Authorization": "Bearer " + localStorage.getItem("token"),
      }
  }
     
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
      {/* <h1>Mobiles</h1> */}
      <div className="mobileItems">
        <div className='left-side'>
          <div className="filter-area">
            <h5>Filters</h5>
            <a style={{ textDecoration: 'none' }}>Clear All</a>
          </div>

          <div className="filter-area-bottom">
            <div className="dropdown">
              <button className="btn-filter  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                PageNumber
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </div>

          <div className="filter-area-bottom">
            <div className="dropdown" >
              <button className="btn-filter dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Price
              </button>
              <ul className="dropdown-menu" >
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </div>

          <div className="filter-area-bottom">
            <div className="dropdown">
              <button className="btn-filter dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Newest
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className='right-side'>
          {product.map((item) => {
            return (<>
              <div className="card-main">
                <div >
                <img
                    src={"http://localhost:8080/api/products/image/" + item.productPhoto[0]}
                    className="card-img-top"
                    alt="product.title"
                  />
                </div>
                <div className="about-img">
                  <h4>{item.productName}</h4>
                  <p> {item.productDescription}</p>
                  <p>{item.productPrice}</p>
                  <button type="button" className="btn btn-warning" style={{ fontSize: '1rem', padding: '3% 5%', borderRadius: '5px', color: 'white' }}>Add To cart</button>
                </div>
              </div>
            </>
            );
          })}
        </div >
      </div>
    </>
  )
}

export default ProductsView