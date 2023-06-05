import React from 'react'
import "./User.css"
import userIcon from "../../assets/All_Icons/userimg.jpeg"
import { BiUserCircle } from "react-icons/bi"
import { RiShoppingCartFill } from "react-icons/ri"
import { RiHeartLine } from "react-icons/ri"
import { RiSettings2Fill } from "react-icons/ri"
import { FiPower } from "react-icons/fi"
import { Link } from 'react-router-dom'
import { Form, FormGroup, Label, Input, FormText, Col, Button, FormGroupProps, Row } from "reactstrap"

function AddressUser() {
    return (
        <>
            <div className="user-container">
                <div className="left-side-contain">
                    <div className="top-content">
                        <img src={userIcon} alt="" height="200px" width="300px" />
                        <h1>Hello, User</h1>
                    </div>
                    <div className="bottom-content">
                        <div className="myaccount">
                            <BiUserCircle id='icon1' />
                            <h6 className='headings'>My Account</h6>
                        </div>
                        <div className="myaccount">
                            <RiShoppingCartFill id='icon2' />
                            <Link to="orders" className='linking'><h6 className='headings'> Order History</h6></Link>
                        </div>
                        {/* <div className="myaccount">
                            <RiHeartLine id='icon3' />
                            <h6 className='headings'>Wishlist</h6>
                        </div> */}
                        <div className="myaccount">
                            <i class="ri-user-location-fill" id='icon3'></i>
                            <h6 className='headings'> Addresses</h6>
                        </div>
                        <div className="myaccount">
                            <FiPower id='icon5' />
                            <h6 className='headings'> Log Out</h6>
                        </div>
                    </div>

                </div>
                <div className="right-side-content">
                    <Form>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleEmail">
                                        Email
                                    </Label>
                                    <Input
                                        id="exampleEmail"
                                        name="email"
                                        placeholder="Enter Email"
                                        type="email"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="examplePassword">
                                        Password
                                    </Label>
                                    <Input
                                        id="examplePassword"
                                        name="password"
                                        placeholder="Enter Password"
                                        type="password"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        {/* <FormGroup>
                            <Label for="exampleAddress">
                                Address
                            </Label>
                            <Input
                                id="exampleAddress"
                                name="address"
                                placeholder="Address1"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleAddress2">
                                Address 2
                            </Label>
                            <Input
                                id="exampleAddress2"
                                name="address2"
                                placeholder="Address2"
                            />
                        </FormGroup> */}
                        {/* <Row>
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
                        </Row> */}
                        <FormGroup check style={{ margin: '10px 0px' }}>
                            <Input
                                id="exampleCheck"
                                name="check"
                                type="checkbox"
                            />
                            <Label
                                check
                                for="exampleCheck"

                            >
                                Check me out
                            </Label>
                        </FormGroup>
                        <Button className='edit-button'>
                            Edit Profile
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default AddressUser