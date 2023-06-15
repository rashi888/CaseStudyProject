import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Spinner } from 'reactstrap'


function MyOrders() {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const order = () => {
        setIsLoading(true);
        axios.get('http://localhost:8080/api/order/merchantOrders/' + window.localStorage.getItem("userId"), {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token"),
            }
        })
            .then(response => {
                console.log(response.data["content"]);
                setData(response.data["content"]);
                setIsLoading(false);
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

    const accept = (id) => {
        return () => {
            axios.put('http://localhost:8080/api/order/orderStatus/' + id, {
                "orderStatus": "Order Accepted"
            }, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token"),
                }
            })
                .then(response => {
                    console.log(response);
                    Swal.fire({
                        title: 'Success',
                        text: 'Order Accepted',
                        icon: 'success',
                        confirmButtonText: 'OK'

                    })
                    order();
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

    const [reason, setReason] = useState("");
    const [shippedvia, setShippedvia] = useState("");
    const [trackingid, setTrackingid] = useState("");

    const orderrejected = "Order Rejected : " + reason;



    const reject = (id) => {
        return () => {
            axios.put('http://localhost:8080/api/order/orderStatus/' + id, {
                "orderStatus": orderrejected
            }, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token"),
                }
            })
                .then(response => {
                    console.log(response);
                    Swal.fire({
                        title: 'Success',
                        text: 'Order Rejected',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    order();
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

    const shipped = (id) => {
        return () => {
            axios.put('http://localhost:8080/api/order/orderStatus/' + id, {
                "orderStatus": "Order Shipped" + " via " + shippedvia + " with tracking id " + trackingid
            }, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token"),
                }
            })
                .then(response => {
                    console.log(response);
                    Swal.fire({
                        title: 'Success',
                        text: 'Order Shipped',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    order();
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

    const currentdate = new Date();
    var months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];


    const delivered = (id) => {
        return () => {
            axios.put('http://localhost:8080/api/order/orderStatus/' + id, {
                "orderStatus": "Order Delivered" + " on " + currentdate.getDate() + " " + months[currentdate.getMonth()] + " " + currentdate.getFullYear()
            }, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token"),
                }
            })
                .then(response => {
                    console.log(response);
                    Swal.fire({
                        title: 'Success',
                        text: 'Order Delivered',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    order();
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

    return (
        <>
            <div className="container-fluid my-5" style={{width:'1250px',margin:'30px auto'}} >
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
                    {isLoading ? (
          <Spinner animation="border" role="status" color='primary' style={{ marginLeft: '50%' }} />
        ) : (
          <>
           {data.map((item, index) => {
                            return (<>
                                <tr >
                                    <th scope="row" key="1">{item.orderDate} </th>
                                    <td >{item.orderId}</td>
                                    <td >{item.product.productName}</td>
                                    <td>{item.quantity}</td>
                                    <td> ₹{item.totalPrice}</td>
                                    <td>{item.paymentMethod}</td>
                                    <td>{item.orderStatus}</td>
                                    <td><button onClick={showOptions(index)} style={{ border: 'none' }}> <i class="ri-arrow-down-s-line"></i></button></td>
                                </tr>

                                {/* onclick row */}
                                <tr id={index} style={{ display: 'none',position:'absolute',width:'1230px',zIndex:'1000',backgroundColor:'white' }}>
                                    <td colSpan="6">
                                        <div className="row" style={{width:'1230px' }}>
                                            <div className="col-md-15" style={{ width: '100%', margin: '10px 0px', display: 'flex' }}>
                                                <div className="card" style={{ width: '100%', margin: '10px 0px' }}>
                                                    <div className="card-body" style={{ width: '110%', margin: '10px 0px' }}>
                                                        <h5 className="card-title">Customer Details</h5>
                                                        <p className="card-text">Name : {item.shippedTo}</p>
                                                        <p className="card-text">Email : {item.user.emailId}</p>
                                                        <p className="card-text">Phone : {item.user.mobileNumber}</p>
                                                        <p className="card-text">Address : {item.shippingAddress}</p>
                                                    </div>
                                                </div>
                                                <div className="button" style={{ margin: '10px 10px', height: '50px', display: 'grid' }}>
                                                    <button onClick={accept(item.id)} className="btn btn-primary" style={{ margin: '10px 10px', height: '50px' }}>Accept Order</button>
                                                    <br />
                                                    <button onClick={reject(item.id)} className="btn btn-danger" style={{ margin: '10px 10px', height: '50px' }}>Reject Order</button>
                                                    <input type="textbox" name="reason" id="reason" placeholder=' Reason For Rejecting'
                                                        onChange={(e) => { setReason(e.target.value) }}


                                                        style={{ margin: '10px 10px', height: '50px' }} />
                                                </div>
                                                <div className="button" style={{ margin: '10px 10px', height: '50px', display: 'grid' }}>
                                                    <button onClick={shipped(item.id)} className="btn btn-primary" style={{ margin: '10px 10px', height: '50px' }}>Mark it as shipped</button>
                                                    <br />
                                                    <input type="textbox"
                                                        onChange={(e) => { setShippedvia(e.target.value) }}
                                                        name="via" id="via" placeholder=' Shipped via' style={{ margin: '10px 10px', width: 'max-content', height: '50px' }} />
                                                    <input type="textbox" name="tracking" id="tracking" placeholder=' Tracking Id'
                                                        onChange={(e) => { setTrackingid(e.target.value) }}
                                                        style={{ margin: '10px 10px', height: '50px' }} />
                                                </div>
                                                <div className="button" style={{ margin: '10px 10px', width: 'max-content', height: '50px', display: 'grid' }}>
                                                    <button onClick={delivered(item.id)} className="btn btn-primary" style={{ margin: '10px 10px', height: '50px' }}>Mark it as delivered</button>
                                                    <br />
                                                </div>
                                            </div>

                                        </div>
                                    </td>




                                </tr >



                            </>)
                        })}
          </>)}
                       


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