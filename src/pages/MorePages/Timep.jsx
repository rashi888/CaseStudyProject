import React, { Component, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate, useLocation } from "react-router-dom";
import * as Yup from "yup";
import _get from "lodash.get";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
// import admin from "../resources/adminregister.png";

const LoginSchema = Yup.object().shape({
    password: Yup.string().required("Password is required!"),
    username: Yup.string().required("username is required!"),
});

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate();
    const location = useLocation();
    const fromUrl = _get(location, "state.from.pathname");
    const signInSuccess = (userData) => {
        localStorage.setItem("token", userData.token);
        if (fromUrl) {
            // history.push(fromUrl);
            window.location.href = "fromUrl";
        } else {
            // history.push("/");
            window.location.href = "/";
        }
    };

    const login = (userData) => {
        fetch("http://localhost:8682/auth", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                accept: "application/json",
                "Access-Control-Allow-Origin": "*",
                "Authorization": "Bearer " + localStorage.getItem("token"),
            },
            body: JSON.stringify({
                username: userData.username,
                password: userData.password,
            }),
        })
            .then((response) => response.json())
            .then((response) => {
                if (response.response === " Invalid Credentials..!") {
                    alert("your userId and password did not match");
                } else {
                    const userData = {
                        token: response.response,
                        name: username,
                    };
                    signInSuccess(userData);
                    console.log(response);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <Formik
            initialValues={{
                username: "",
                password: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={async (values, { resetForm }) => {
                try {
                    const userData = { ...values };
                    resetForm();
                    login(userData);
                } catch (err) {
                    console.error(err);
                }
            }}
        >
            {() => (
                // <Form>
                //   <div className="outer">
                //     <div className="inner">
                //       <h3>Log in</h3>
                //       <Field name="username" type="text" placeholder="Enter username" />
                //       <Field name="password" type="password" placeholder="Password" />
                //       <button className="auth-button block" onClick={() => {}}>
                //         Login
                //       </button>

                //       <p>
                //         Don't have a account?<Link to="/sign-up"> Register Here</Link>
                //       </p>
                //     </div>
                //   </div>
                // </Form>
                <Row xs={1} md={2}>
                    <Col style={{ marginLeft: '100px !important' }}>
                        <img src={admin} className="img-fluid p-3" alt="Sample image" style={{
                            width: '75%', marginLeft: '50px', marginTop: '30px'
                        }} />
                    </Col>
                    <Col>
                        <Container fluid style={{ paddingTop: '30px' }}>
                            <Card className="p-5 mb-5" style={{ width: 'auto' }}>
                                <Form>
                                    <label>Username</label>
                                    <br />
                                    <Field className="mb-3 p-2 mt-2" name="username" type="text" placeholder=" Enter Username" style={{ width: '100%' }} />
                                    <ErrorMessage style={{ color: 'red' }} name="username" component="div" className="error-message" />
                                    <br />
                                    <label className="mt-1">Password</label>
                                    <br />
                                    <Field className="mb-3 p-2 mt-2" name="password" type="password" placeholder="Enter Password" style={{ width: '100%', marginTop: '5px' }} />
                                    <ErrorMessage style={{ color: 'red' }} name="password" component="div" className="error-message" />
                                    <br />
                                    <button style={{ backgroundColor: 'black', color: 'white', borderRadius: '3px', fontWeight: '10px', border: 'none', width: '150px' }} className="auth-button block p-2" onClick={() => { }}>
                                        Sign In
                                    </button>
                                    <br />
                                    <p style={{ marginTop: '7px' }}>
                                        Don't have a account?<Link to="/signUp"> Register Here</Link>
                                    </p>
                                </Form>
                            </Card>
                        </Container>

                    </Col>
                </Row>
            )}
        </Formik>
    );
};

export default Login;