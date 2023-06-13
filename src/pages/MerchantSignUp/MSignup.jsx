import { FormFeedback } from "reactstrap";
import React, { useEffect, useState } from "react";
import { signUp } from "../../services/user-service";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
// import signup from "./Signup.css";

// import login from "../../assets/LoginSignupImg/login.gif";
// import merchantimg from "../../assets/MSignupImg/Merchant Sign up page.png";
import merchantimg from "../../assets/MSignupImg/msignupImg.png";
import msignup from "../../assets/MSignupImg/msignup.jpg"
import "./MSignup.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const MSignup = () => {
    const [data, setData] = useState({
        name: "",
        mobileNumber: "",
        emailId: "",
        password: "",
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



        axios.post("http://localhost:8080/api/users/msignup", data).then((response) => {
            console.log(response.data);
            Swal.fire({
                title: "Success",
                text: "User Registered Successfully",
                icon: "success",
            });
            navigate("/login");
        }).catch((error) => {
            console.log(error);
            toast.error(" Invalid Credentials!", {
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
            <div className="merchant-signup">
                <div className="right-credantials">
                    <form className="loginform" onSubmit={submitForm}>
                        <div className="title" style={{marginBottom:"-12px"}}> Become a Merchant</div>
                        <div className="field">
                            <input
                                type="text"

                                id="name"
                                onChange={(e) => handleChange(e, "name")}
                                value={data.name} required
                            />

                            <label> Name</label>
                        </div>
                        <div className="field">
                            <input
                                type="emailId"

                                id="emailId"
                                onChange={(e) => handleChange(e, "emailId")}
                                value={data.emailId} required
                            />

                            <label> Email</label>
                        </div>
                        <div className="field">
                            <input
                                type="tel"

                                id="mobileNumber"
                                onChange={(e) => handleChange(e, "mobileNumber")}
                                value={data.mobileNumber} required

                            />

                            <label> Mobile</label>
                        </div>
                        <div className="field">
                            <input
                                type="password"

                                id="password"
                                onChange={(e) => handleChange(e, "password")}
                                value={data.password} required

                            />
                            <label>Password</label>
                        </div>
                        <div className="field">
                            <input
                                type="password"
                                id="confirmpassword"
                                onChange={(e) => handleChange(e, "confirmPassword")} // Update the property name
                                value={data.confirmPassword} // Update the property name
                                required
                            />

                            <label>Confirm Password</label>
                        </div>


                        {/* <div className="content">
                            <div className="checkbox">
                                <input type="checkbox" id="remember-me" />
                                <label htmlFor="remember-me">Remember me</label>
                            </div>
                            <div className="pass-link">
          <a href="#">Forgot password?</a>
        </div>
                        </div> */}


                        <div className="field register-btn" style={{marginTop:'30px'}}>
                            <input type="submit" value="Register" />
                        </div>
                        <div className="signup-link">
                            Already a member? <a href="login">Login</a>
                        </div>
                    </form>
                </div>
                <div className="left-image">
                    <img className="merchant-img" src={merchantimg} alt="" height="100%" width="100%" />
                </div>
            </div>
        </>

    );
};

export default MSignup;
