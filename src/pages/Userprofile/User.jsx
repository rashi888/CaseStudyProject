import React, { useState } from 'react'
import "./User.css"
import userIcon from "../../assets/All_Icons/userimg.jpeg"
import { BiUserCircle } from "react-icons/bi"
import { RiShoppingCartFill } from "react-icons/ri"
import { RiHeartLine } from "react-icons/ri"
import { RiSettings2Fill } from "react-icons/ri"
import { FiPower } from "react-icons/fi"
import { Link } from 'react-router-dom'
import axios from "axios"
import Swal from "sweetalert2";
import { Form, FormGroup, Label, Input, FormText, Col, Button, FormGroupProps, Row } from "reactstrap"

function User() {

    const [name, setName] = useState('');
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');

    const userId = localStorage.getItem("userId");

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const updatedProfile = {
            name,
            emailId,
            password,
            mobileNumber
        };

        try {
            const response = await axios.put(`http://localhost:8080/api/users/${userId}`, updatedProfile, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token"),
                    // authorization: localStorage.getItem("token"),

                },
            });
            console.log(response.data);
            Swal.fire({
                title: "Success",
                text: "User Profile Updated Successfully",
                icon: "success",
            });
            return response.data;
        } catch (error) {
            return error.response.data;
        }


        // Send the updated profile data to the backend API
        //   axios.put(`http://localhost:8080/api/users/${userId}`, updatedProfile)
        //     .then(response => {
        //       // Handle the response here (e.g., show success message, redirect, etc.)
        //       console.log(response.data);
        //     })
        //     .catch(error => {
        //       // Handle error response here (e.g., show error message, etc.)
        //       console.error(error);
        //     });
    };



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
                            <Link to="/user" className='linking'><h6 className='headings'>My Account</h6></Link>

                        </div>
                        <div className="myaccount">
                            <RiShoppingCartFill id='icon2' />
                            <Link to="/orders" className='linking'><h6 className='headings'> Order History</h6></Link>
                        </div>

                        <div className="myaccount">
                            <i class="ri-user-location-fill" id='icon3'></i>
                            <Link to="/addressuser" className='linking'><h6 className='headings'> Addresses</h6></Link>
                        </div>
                        <div className="myaccount">
                            <FiPower id='icon5' />
                            <h6 className='headings'> Log Out</h6>
                        </div>
                    </div>

                </div>
                <div className="right-side-content">
                    <h3 style={{ marginTop: '-60px', marginBottom: '30px', color: 'gray' }}> Update Yor Profile!</h3>
                    <Form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="username">
                                    Name
                                </Label>
                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="Enter Name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="emailId">
                                    Email
                                </Label>
                                <Input
                                    id="emailId"
                                    name="emailId"
                                    placeholder="Enter Email"
                                    type="email"
                                    value={emailId}
                                    onChange={(e) => setEmailId(e.target.value)}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="examplePassword">
                                    Password
                                </Label>
                                <Input
                                    id="password"
                                    name="password"
                                    placeholder="Enter Password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
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
                                    placeholder="Enter Mobile Number"
                                    type="tel"
                                    value={mobileNumber}
                                    onChange={(e) => setMobileNumber(e.target.value)}
                                />
                            </FormGroup>
                        </Col>
                        <Button onClick={handleFormSubmit} className='edit-button' style={{ marginLeft: '15px', marginTop: '20px' }}>
                            Update Profile
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default User