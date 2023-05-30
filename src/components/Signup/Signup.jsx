import { FormFeedback } from "reactstrap";
import React, { useEffect, useState } from "react";
import { signUp } from "../../services/user-service";
import { ToastContainer, toast } from "react-toastify";
// import signup from "./Signup.css";

import login from "../../assets/LoginSignupImg/login.gif";
import signup from "./Signup.css";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";


const Signup = () => {
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
    axios.post("http://localhost:8080/api/users/signup", data).then((response) => {
      console.log(response.data);
      Swal.fire({
        title: "Success",
        text: "User Registered Successfully",
        icon: "success",
      });
      navigate("/login");
    }).catch((error) => {
      const errorMsg = error.response.data.message;
      if(errorMsg.includes("Email"))
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
      <div className="wrapper" style={{ height: 'fit-content' }}>
        <div className="formcont">
          <img className="logingif" src={login} alt="" />


          <form className="loginform" onSubmit={submitForm}>
            <div className="title">Sign-up</div>
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
            <div className="content">
              <div className="checkbox">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              {/* <div className="pass-link">
          <a href="#">Forgot password?</a>
        </div> */}
            </div>
            <div className="field">
              <input type="submit" value="Register" />
            </div>
            <div className="signup-link">
              Already a member? <a href="login">Login</a>
            </div>
          </form>
        </div>
      </div>
    </>

  );
};

export default Signup;
