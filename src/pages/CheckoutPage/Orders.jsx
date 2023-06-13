import React from 'react'
import "./Orders.css"
import imgg from "../../assets/PhoneImgs/phone1.webp"
import { Link } from 'react-router-dom'

function Orders() {
    const [order, setOrder] = React.useState([]);

    const fetchData = () => {
        return fetch("http://localhost:8080/api/order/userOrders/" + localStorage.getItem("userId"))
            .then((response) => response.json())
            .then((data) => setOrder(data["content"]));
    };

    React.useEffect(() => {
        fetchData();
    }, []);

    console.log(order);
    return (
        <>
            <div className="cont-container">

                {order.map((item, index) => {
                    return (
                        <>



                            <div className="order-card1">
                                <div className="top-order-con">
                                    <h6 style={{ color: 'white' }}>ORDER PLACED <br />{item.orderDate}</h6>
                                    <h6 style={{ color: 'white' }}>TOTAL <br /> Rs. {item.totalPrice}</h6>
                                    <div className="user-div">
                                        <h6 style={{ color: 'white' }}>SHIP TO <br /> {item.shippedTo} <i class="ri-arrow-down-s-line" > </i></h6></div>
                                    <div className="add-hover">
                                        <p style={{ top: '10px' }}>{item.shippingAddress} </p>
                                    </div>



                                    <h6 style={{ color: 'white' }}>OrderId <br />{item.orderId} </h6>
                                </div>
                                <div className="bottom-order-con">
                                    <h5 style={{ padding: '10px 20px' }}>{item.orderStatus}</h5>
                                    <div className="order-all">
                                        <div className="img-order-img">
                                            <img src={
                                                "http://localhost:8080/api/products/image/" +
                                                item.product.productPhoto
                                            } alt="" height="150px" width="150px" />
                                        </div>
                                        <div className="content-box">
                                            <Link ><h6 className="head3">{item.product.productName}</h6></Link>
                                            <p style={{ marginLeft: '40px', marginTop: '-10px' }}>Return window closed on 10-June-2023</p>
                                            <button style={{ padding: '5px 20px', borderRadius: '5px', backgroundColor: 'rgb(255, 217, 0)', margin: '0 40px', border: 'none' }}>Buy it again</button>
                                            <button style={{ padding: '5px 20px', borderRadius: '5px', backgroundColor: 'white', margin: '0 -10px', border: '0.5px solid lightgray' }}>View your item</button>
                                        </div>
                                        <div className="buttons-option">
                                            <div className="option1-div">
                                                <button className='btn-btn' style={{width:'230px'}}>Cancel the Order</button>
                                            </div>
                                            {/* <div className="option2-div">
                                                <button className='btn-btn'>Return Order</button>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    )
}

export default Orders