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

                        <h3 style={{ marginBottom: '40px' }}>1. Delivery Address</h3>

                        <div class="form-check-delivery">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                Rashi dixit,
                                Kala bagh balot bypass road, near Siddharth palace ward no.7
                                Ganj Basoda, MADHYA PRADESH 464221
                                <button onClick={openModal} style={{ border: '0', backgroundColor: 'white',marginLeft:'20px',color:'gray'}} ><i class="ri-pencil-fill" ></i></button>  
                            </label>
                        </div>
                        <div class="form-check-delivery">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Samyak Jain,
                                City Centre, Gwalior , MADHYA PRADESH 464221
                                <button onClick={openModal} style={{ border: '0', backgroundColor: 'white',marginLeft:'390px',color:'gray' }} ><i class="ri-pencil-fill" ></i></button>  
                            </label>
                        </div>
                        <div class="form-check-delivery">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Aditi Aliya, Gokuldham green city
                                ganj basoda , MADHYA PRADESH 464221
                              <button onClick={openModal} style={{ border: '0', backgroundColor: 'white',marginLeft:'300px',color:'gray' }} ><i class="ri-pencil-fill" ></i></button>  
                            </label>
                        </div>
                       


                        <button onClick={openModal} style={{ border: '0', backgroundColor: 'white',marginTop:'10px' }} ><i class="ri-add-line"></i> Add New Address</button>
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
                                            <Col md={4}>
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
                                            <Col md={5}>
                                                <FormGroup>
                                                    <Label for="exampleState">
                                                        State
                                                    </Label>
                                                    <div class="input-group mb-3">
                                                        <select class="form-select" id="inputGroupSelect02">
                                                            <option selected>Choose...</option>
                                                            <option value="1"> Andhra Pradesh</option>
                                                            <option value="2">Arunachal Pradesh</option>
                                                            <option value="3">Assam</option>
                                                            <option value="4">Bihar</option>
                                                            <option value="5">Chhattisgarh</option>
                                                            <option value="6">Goa</option>
                                                            <option value="7">Gujarat</option>
                                                            <option value="8">Haryana</option>
                                                            <option value="9">Himachal Pradesh</option>
                                                            <option value="10">Jharkhand</option>
                                                            <option value="11">Karnataka</option>
                                                            <option value="12">Kerala</option>
                                                            <option value="13">Madhya Pradesh</option>
                                                            <option value="14">Maharastra</option>
                                                            <option value="15">Manipur</option>
                                                            <option value="16">Meghalaya</option>
                                                            <option value="17">Mizoram</option>
                                                            <option value="18">Nagaland</option>
                                                            <option value="19">Odisha</option>
                                                            <option value="20">Punjab</option>
                                                            <option value="21">Rajasthan</option>
                                                            <option value="22">Sikkim</option>
                                                            <option value="23">Tamil Nadu</option>
                                                            <option value="24">Telangana</option>
                                                            <option value="25">Tripura</option>
                                                            <option value="26">Uttar Pradesh</option>
                                                            <option value="27">Uttrakhand</option>
                                                            <option value="28">West Bengal</option>
                                                        </select>
                                                    </div>
                                                </FormGroup>
                                            </Col>
                                            <Col md={3}>
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
                        <h3 style={{ marginBottom: '40px' }}>2. Payment Methods </h3>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault5" />
                            <label class="form-check-label" for="flexRadioDefault5">
                                Payment Online
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault6" />
                            <label class="form-check-label" for="flexRadioDefault6">
                                Cash On Delivery
                            </label>
                        </div>
                    </div>




                </div>


            </div>


        </>
    )
}

export default Address