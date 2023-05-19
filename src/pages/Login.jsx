import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Nav,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/login.css";
import React, { useEffect, useState } from "react";
import { signIn, signUp } from "../services/user-service";
import { useNavigate } from "react-router-dom";

import login from "../assets/login.mp4";
const LogIn = () => {

  const [data, setData] = useState({
    emailId: "",
    password: "",
  });
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
      emailId: "",
      password: "",
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

    signIn(data)
      .then((resp) => {
        console.log(resp);
        console.log("success log");
        toast.success("User registered successfully!")
        // alert("User Login successfully!");
        navigate("/home");
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
      <meta charSet="utf-8" />
      <div className="wrapper">
        <div className="formcont">
          <video src={login} width="450" height="600" loop autoPlay />

          <form className="loginform" onSubmit={submitForm}>
            <div className="title">Login</div>
            <div className="field">
            <input
                  type="emailId"
                  
                  id="emailId"
                  onChange={(e) => handleChange(e, "emailId")}
                  value={data.emailId} required
                  invalid={error.errors?.response?.data?.emailId ? true : false}
                />
                <FormFeedback>
                  {error.errors?.response?.data?.emailId}
                </FormFeedback>
              <label>Email Address</label>
            </div>
            <div className="field">
            <input
                  type="password"
                  
                  id="password"
                  onChange={(e) => handleChange(e, "password")}
                  value={data.password} required
                  invalid={
                    error.errors?.response?.data?.password ? true : false
                  }
                />
                <FormFeedback>
                  {error.errors?.response?.data?.password}
                </FormFeedback>              <label>Password</label>
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

export default LogIn;
