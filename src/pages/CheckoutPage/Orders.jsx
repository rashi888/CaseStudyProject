import React from 'react'
import "./Orders.css"
import imgg from "../../assets/PhoneImgs/phone1.webp"
import { Link } from 'react-router-dom'

function Orders() {
    return (
        <>
            <div className="cont-container">
                <div className="order-card1">
                    <div className="top-order-con">
                        <h6>ORDER PLACED <br /> 1 May 2023</h6>
                        <h6>TOTAL <br /> Rs 1,899.00</h6>
                        <div className="user-div">
                            <h6>SHIP TO <br /> User Name <i class="ri-arrow-down-s-line" > </i></h6></div>
                        <div className="add-hover">
                            <p >
                                Rashi dixit,
                                Kala bagh balot bypass road, near Siddharth palace <br /> ward no.7
                                Ganj Basoda, MADHYA PRADESH 464221</p>
                        </div>



                        <h6>OrderId <br />2 </h6>
                    </div>
                    <div className="bottom-order-con">
                        <h5 style={{ padding: '10px 20px' }}>Delivered 31-May-2023</h5>
                        <div className="order-all">
                            <div className="img-order-img">
                                <img src={imgg} alt="" height="150px" width="150px" />
                            </div>
                            <div className="content-box">
                                <Link ><h6 className="head3">SAMSUNG Galaxy S22 Ultra Cell Phone, Factory Unlocked Android Smartphone, 128GB, 8K Camera & Video, Brightest Display Screen, S Pen, Long Battery Life, Fast 4nm Processor, US Version, Green</h6></Link>
                                <p style={{ marginLeft: '40px', marginTop: '-10px' }}>Return window closed on 10-June-2023</p>
                                <button style={{ padding: '5px 20px', borderRadius: '5px', backgroundColor: 'rgb(255, 217, 0)', margin: '0 40px', border: 'none' }}>Buy it again</button>
                                <button style={{ padding: '5px 20px', borderRadius: '5px', backgroundColor: 'white', margin: '0 -10px', border: '0.5px solid lightgray' }}>View your item</button>
                            </div>
                            <div className="buttons-option">
                                <div className="option1-div">
                                    <button className='btn-btn'>Cancel the Order</button>
                                </div>
                                <div className="option2-div">
                                    <button className='btn-btn'>Return Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Orders