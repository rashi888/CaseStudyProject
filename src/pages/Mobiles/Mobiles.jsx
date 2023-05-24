import React from 'react'
import './Mobiles.css'
import { VscHeart } from "react-icons/vsc";
import { useState, useEffect } from "react";

const Mobiles = () => {

  const [product, setProduct] = useState([]);

  const fetchData = () => {
    return fetch(
      // "http://localhost:8080/api/products?pageNumber=0&pageSize=5&sortBy=productId&sortDir=desc"
      "http://localhost:8080/api/category/1/products"
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



        {/* <div className='right-side'>
              <div className="card-main">
                <div className="img-card">
                </div>
                <div className="about-img">
                  <h4>Samsung galaxy</h4>
                  <p> Lorem ipsum</p>
                  <p>19999</p>
                  <button type="button" className="btn btn-warning" style={{fontSize:'1rem',padding:'3% 5%',borderRadius:'5px',color:'white'}}>Add To cart</button>
                </div>
              </div>
              <div className="card-main">
                <div className="img-card">
                </div>
                <div className="about-img">
                  <h4>Samsung galaxy</h4>
                  <p> Lorem ipsum</p>
                  <p>19999</p>
                  <button type="button" className="btn btn-warning" style={{fontSize:'1rem',padding:'3% 5%',borderRadius:'5px',color:'white'}}>Add To cart</button>
                </div>
              </div>
              <div className="card-main">
                <div className="img-card">
                </div>
                <div className="about-img">
                  <h4>Samsung galaxy</h4>
                  <p> Lorem ipsum</p>
                  <p>19999</p>
                  <button type="button" className="btn btn-warning" style={{fontSize:'1rem',padding:'3% 5%',borderRadius:'5px',color:'white'}}>Add To cart</button>
                </div>
              </div>
              <div className="card-main">
                <div className="img-card">
                </div>
                <div className="about-img">
                  <h4>Samsung galaxy</h4>
                  <p> Lorem ipsum</p>
                  <p>19999</p>
                  <button type="button" className="btn btn-warning" style={{fontSize:'1rem',padding:'3% 5%',borderRadius:'5px',color:'white'}}>Add To cart</button>
                </div>
              </div>
              <div className="card-main">
                <div className="img-card">
                </div>
                <div className="about-img">
                  <h4>Samsung galaxy</h4>
                  <p> Lorem ipsum</p>
                  <p>19999</p>
                  <button type="button" className="btn btn-warning" style={{fontSize:'1rem',padding:'3% 5%',borderRadius:'5px',color:'white'}}>Add To cart</button>
                </div>
              </div>
              <div className="card-main">
                <div className="img-card">
                </div>
                <div className="about-img">
                  <h4>Samsung galaxy</h4>
                  <p> Lorem ipsum</p>
                  <p>19999</p>
                  <button type="button" className="btn btn-warning" style={{fontSize:'1rem',padding:'3% 5%',borderRadius:'5px',color:'white'}}>Add To cart</button>
                </div>
              </div>
              <div className="card-main">
                <div className="img-card">
                </div>
                <div className="about-img">
                  <h4>Samsung galaxy</h4>
                  <p> Lorem ipsum</p>
                  <p>19999</p>
                  <button type="button" className="btn btn-warning" style={{fontSize:'1rem',padding:'3% 5%',borderRadius:'5px',color:'white'}}>Add To cart</button>
                </div>
              </div>
              <div className="card-main">
                <div className="img-card">
                </div>
                <div className="about-img">
                  <h4>Samsung galaxy</h4>
                  <p> Lorem ipsum</p>
                  <p>19999</p>
                  <button type="button" className="btn btn-warning" style={{fontSize:'1rem',padding:'3% 5%',borderRadius:'5px',color:'white'}}>Add To cart</button>
                </div>
              </div>
              <div className="card-main">
                <div className="img-card">
                </div>
                <div className="about-img">
                  <h4>Samsung galaxy</h4>
                  <p> Lorem ipsum</p>
                  <p>19999</p>
                  <button type="button" className="btn btn-warning" style={{fontSize:'1rem',padding:'3% 5%',borderRadius:'5px',color:'white'}}>Add To cart</button>
                </div>
              </div>
              <div className="card-main">
                <div className="img-card">
                </div>
                <div className="about-img">
                  <h4>Samsung galaxy</h4>
                  <p> Lorem ipsum</p>
                  <p>19999</p>
                  <button type="button" className="btn btn-warning" style={{fontSize:'1rem',padding:'3% 5%',borderRadius:'5px',color:'white'}}>Add To cart</button>
                </div>
              </div>
            </div> */}
        <div className='right-side'>
          {product.map((item) => {
            return (<>
              <div className="card-main">
                <div className="img-card">
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

export default Mobiles