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

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  

  
  const handleChange = (event, property) => {
    // console.log(event.target);
    const {name,value}=event.target;
    setData({ ...data, [property]: event.target.value });
    console.log(data)
  };
  
  const submitForm = (event) => {
    event.preventDefault();
    setFormErrors.validate(data);
    setIsSubmit(true);

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

useEffect(()=>{
  console.log(formErrors);
  if(Object.keys(formErrors).length===0 && isSubmit){
    console.log(data);
  }
},[formErrors]);

const validate=(values)=>{
  const errors={}
  const regex=/^[^\$@]+@[^\$@]+\.[^\$@]{2,}$/i;
  if(!values.name){
    errors.name="Username is required";
  }
  if(!values.emailId){
    errors.emailId="Email is required";
  }else if(!regex.test(values.emailId)){
    errors.emailId="This is not a valid email format!"
  }
  if(!values.password){
    errors.password="Password is required";
  }else if(!regex.test(values.password.lenght<4)){
    errors.emailId="Password Must be more than 4 characters"
  }else if(!regex.test(values.password.lenght>10)){
    errors.emailId="Password cannot exceed more than 10 characters"
  }
  if(!values.mobileNumber){
    errors.mobileNumber="Password is required";
  }
  return errors;
}


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
      <div className="wrapper" style={{height: 'fit-content',margin:'40px 70px'}}>
        <div className="formcont" style={{top:'-20px',margin:'10px 50px'}}>
          <img className="logingif" src={login} alt="" />

          <pre>{JSON.stringify(data,undefined,2)}</pre>
          <form className="loginform" onSubmit={submitForm} style={{marginTop:'20px',width:'300px'}}>
            <div className="title">Sign-up</div>
            <div className="field">
              <input
                type="text"

                id="name"
                onChange={(e) => handleChange(e, "name")}
                value={data.name} required
                // placeholder="name"
              />
              <label> Name</label>
              <p>{formErrors.name}</p>
            </div>
            <div className="field">
              <input
                type="emailId"

                id="emailId"
                onChange={(e) => handleChange(e, "emailId")}
                value={data.emailId} required
              />
             
              <label> Email</label>
              <p>{formErrors.emailId}</p>
            </div>


            <div className="field">
              <input
                type="tel"
                id="mobileNumber"
                onChange={(e) => handleChange(e, "mobileNumber")}
                value={data.mobileNumber} required
                
              />
             
              <label> Mobile</label>
              <p>{formErrors.mobileNumber}</p>

            </div>
            <div className="field">
              <input
                type="password"

                id="password"
                onChange={(e) => handleChange(e, "password")}
                value={data.password} required
               
              />
             

              <label>Password</label>
              <p>{formErrors.password}</p>
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
