import { FormFeedback } from "reactstrap";
import React, { useEffect, useState } from "react";
import { signUp } from "../../services/user-service";
import { ToastContainer, toast } from "react-toastify";
// import signup from "./Signup.css";

import login from "../../assets/LoginSignupImg/login.gif";
import signup from "./Signup.css";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const [data, setData] = useState({
    name: "",
    mobileNumber: "",
    emailId: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value });
  };
  const resetData = () => {
    setData({
      name: "",
      emailId: "",
      password: "",
      mobileNumber: "",
    });
  };

  const submitForm = (event) => {
    event.preventDefault();

    if (error.isError) {
      // toast.error("Form data is invalid, check all details given ")
      alert("Form data is invalid, check all details given ");
      setError({ ...error, isError: false });
      return;
    }

    console.log(data);

    signUp(data)
      .then((resp) => {
        console.log(resp);
        console.log("success log");
        toast.success("🦄 Login!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        resetData();
        

        // alert("User registered successfully!");
      })
      .catch((error) => {
        console.log(error);
        console.log("Error log");

        setError({
          errors: error,
          isError: true,
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
                invalid={error.errors?.response?.data?.name ? "true" : "false"}
              />
              <FormFeedback>
                {error.errors?.response?.data?.name}
              </FormFeedback>
              <label> Name</label>
            </div>
            <div className="field">
              <input
                type="emailId"

                id="emailId"
                onChange={(e) => handleChange(e, "emailId")}
                value={data.emailId} required
                invalid={error.errors?.response?.data?.emailId ? "true" : "false"}
              />
              <FormFeedback>
                {error.errors?.response?.data?.emailId}
              </FormFeedback>
              <label> Email</label>
            </div>
            <div className="field">
              <input
                type="tel"

                id="mobileNumber"
                onChange={(e) => handleChange(e, "mobileNumber")}
                value={data.mobileNumber} required
                invalid={
                  error.errors?.response?.data?.mobileNumber ? "true" : "false"
                }
              />
              <FormFeedback>
                {error.errors?.response?.data?.mobileNumber}
              </FormFeedback>
              <label> Mobile</label>
            </div>
            <div className="field">
              <input
                type="password"

                id="password"
                onChange={(e) => handleChange(e, "password")}
                value={data.password} required
                invalid={
                  error.errors?.response?.data?.password ? "true" : "false"
                }
              />
              <FormFeedback>
                {error.errors?.response?.data?.password}
              </FormFeedback>

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
