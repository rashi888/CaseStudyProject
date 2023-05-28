import React, { useEffect, useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { NavLink, Link } from 'react-router-dom'
import "./Items.css";

function Items() {

  const [product, setProduct] = useState([]);

  const fetchData = () => {
    return fetch("http://localhost:8080/api/products?pageNumber=0&pageSize=10&sortBy=productId&sortDir=desc")
      .then((response) => response.json())
      .then((data) => setProduct(data["content"]));
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(product);

  //for multicaurosel

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <div className="wrapperr">
        <Carousel responsive={responsive}>
          {product.map((item) => {
            return (<>
              <div className="cardy" >
                <div className="image-items">
                  <img
                    src={"http://localhost:8080/api/products/image/" + item.productPhoto}
                    className="card-img-top"
                    alt="product.title"
                    height='100%'
                    width='100%'
                  />
                </div>
                <div className="all-main-content">
                  <h4 className="heading-main">{item.productName}</h4>
                  <h5 className='price-main'>₹ {item.productPrice}</h5>
                  <p className='description-main'> {item.productDescription}</p>
                  <p>
                    <NavLink to="/cart">
                      <button type="button" class="btn-Item btn-warning" style={{borderRadius:'4px'}}>Add to cart</button>
                    </NavLink>

                  </p>
                </div>
                {/* <Link to="mobiles"><script>const id = item.productId;</script>
                <div className="image-items">
                  <img
                    src={"http://localhost:8080/api/products/image/" + item.productPhoto}
                    className="card-img-top"
                    alt="product.title"
                  />
                </div>
                </Link>
                <h4 className="heading-main">{item.productName}</h4>
                <p className='price-main'>₹ {item.productPrice}</p>
                <p className='description-main'> {item.productDescription}</p>
                <p>
                  <NavLink to="/cart">
                    <button type="button" class="btn-item btn-warning">Add to cart</button>
                  </NavLink>

                </p> */}
              </div>
            </>
            );
          })}
        </Carousel>
      </div>
    </>
  )
}

export default Items