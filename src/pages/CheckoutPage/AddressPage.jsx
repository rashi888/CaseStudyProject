import React, { useState } from 'react';
import Dropdown from './Dropdown'
import { Link } from "react-router-dom"
import { FormGroup, Form, Input, Label, Row, Col } from 'reactstrap';


function AddressPage() {
    const [modal, setModal] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);


    const toggleModal = () => {
        setModal(!modal);
    };

    // if (modal) {
    //     document.body.classList.add('active-modal')
    // } else {
    //     document.body.classList.remove('active-modal')
    // }



    const handleButtonClick = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };


    return (
        <>
            <div className="containerr mt-3">
                <section className="mt-5 mb-4" style={{ margin: '5%' }}>
                    <h1 style={{ textAlign: 'center', marginBottom: '-10px' }}>Checkout</h1>
                    <div className="row" >

                        <div className="col-lg-8 mb-4">
                            <div className="wish-list pb-1" style={{ margin: '5% 3%' }}>
                                <div className="card-body" style={{ backgroundColor: 'white', borderRadius: '3px', padding: '20px', boxShadow: "10px 10px 10px lightgray" }}>

                                    <div className="Address-main" style={{ marginBottom: '20px', padding: '20px' }}>
                                        <h4>1. Delivery Address</h4>
                                        <p>
                                            Rashi dixit
                                            Kala bagh balot bypass road, near Siddharth palace ward no.7
                                            Ganj Basoda
                                            Ganj Basoda, MADHYA PRADESH 464221</p>

                                        <div className="btn-order-page">
                                            <Link onClick={handleButtonClick} > <i class="ri-add-line"></i> Add New Address</Link>
                                        </div>
                                        {isPopupOpen && (
                                            <div className="popup">
                                                <div className="popup-content">
                                                    <h5>Add New Address Here</h5>
                                                    <Form>
                                                        <FormGroup>
                                                            <Label for="exampleAddress">
                                                                Address
                                                            </Label>
                                                            <Input
                                                                id="exampleAddress"
                                                                name="address"
                                                                placeholder="1234 Main St"
                                                            />
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <Label for="exampleAddress2">
                                                                Address 2
                                                            </Label>
                                                            <Input
                                                                id="exampleAddress2"
                                                                name="address2"
                                                                placeholder="Apartment, studio, or floor"
                                                            />
                                                        </FormGroup>
                                                        <Row>
                                                            <Col md={6}>
                                                                <FormGroup>
                                                                    <Label for="exampleCity">
                                                                        City
                                                                    </Label>
                                                                    <Input
                                                                        id="exampleCity"
                                                                        name="city"
                                                                    />
                                                                </FormGroup>
                                                            </Col>
                                                            <Col md={4}>
                                                                <FormGroup>
                                                                    <Label for="exampleState">
                                                                        State
                                                                    </Label>
                                                                    <Input
                                                                        id="exampleState"
                                                                        name="state"
                                                                    />
                                                                </FormGroup>
                                                            </Col>
                                                            <Col md={2}>
                                                                <FormGroup>
                                                                    <Label for="exampleZip">
                                                                        Zip
                                                                    </Label>
                                                                    <Input
                                                                        id="exampleZip"
                                                                        name="zip"
                                                                    />
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                    </Form>
                                                    <button className='btn btn-success' onClick={handleClosePopup}>Done</button>
                                                </div>
                                            </div>
                                        )}

                                    </div>
                                    <div className="payment-main">
                                        <h4>2. Payment</h4>
                                        {/* <button onClick={toggleModal} className="btn-modal">Open </button> */}
                                        <Link to="/popup"> <i class="ri-add-line"></i> Payment methods</Link>
                                    </div>
                                    <div className="offers-main">
                                        <h4>3. Offers</h4>
                                        <Link> <i class="ri-add-line"></i> Show Offers</Link>
                                    </div>
                                    <div className="items-and-delivery">
                                        <h4>4. Items and delivery</h4>
                                        <Link> <i class="ri-add-line"></i> Items And Delivery</Link>
                                    </div>


                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4">

                            <div className="cardy mb-4" style={{ border: "0.3px solid lightgray", margin: '10% 1%', padding: '2% 5%' }}>
                                <div className="card-body">

                                    <h5 className="mb-3">The total amount </h5>

                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            Amount Payable
                                            <span>₹<span >1000</span></span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                            Shipping
                                            <span>Gratis</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                            <div>
                                                <strong>The total amount of</strong>
                                                <strong>
                                                    <p className="mb-0">(including VAT)</p>
                                                </strong>
                                            </div>
                                            <span><strong>₹<span>1200</span></strong></span>
                                        </li>
                                    </ul>

                                    <form action="" method="post"  >
                                        <button type="submit" className="btn btn-primary btn-block waves-effect waves-light" style={{ marginLeft: '0%' }}>Pay Now</button>
                                    </form>

                                </div>
                            </div>
                            <div className="cardy mb-4" style={{ border: "0.3px solid lightgray" }}>
                                <div className="card-body">

                                    <a className="dark-grey-text d-flex justify-content-between" data-toggle="collapse" href="#collapseExample"
                                        aria-expanded="false" aria-controls="collapseExample">
                                        Add a discount code (optional)
                                        <span><i className="fas fa-chevron-down pt-1"></i></span>
                                    </a>

                                    <div className="collapse" id="collapseExample">
                                        <div className="mt-3">
                                            <div className="md-form md-outline mb-0">
                                                <input type="text" id="discount-code" className="form-control font-weight-light"
                                                    placeholder="Enter discount code" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>


            </div>
        </>
    )
}


export default AddressPage