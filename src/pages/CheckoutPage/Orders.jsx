import React, { useState } from 'react'
import "./Orders.css"
import imgg from "../../assets/PhoneImgs/phone1.webp"
import { Link } from 'react-router-dom'
import { Spinner } from 'reactstrap'
import Norder from "../../assets/MoreImgs/Norder3.png"


function Orders() {
    const [order, setOrder] = React.useState([]);
    const [isLoading, setIsLoading] = useState(false);
    

    const fetchData = () => {
        setIsLoading(true);
        return fetch("http://localhost:8080/api/order/userOrders/" + localStorage.getItem("userId"), {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token"),
            }
        })
            .then((response) => response.json())
            .then((data) => {
                setOrder(data["content"])
                setIsLoading(false);
            });
    };

    React.useEffect(() => {
        fetchData();
    }, []);

    console.log(order);

    if (order.length === 0) {
        return (
<>
            <div className="no-orders-container" style={{ width: '1250px', height: '550px', margin: '30px auto', backgroundColor: 'white', display: 'flex',boxShadow:'10px 10px 10px lightgray',borderRadius:'5px' }}>

                <div className="left-norder" style={{ width: '45%', height: '100%', textAlign:'center',paddingTop:'180px',padding:'180px 50px',backgroundColor:'rgb(250, 250, 250)' }}>
                    {/* <h3>NO ORDERS FOUND</h3> */}
                    <h3 style={{marginBottom:'25px',color:'gray'}}>Looks like you haven't made any order yet</h3>
                  <Link to="/">  <button className='btn btn-success'> Continue Shopping</button></Link>
                </div>
                <div className="right-norder" style={{ width: '55%', height: '100%' }}>
                    <img src={Norder} alt="" width="100%" height="100%" />
                </div>
            </div>
        </>
        )
    }

    const gotoProduct = (id) => (e) => {
        window.location.href = "/singleproductview/" + id;
    }

    return (
        <>
            <div className="cont-container">

                {isLoading ? (
                    <Spinner
                        animation="border"
                        role="status"
                        color="primary"
                        style={{ marginLeft: "50%" }}
                    />
                ) : (
                    <>
                        {order.map((item, index) => {
                            return (
                                <>
                                    <div className="order-card1">
                                        <div className="top-order-con">
                                            <h6 style={{ color: 'white' }}>ORDER PLACED <br />{item.orderDate}</h6>
                                            <h6 style={{ color: 'white' }}>TOTAL <br /> Rs. {item.totalPrice}</h6>
                                            <div className="user-div">
                                                <h6 style={{ color: 'white' }}>SHIP TO <br /> {item.shippedTo} <i class="ri-arrow-down-s-line" > </i></h6></div>
                                            <div className="add-hover" >
                                                <p >{item.shippingAddress} </p>
                                            </div>



                                            <h6 style={{ color: 'white' }}>OrderId <br />{item.orderId} </h6>
                                        </div>
                                        <div className="bottom-order-con">
                                            <h5 style={{ padding: '10px 20px' }}>{item.orderStatus}</h5>
                                            <div className="order-all">
                                                <div className="img-order-img">
                                                    <img onClick={gotoProduct(item.product.productId)} src={
                                                        "http://localhost:8080/api/products/image/" +
                                                        item.product.productPhoto[0]
                                                    } alt="" height="150px" width="150px" />
                                                </div>
                                                <div className="content-box">
                                                    <Link ><h6 onClick={gotoProduct(item.product.productId)} className="head3">{item.product.productName}</h6></Link>
                                                    <p style={{ marginLeft: '40px', marginTop: '-10px' }}>Return window closed on 10-June-2023</p>
                                                    <button style={{ padding: '5px 20px', borderRadius: '5px', backgroundColor: 'rgb(255, 217, 0)', margin: '0 40px', border: 'none' }}>Buy it again</button>
                                                    <button onClick={gotoProduct(item.product.productId)} style={{ padding: '5px 20px', borderRadius: '5px', backgroundColor: 'white', margin: '0 -10px', border: '0.5px solid lightgray' }}>View your item</button>
                                                </div>
                                                <div className="buttons-option">
                                                    <div className="option1-div">
                                                        <button className='btn-btn' style={{ width: '230px' }}>Cancel the Order</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </>)}
            </div>
        </>
    )
}

export default Orders