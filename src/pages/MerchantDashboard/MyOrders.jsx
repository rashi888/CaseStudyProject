import React, { useState,useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';


function MyOrders() {


    const [data, setData] = useState([]);

    const order = () => {
        axios.get('http://localhost:8080/api/order/merchantOrders/'+window.localStorage.getItem("userId"))
            .then(response => {
                console.log(response.data["content"]);
                setData(response.data["content"]);
            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        order();
    }, []);


    return (
        <>
            <div className="container-fluid my-5" style={{ backgroundColor: 'white', paddingBottom: '10px' }}>

                {/* <Link to="/productadd" style={{ margin: "2%  0px ", padding: '1%', width: '20%' }} className="btn btn-primary">Add Product</Link> */}
                <Link to='/mdash' style={{ margin: "2%  10px ", padding: '1%', width: '20%' }} className="btn btn-primary">Back to Dashboard</Link>
                <h2 style={{ marginBottom: '20px', padding: '10px 20px', marginLeft: '20px' }}>Orders</h2>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Order Id</th>
                            <th scope="col">Item Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total Price</th>
                            <th scope="col">Payment</th>
                            <th scope="col">Status</th>
                            <th></th>
                        </tr>
                    </thead>                        
                    
                    <tbody >
                        {data.map((item, index) => {
                            return (<>
                        <tr >
                            <th scope="row" key="1">{item.orderDate} </th>
                            <td >{item.orderId}</td>
                            <td >{item.product.productName}</td>
                            <td>{item.quantity}</td>
                            <td> ₹ {item.totalPrice}</td>
                            <td>{item.paymentMethod}</td>
                            <td>{item.orderStatus}</td>
                            <td><button  style={{ border: 'none', backgroundColor: 'white' }}> <i class="ri-arrow-down-s-line"></i></button></td>
                            <div className="option">
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: 'white', border: 'none' }}>
                                        <i class="ri-arrow-down-s-line"></i>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><Link className="dropdown-item" to="/productedit">Edit</Link></li>
                                        <li><Link className="dropdown-item" to="/productdelete">Delete</Link></li>
                                    </ul>

                            </div>
                            </div>
                             

                        </tr >



                        </>)
                        })}

                        
                    </tbody>
                    
                          
                       
                        

                </table>


                <nav aria-label="Page navigation example" style={{ margin: '250px 20px 30px 20px', padding: '10px', bottom: '0' }}>
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

export default MyOrders