import { FormFeedback } from "reactstrap";
import { Link } from "react-router-dom";
import "./Login.css";
import React, { useEffect, useState } from "react";
import { signIn, signUp } from "../../services/user-service";
import { useNavigate } from "react-router-dom";
import login from "../../assets/LoginSignupImg/login.gif";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Swal from "sweetalert2";

const Login = () => {



  const [data, setData] = useState({
    emailId: "",
    password: "",
  });
 
  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value });
  };
  const resetData = () => {
    setData({
      emailId: "",
      password: "",
    });
  };

  const navigate = useNavigate();

  const submitForm = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8080/api/users/login", data).then((response) => {
      console.log(response.data);
      window.localStorage.setItem("token", response.data.token);
      window.localStorage.setItem("userId", response.data.userId);
      window.localStorage.setItem("name", response.data.name);

      Swal.fire({
        title: "Login Successfull",
        text: "You have successfully logged in!",
        icon: "success",
      });

      if(response.data.role==="USER")
      navigate("/");
      else
      navigate("/mdash");
    }).catch((error) => {
      console.log(error);
      toast.error("Invalid Credentials!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
      resetData();
      
       
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
      <div className="wrapper" style={{height: 'fit-content',margin:'50px 70px',paddingBottom:'20px' }}>
        <div className="formcont" style={{backgroundColor:'white',margin:'30px',padding:'20px'}}>
          <img class="logingif" src={login} alt="" style={{marginTop:'-30px'}}/>

          <form className="loginform" onSubmit={submitForm} style={{marginTop:'-20px',height:'400px',width:'350px'}}>
            <div className="title">Login</div>
            <div className="field">
              <input
                type="emailId"
                id="emailId"
                onChange={(e) => handleChange(e, "emailId")}
                value={data.emailId}
                required
                
              />
              
              <label>Email Address</label>
            </div>
            <div className="field">
              <input
                type="password"
                id="password"
                onChange={(e) => handleChange(e, "password")}
                value={data.password}
                required
                
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
              <input type="submit" value="Login" />
            </div>
            <div className="signup-link">
              Not a member? <a href="signup">Signup now</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
