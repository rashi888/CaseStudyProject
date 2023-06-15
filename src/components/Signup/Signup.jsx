import signupimg from "../../assets/LoginSignupImg/loginsignup1.gif";
import "./Signup.css"
import { FormFeedback } from "reactstrap";
import React, { useEffect, useState } from "react";
import { signUp } from "../../services/user-service";
import { ToastContainer, toast } from "react-toastify";
// import signup from "./Signup.css";
import jwt_decode from "jwt-decode";
import loginimg from "../../assets/LoginSignupImg/loginsignup1.gif";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";


function Signup() {

    const [data, setData] = useState({
        name: "",
        mobileNumber: "",
        emailId: "",
        password: "",
        confirmPassword: "",
    });
    const navigate = useNavigate();

    const handleChange = (event, property) => {
        setData({ ...data, [property]: event.target.value });
    };

    const submitForm = (event) => {
        event.preventDefault();
        
        if (data.password !== data.confirmPassword) {
            toast.error("Passwords do not match!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
            });
            return;
        }

        axios.post("http://localhost:8080/api/users/signup", data).then((response) => {
            console.log(response.data);
            Swal.fire({
                title: "Success",
                text: "User Registered Successfully",
                icon: "success",
            });
            login();



        }).catch((error) => {
            const errorMsg = error.response.data.message;
            if (errorMsg.includes("Email"))
                toast.error("Email already exists!", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
            else


                toast.error(" Invalid Credentials!", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                });

        });
    };

    const login = () => {
        axios.post("http://localhost:8080/api/users/login", data).then((response) => {
            console.log(response.data);
            window.localStorage.setItem("token", response.data.token);
            window.localStorage.setItem("userId", response.data.userId);
            window.localStorage.setItem("role", response.data.role);
            window.localStorage.setItem("name", response.data.name);
            navigate("/");
        }).catch((error) => {
            const errorMsg = error.response.data.message;
            if (errorMsg.includes("Email"))
                toast.error("Email already exists!", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
        });
    };



    return (
        <>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <meta charSet="utf-8" />
            <div className="signup-form-container">
                <div className="left-gif-portion-signup">
                    <img class="signupgif" src={signupimg} width="100%" height="100%" />
                </div>
                <div className="right-content-portion-signup">
                    <form className="signupform" onSubmit={submitForm}>
                        <div className="title-signup" >Sign-up</div>
                        <div className="field-signup">
                            <input
                                type="text"

                                id="name"
                                onChange={(e) => handleChange(e, "name")}
                                value={data.name} required

                            />

                            <label> Name</label>
                        </div>
                        <div className="field-signup">
                            <input
                                type="emailId"

                                id="emailId"
                                onChange={(e) => handleChange(e, "emailId")}
                                value={data.emailId} required
                            />

                            <label> Email</label>
                        </div>
                        <div className="field-signup">
                            <input
                                type="tel"
                                pattern="[6-9]{1}[0-9]{9}"
                                minLength={10}
                                maxLength={10}
                                id="mobileNumber"
                                onChange={(e) => handleChange(e, "mobileNumber")}
                                value={data.mobileNumber} required
                            />

                            <label> Mobile</label>
                        </div>
                        <div className="field-signup">
                            <input
                                type="password"
                                minLength={8}
                                id="password"
                                onChange={(e) => handleChange(e, "password")}
                                value={data.password} required
                            />
                            <label>Password</label>
                        </div>

                        <div className="field-signup">
                            <input
                                type="password"
                                id="confirmpassword"
                                onChange={(e) => handleChange(e, "confirmPassword")} // Update the property name
                                value={data.confirmPassword} // Update the property name
                                required
                            />

                            <label>Confirm Password</label>
                        </div>
                        
                        <div className="field-signup">
                            <input type="submit" value="Register" />
                        </div>
                        <div className="signup-link">
                            Already a member? <a href="login">Login</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup