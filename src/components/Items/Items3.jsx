import React, { useEffect, useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { NavLink, Link } from 'react-router-dom'
import "./Items.css";
import Swal from "sweetalert2";
import { Spinner } from 'reactstrap'

function Items3() {

    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = () => {
        setIsLoading(true);

        return fetch("http://localhost:8080/api/category/3/products")
            .then((response) => response.json())
            .then((data) => {
                setProduct(data["content"])
                setIsLoading(false);
            });
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
    const viewProduct = (id) => (e) => {
        console.log(e.target.value);
        window.location.href = "/singleproductview/" + id;
    };

    const addtocart = (id) => (e) => {
        console.log(e.target.value);
        let userId = localStorage.getItem("userId");
        if(userId==null){
            Swal.fire({
              
              text: "Please Login First",
              icon: "info",
            });
      
          }else{
        const url = "http://localhost:8080/api/cart/addToCart";
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
        }


    };

    return (
        <>
            <div className="wrapperr" style={{ margin: '50px auto' }}>
                <h3 className="wrapper-heading1" >Pick Your styles </h3>
                <hr className="horizontal-line" />

                {isLoading ? (
                    <Spinner animation="border" role="status" color='primary' style={{ marginLeft: '50%' }} />
                ) : (
                    <>
                        <Carousel responsive={responsive}>
                            {product.map((item) => {
                                return (<>
                                    <div className="cardy" >
                                        <div className="image-items">
                                            <img
                                                onClick={viewProduct(item.productId)}
                                                src={"http://localhost:8080/api/products/image/" + item.productPhoto[0]}
                                                className="card-img-top"
                                                alt="product.title"
                                                height='100%'
                                                width='100%'
                                            />
                                        </div>
                                        <div className="all-main-content">
                                            <h4 className="heading-main">{item.productName}</h4>
                                            <h5 className='price-main'>₹ <del> {item.productMRP}</del></h5>
                                            <h5 className='price-main'>₹ {item.productPrice}</h5>
                                            {/* <p className='description-main'> {item.productDescription}</p> */}
                                            <p>
                                                <NavLink >
                                                    <button onClick={addtocart(item.productId)} type="button" class="btn-Item btn-warning" style={{ borderRadius: '4px', border: 'none' }}>Add to cart</button>
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
                    </>)}


            </div>
        </>
    )
}

export default Items3