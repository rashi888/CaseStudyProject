import React from 'react'
import { VscHeart } from "react-icons/vsc";
import { useState, useEffect } from "react";

function MobilesCate() {

    const [product, setProduct] = useState([]);

    const fetchData = () => {
        return fetch(
            "http://localhost:8080/api/products?pageNumber=0&pageSize=5&sortBy=productId&sortDir=desc",{
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
            <div className="container" style={{ marginTop: "160px",height:'400px', border: '1px solid lightgray', margin: '3%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div className="row">
                    <div className="col-sm-3" style={{ border: '1px solid gray' }}>
                        <h4>Categories</h4>
                        <ul className="list-group">
                            <a ><li className="list-group-item">All Products</li></a>
                            <a href="" ><li className="list-group-item" >Electronics</li></a>
                            <a href="" ><li className="list-group-item" >Grocery</li></a>
                            <a href="" ><li className="list-group-item" >Clothing</li></a>
                        </ul>
                    </div>

                    {product.map((item) => {
                        return (<>
                            <div className="col-sm-9" style={{ marginLeft: '25%', Top: '0%',marginTop:'-33%',padding:'0% 4%' }}>
                                <div className="cardy" style={{ marginTop: "20px", border: '1px solid lightgray', right: '0%' }} >
                                    <div className="row no-gutters">
                                        <div className="col-sm-5 d-flex justify-content-center">
                                            {/* <img className="" height="150px" width="150px" /> */}
                                            <img
                                                src="https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/e/n/j/-original-imaghuf9vphhbnkc.jpeg?q=70"
                                                alt=""
                                            />
                                        </div>
                                        <div className="col-sm-7 d-flex justify-content-center">
                                            <div className="card-body">
                                                <div className="images">

                                                </div>
                                                <h5 className="card-title details" >{item.productName}</h5>
                                                <h4 className="priceAndOffer">₹ <span >{item.productPrice} </span></h4>
                                                <p className="details">{item.productDescription}</p>
                                                <a href="#" className="btn btn-primary">View Product</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                        );
                    })}
                </div>
            </div>

        </>
    )
}

export default MobilesCate