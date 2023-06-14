import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import b1 from "../../assets/PhoneImgs/phone1.webp"
import Swal from 'sweetalert2';
import { Spinner } from 'reactstrap'

function ProductList() {

    const [isLoading, setIsLoading] = useState(false);

    

    const [product, setProduct] = useState([]);

    const fetchData = () => {
        setIsLoading(true);
        return fetch("http://localhost:8080/api/products?sortBy=category&pageSize=100",{
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token"),
            }
        })
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


    return (
        <>
            <div className="container-fluid my-5" style={{ backgroundColor: 'white', paddingBottom: '10px' }}>

                <Link to="/productadd" style={{ margin: "2%  0px ", padding: '1%', width: '20%' }} className="btn btn-primary">Add Product</Link>
                <Link to='/mdash' style={{ margin: "2%  10px ", padding: '1%', width: '20%' }} className="btn btn-primary">Back to Dashboard</Link>
                <h2 style={{ marginBottom: '20px', padding: '10px 20px', marginLeft: '10px' }}>All Products</h2>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">SN</th>
                            <th scope="col" style={{width:'700px'}}>Product Name</th>
                            <th scope="col">Category</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Price</th>
                            {/* <th scope="col">Delete</th> */}
                        </tr>
                    </thead>
                    {isLoading ? (
                        <Spinner animation="border" role="status" color='primary' style={{marginLeft:'600px' }} />
                    ) : (
                        <>
                            {product.map((item, index) => {
                                return (<>
                                    <tbody>
                                        <tr >
                                            <th scope="row" key={item.productId}> {index + 1}</th>
                                            <td style={{width:'700px'}}>{item.productName}</td>
                                            <td >{item.category.categoryTitle}</td>
                                            <td>{item.stock}</td>
                                            <td>₹ {item.productPrice}</td>
                                            {/* <td><button className="btnn btn-danger" style={{ padding: '4px 7px', borderRadius: '5px',marginTop:'-7px' }} onClick={() => deleteProduct(item.productId)}>Delete</button></td> */}

                                        </tr >
                                    </tbody>
                                </>
                                );
                            })}
                        </>)}


                </table>


                <nav aria-label="Page navigation example" style={{ margin: '30px 20px', padding: '10px' }}>
          <ul class="pagination" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <li class="page-item" style={{ backgroundColor: 'yellow' }}>
              <Link class="page-link" href="#" aria-label="Previous" style={{ fontSize: '24px' }}>
                <span aria-hidden="true">&laquo;</span>
              </Link>
            </li>
            <li class="page-item f-10"><Link class="page-link" href="#" style={{ fontSize: '24px' }}>1</Link></li>
            <li class="page-item"><Link class="page-link" href="#" style={{ fontSize: '24px' }}>2</Link></li>
            <li class="page-item"><Link class="page-link" href="#" style={{ fontSize: '24px' }}>3</Link></li>
            <li class="page-item">
              <Link class="page-link" href="#" aria-label="Next" style={{ fontSize: '24px' }}>
                <span aria-hidden="true">&raquo;</span>
              </Link>
            </li>
          </ul>
        </nav>
            </div>
        </>
    )
}

export default ProductList