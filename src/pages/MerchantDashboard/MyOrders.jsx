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

    const showOptions = (index) => {
        return () => {
            var x = document.getElementById(index);
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none"
            }
        }
    }

    


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
                            <td><button onClick={showOptions(index)}  style={{ border: 'none', backgroundColor: 'white' }}> <i class="ri-arrow-down-s-line"></i></button></td>
                        </tr>
                        <tr id={index} style={{ display: 'none' }}>
                            <td colSpan="8">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card" style={{ width: '100%', margin: '10px 0px' }}>
                                            <div className="card-body">
                                                <h5 className="card-title">Customer Details</h5>
                                                <p className="card-text">Name : srijan sah</p>
                                                <p className="card-text">Email :sr@gmail.com</p>
                                                <p className="card-text">Phone : 7489581850</p>
                                                <p className="card-text">Address : katni</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card" style={{ width: '100%', margin: '10px 0px' }}>
                                            <div className="card-body">
                                                <h5 className="card-title">Merchant Details</h5>
                                                <p className="card-text">Name :s jan</p>
                                                <p className="card-text">Email : sj@gmaiul.com}</p>
                                                <p className="card-text">Phone : 98498</p>
                                                <p className="card-text">Address : bhej raha </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            
                             

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