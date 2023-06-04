import React, { useState,useEffect } from 'react';
import "./Address.css"
import { Link } from "react-router-dom"
import { FormGroup, Form, Input, Label, Row, Col } from 'reactstrap';
import Modal from './Modal';
import axios from 'axios';

import Swal from 'sweetalert2';

function Address() {

    const [data, setData] = useState([]);
    const [deliveryDetailsId, setDeliveryDetailsId] = useState(1);
    const [paymentMethod, setPaymentMethod] = useState("COD");

   const fetchdata = () => {
    axios.get("http://localhost:8080/api/deliveryDetails/user/" + localStorage.getItem("userId"))
    // axios.get("http://localhost:8080/api/deliveryDetails/" )
        .then((resp) => {
            console.log(resp["data"]);
            setData(resp["data"]);
        })
}

useEffect(() => {
    fetchdata();
}, []);


    




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

    const submitForm = (e) => {
        e.preventDefault();
        const formdata = new FormData(e.target);
        const data = Object.fromEntries(formdata.entries());
        data["tempUserId"] = localStorage.getItem("userId");
        console.log(data);
        axios.post("http://localhost:8080/api/deliveryDetails/", data)
            .then((resp) => {
                console.log("success log");
                Swal.fire({
                    title: "Success",
                    text: "Address Added Successfully",
                    icon: "success",
                });
                fetchdata();
                closeModal();
            }
            )

    }
    const refresh = () => window.location.reload(true)

  const [datas, setDatas] = useState({
    userId: localStorage.getItem("userId"),
    deliveryDetailsId: deliveryDetailsId,
    paymentMethod: paymentMethod,
  });

 
  const checkout = (e) => {
    e.preventDefault();
    console.log(datas);
    axios
        .post("http://localhost:8080/api/order/", datas)
        .then((resp) => {
            console.log(resp["data"]);
            Swal.fire({
                title: "Success",
                text: "Order Placed Successfully",
                icon: "success",
            });
        })
        .catch((error) => {
            console.log(error);
        });
};






    return (
        <>
            <div>
                <div className="addresspage-con">
                    <div className="delivery-first" >

                        <h3 style={{ marginBottom: '40px' }}>1. Delivery Address</h3>
                        {
                            data.map((item) => {
                                return (
                                    <>
                        
                        <div class="form-check-delivery">
                            <input class="form-check-input" value={item.deliveryDetailsId} 
                            onChange={(e) => setDatas({ ...datas, deliveryDetailsId: e.target.value })}
                              type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                {item.name},
                                {item.addressLine1},
                                {item.addressLine2},
                                {item.city},
                                {item.pincode}
                                <br />
                                {item.state}
                                <button onClick={openModal} style={{ border: '0', backgroundColor: 'white',marginLeft:'20px',color:'gray'}} ><i class="ri-pencil-fill" ></i></button>  
                            </label>
                        </div>
                        </>
                                )
                            })
                        }

                       


                        <button onClick={openModal} style={{ border: '0', backgroundColor: 'white',marginTop:'10px' }} ><i class="ri-add-line"></i> Add New Address</button>
                        <Modal isOpen={isOpen} onClose={closeModal}>
                            <div className="modal-div" >
                                <div className="popup-content">
                                    <h5 style={{ marginBottom: '30px' }}>Add New Address Here</h5>
                                    <Form onSubmit={submitForm} >
                                        <Row>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="name">
                                                        Name
                                                    </Label>
                                                    <Input
                                                        id="name"
                                                        name="name"
                                                        placeholder="name"
                                                        type="name"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="mobile">
                                                        Mobile Number
                                                    </Label>
                                                    <Input
                                                        id="mobile"
                                                        name="mobile"
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
                                                name="addressLine1"
                                                placeholder="1234 Main St"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleAddress2">
                                                Address 2
                                            </Label>
                                            <Input
                                                id="exampleAddress2"
                                                name="addressLine2"
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
                                                        <select class="form-select" name="state" id="inputGroupSelect02">
                                                            <option selected>Choose...</option>
                                                            <option selected>Choose...</option>
                                                            <option value="Andhra Pradesh"> Andhra Pradesh</option>
                                                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                                            <option value="Assam">Assam</option>
                                                            <option value="Bihar">Bihar</option>
                                                            <option value="Chhattisgarh">Chhattisgarh</option>
                                                            <option value="Goa">Goa</option>
                                                            <option value="Gujarat">Gujarat</option>
                                                            <option value="Haryana">Haryana</option>
                                                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                                                            <option value="Jharkhand">Jharkhand</option>
                                                            <option value="Karnataka">Karnataka</option>
                                                            <option value="Kerala">Kerala</option>
                                                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                                                            <option value="Maharastra">Maharastra</option>
                                                            <option value="Manipur">Manipur</option>
                                                            <option value="Meghalaya">Meghalaya</option>
                                                            <option value="Mizoram">Mizoram</option>
                                                            <option value="Nagaland">Nagaland</option>
                                                            <option value="Odisha">Odisha</option>
                                                            <option value="Punjab">Punjab</option>
                                                            <option value="Rajasthan">Rajasthan</option>
                                                            <option value="Sikkim">Sikkim</option>
                                                            <option value="Tamil Nadu">Tamil Nadu</option>
                                                            <option value="Telangana">Telangana</option>
                                                            <option value="Tripura">Tripura</option>
                                                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                                                            <option value="Uttrakhand">Uttrakhand</option>
                                                            <option value="West Bengal">West Bengal</option>
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
                                                        name="pincode"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    <button className='btn btn-success 'type='submit' onClick={handleClosePopup}>Done</button>
                                    </Form>
                                </div>
                            </div>
                        </Modal>
                    </div>
                    <div className="payment-methods">
                        <h3 style={{ marginBottom: '40px' }}>2. Payment Methods </h3>
                        <div class="form-check">
                            <input class="form-check-input" value="Online" type="radio" name="flexRadioDefault1" id="flexRadioDefault5" 
                            onChange={(e) => setDatas({ ...datas, paymentMethod: e.target.value })}
                            />
                            <label class="form-check-label" for="flexRadioDefault5">
                                Pay Online
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" value="COD" name="flexRadioDefault1" id="flexRadioDefault6"
                                onChange={(e) => setDatas({ ...datas, paymentMethod: e.target.value })}
                             />
                            <label class="form-check-label" for="flexRadioDefault6">
                                Cash On Delivery
                            </label>
                        </div>
                        <div className="button" onClick={checkout} >
                            <Link  style={{ border: '0', backgroundColor: 'green', marginTop: '10px' }} className="btn btn-primary">Continue</Link>
                        </div>

                    </div>




                </div>


            </div>


        </>
    )
}

export default Address