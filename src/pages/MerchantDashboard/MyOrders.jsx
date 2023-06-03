import React, { useState,useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';


function MyOrders() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };


    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

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
                            <td><button onClick={toggleAccordion} style={{ border: 'none', backgroundColor: 'white' }}> <i class="ri-arrow-down-s-line"></i></button></td>
                        </tr >
                        {isOpen && (
                            <div className='dropdown-cont-content' style={{ backgroundColor: 'lightgray', width: '90vw', height: '210px', position: 'absolute', zIndex: "99", display: 'flex',padding:'5px' }}>

                                <div className="left-contentdiv" style={{ width:'660px',padding:'10px 30px',marginRight:'10px' }}>
                                    <h5>Ship to: Name, Address, city, state, zip</h5>
                                    <div className="three-btns" style={{ display: 'flex' }}>
                                        <div className="three-btns1" style={{ width: '200px', display: 'flex', flexDirection: 'column',marginRight:"10px" }}>
                                            <button style={{width:'130%',height:'42px',margin:'5px',borderRadius:'5px',border:'0.5px solid lightgray',backgroundColor:'green',color:'white',marginRight:'30px'}}>Accept order</button>
                                            <button style={{width:'130%',height:'42px',margin:'5px',borderRadius:'5px',border:'0.5px solid lightgray',backgroundColor:'red',color:'white',marginRight:'30px'}}>Reject Order</button>
                                            <input type="text" style={{width:'130%',height:'42px',margin:'5px',borderRadius:'5px',border:'0.5px solid lightgray',backgroundColor:'white',color:'black',marginRight:'30px',paddingLeft:'15px'}} placeholder='Reason for Rejecting...'/>
                                            {/* <button style={{width:'130%',height:'42px',margin:'5px',borderRadius:'5px',border:'0.5px solid lightgray',backgroundColor:'white',color:'black',marginRight:'30px'}}>Reason for Rejecting...</button> */}
                                        </div>

                                        <div className="three-btns2" style={{ width: '200px', display: 'flex', flexDirection: 'column' }}>
                                            <button style={{width:'130%',height:'42px',margin:'5px',borderRadius:'5px',border:'0.5px solid lightgray',backgroundColor:'#48c1cf',color:'white',marginLeft:'90px'}}>Mark it as Shipped</button>
                                            <input type="text" style={{width:'130%',height:'42px',margin:'5px',borderRadius:'5px',border:'0.5px solid lightgray',backgroundColor:'white',color:'black',marginLeft:'90px',paddingLeft:'15px'}} placeholder='Shipped via...'/>
                                            <input type="text" style={{width:'130%',height:'42px',margin:'5px',borderRadius:'5px',border:'0.5px solid lightgray',backgroundColor:'white',color:'black',marginLeft:'90px',paddingLeft:'15px'}} placeholder='Tracking id...'/>
                                            {/* <button style={{width:'130%',height:'42px',margin:'5px',borderRadius:'5px',border:'0.5px solid lightgray',backgroundColor:'white',color:'black',marginLeft:'90px'}}>Shipped via...</button>
                                            <button style={{width:'130%',height:'42px',margin:'5px',borderRadius:'5px',border:'0.5px solid lightgray',backgroundColor:'white',color:'black',marginLeft:'90px'}}>Tracking id...</button> */}
                                        </div>
                                    </div>

                                </div>
                                <div className="right-contentdiv" style={{  width: '500px',marginLeft:'30px' }}>
                                    <button style={{width:'100%',height:'35px',borderRadius:'5px',border:'0.5px solid lightgray',backgroundColor:'blue',color:'white'}}>Mark it as Delivered</button>
                                    <div className="btn-second-col" style={{display:'flex'}}>
                                        <button style={{width:'50%',height:'35px',margin:'10px 5px',borderRadius:'5px',border:'0.5px solid lightgray',backgroundColor:'#48c1cf',color:'white'}}>Accept Return Request</button>
                                        <button style={{width:'50%',height:'35px',margin:'10px 5px',borderRadius:'5px',border:'0.5px solid lightgray',backgroundColor:'#48c1cf',color:'white'}}>Initiate Refund</button>
                                    </div>
                                    <div className="btn-third-col" style={{display:'flex'}}>
                                        <button style={{width:'50%',height:'35px',margin:'5px',borderRadius:'5px',border:'0.5px solid lightgray',backgroundColor:'#48c1cf',color:'white'}}>Deny Return Request</button>
                                        <button style={{width:'50%',height:'35px',margin:'5px',borderRadius:'5px',border:'0.5px solid lightgray',backgroundColor:'#48c1cf',color:'white'}}>Deny Refund</button>
                                    </div>
                                    {/* <button style={{width:'100%',height:'35px',margin:'10px 0',borderRadius:'5px',border:'0.5px solid lightgray',backgroundColor:'white',color:'black'}}>Remarks...</button> */}
                                    <input type="text" style={{width:'100%',height:'35px',margin:'10px 0',borderRadius:'5px',border:'0.5px solid lightgray',backgroundColor:'white',color:'black',paddingLeft:'15px'}} placeholder='Remarks...'/>
                                </div>
                            </div>
                        )}
                        </>
                        );
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