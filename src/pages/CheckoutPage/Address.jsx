import React, { useState } from 'react';
import "./Address.css"
import { Link } from "react-router-dom"
import { FormGroup, Form, Input, Label, Row, Col } from 'reactstrap';
import Modal from './Modal';


function Address() {

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const handleButtonClick = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };


    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };


    return (
        <>
            <div>
                <div className="addresspage-con">
                    <div className="delivery-first" >

                        <h3 style={{marginBottom:'40px'}}>1. Delivery Address</h3>

                        <div class="input-group mb-3"  >
                            <div class="input-group-text" style={{ width: '40px' }}>
                                <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" style={{ marginLeft: '0px' }} />
                            </div>
                            <input type="text" class="form-control" aria-label="Text input with checkbox" placeholder=' Rashi dixit,
                        Kala bagh balot bypass road, near Siddharth palace ward no.7
                        Ganj Basoda, MADHYA PRADESH 464221'/>
                        </div>

                        <div class="input-group mb-3"  >
                            <div class="input-group-text" style={{ width: '40px' }}>
                                <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" style={{ marginLeft: '0px' }} />
                            </div>
                            <input type="text" class="form-control" aria-label="Text input with checkbox" placeholder=' Samyak Jain,
                        City Centre, Gwalior , MADHYA PRADESH 464221'/>
                        </div>

                        <div class="input-group mb-3"  >
                            <div class="input-group-text" style={{ width: '40px' }}>
                                <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" style={{ marginLeft: '0px' }} />
                            </div>
                            <input type="text" class="form-control" aria-label="Text input with checkbox" placeholder='Aditi Aliya, Gokuldham green city 
                        ganj basoda , MADHYA PRADESH 464221'/>
                        </div>


                        <button onClick={openModal} style={{border:'0',backgroundColor:'white'}} ><i class="ri-add-line"></i> Add New Address</button>
                        <Modal isOpen={isOpen} onClose={closeModal}>
                            <div className="modal-div" >
                                <div className="popup-content">
                                    <h5 style={{ marginBottom: '30px' }}>Add New Address Here</h5>
                                    <Form>
                                        <Row>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="name">
                                                        Name
                                                    </Label>
                                                    <Input
                                                        id="name"
                                                        name="text"
                                                        placeholder="name"
                                                        type="name"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="mobileNumber">
                                                        Mobile Number
                                                    </Label>
                                                    <Input
                                                        id="mobileNumber"
                                                        name="mobileNumber"
                                                        placeholder="Mobile Number"
                                                        type="tel"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
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
                                                    <div class="input-group mb-3">
                                                        <select class="form-select" id="inputGroupSelect02">
                                                            <option selected>Choose...</option>
                                                            <option value="1">Delhi</option>
                                                            <option value="2">Madhya Pradesh</option>
                                                            <option value="3">Gujarat</option>
                                                            <option value="4">Haryana</option>
                                                        </select>
                                                    </div>
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
                        </Modal>
                    </div>
                <div className="payment-methods">
                    
                </div>




                </div>


            </div>


        </>
    )
}

export default Address