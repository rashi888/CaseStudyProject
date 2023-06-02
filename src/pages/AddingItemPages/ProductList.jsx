import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import b1 from "../../assets/PhoneImgs/phone1.webp"
import Swal from 'sweetalert2';

function ProductList() {

    const deleteProduct = (id) => {
        fetch("http://localhost:8080/api/products/" + id, {
            method: "DELETE",
        }).then(() => {
            Swal.fire({
                title: "Success",
                text: "Product Deleted Successfully",
                icon: "success",
            });
            fetchData();
        });
    };  

    const [product, setProduct] = useState([]);

    const fetchData = () => {
        return fetch("http://localhost:8080/api/products?sortBy=category&pageSize=100")
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
                <Link to='/mdash' style={{ margin: "2%  10px ", padding: '1%', width: '20%' }} className="btn btn-primary">Back to Dashboard</Link>
                <h2 style={{ marginBottom: '20px', padding: '10px 20px', color: '#48c1cf', marginLeft: '20px' }}>All Products</h2>
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
                                    <td><button className="btnn btn-danger" style={{ padding: '4px 7px', borderRadius: '5px',marginTop:'-7px' }} onClick={() => deleteProduct(item.productId)}>Delete</button></td>
                                    <td><Link to={'/updateproduct/'+item.productId} className="btnn btn-warning" style={{ padding: '4px 7px', borderRadius: '5px',marginTop:'-7px' }}>Update</Link></td>

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

export default ProductList