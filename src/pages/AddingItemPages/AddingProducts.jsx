import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import b1 from "../../assets/PhoneImgs/phone1.webp"

function AddingProducts() {
    const [product, setProduct] = useState([]);

    const fetchData = () => {
        return fetch("http://localhost:8080/api/products?sortBy=category")
            .then((response) => response.json())
            .then((data) => setProduct(data["content"]));
    };

    useEffect(() => {
        fetchData();
    }, []);
    console.log(product);


    return (
        <>
            <div className="container-fluid my-5" style={{ backgroundColor: 'white',paddingBottom:'10px' }}>

                <Link to="/productadd" style={{ margin: "2%  0px ", padding: '1%', width: '20%' }} className="btn btn-primary">Add Product</Link>
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
                    {product.map((item, index) => {
                        return (<>
                            <tbody>
                                <tr >
                                    <th scope="row" key={item.productId}> {index + 1}</th>
                                    <td >{item.productName}</td>
                                    <td >{item.category.categoryTitle}</td>
                                    <td>₹ {item.productPrice}</td>

                                    <td><a href="" className="btn btn-danger">Delete</a></td>
                                    <td><a href="" className="btnn btn-warning" style={{ padding: '8px 10px', borderRadius: '5px',marginTop:'20px' }}>Update</a></td>
                                </tr >
                            </tbody>
                        </>
                        );
                    })}
                </table>


                <nav aria-label="Page navigation example" style={{margin:'30px 0px',padding:'10px'}}>
                    <ul class="pagination " >
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default AddingProducts