import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import b1 from "../../assets/PhoneImgs/phone1.webp"

function AddingProducts() {
    const [product, setProduct] = useState([]);

    const fetchData = () => {
        return fetch("http://localhost:8080/api/category/1/products")
            .then((response) => response.json())
            .then((data) => setProduct(data["content"]));
    };

    useEffect(() => {
        fetchData();
    }, []);
    console.log(product);


    return (
        <>
            <div className="container-fluid my-5" style={{ backgroundColor: 'white' }}>

                <Link to="addp" style={{ margin: "2%  0px ", padding: '1%', width: '20%' }} className="btn btn-primary">Add Product</Link>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">SN</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Category</th>
                            <th scope="col">Price</th>
                            <th scope="col">Delete</th>
                            <th scope="col">Update</th>
                        </tr>
                    </thead>
                            {product.map((item) => {
                                return (<>
                    <tbody>
                        <tr >
                                    <th scope="row" >{item.productId}</th>
                                    <td >{item.productName}</td>
                                    <td >{item.category.categoryTitle}</td>
                                    <td>₹ {item.productPrice}</td>

                                    <td><a href="" className="btn btn-danger">Delete</a></td>
                                    <td><a href="" className="btnn btn-warning" style={{padding:'5px 10px',borderRadius:'2px'}}>Update</a></td>
                        </tr >
                    </tbody>
                                </>
                                );
                            })}
                </table>
            </div>
        </>
    )
}

export default AddingProducts