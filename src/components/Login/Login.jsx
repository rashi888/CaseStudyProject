import { FormFeedback } from "reactstrap";
import { Link } from "react-router-dom";
import "./Login.css";
import React, { useEffect, useState } from "react";
import { signIn, signUp } from "../../services/user-service";
import { useNavigate } from "react-router-dom";
import login from "../../assets/LoginSignupImg/login.gif";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();

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
        console.log(resp);
        console.log("success log");
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
      <div className="wrapper" style={{ backgroundColor: "white" }}>
        <div className="formcont">
          <img class="logingif" src={login} alt="" />

          <form className="loginform" onSubmit={submitForm}>
            <div className="title">Login</div>
            <div className="field">
              <input
                type="emailId"
                id="emailId"
                onChange={(e) => handleChange(e, "emailId")}
                value={data.emailId}
                required
                invalid={
                  error.errors?.response?.data?.emailId ? "true" : "false"
                }
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
                value={data.password}
                required
                invalid={
                  error.errors?.response?.data?.password ? "true" : "false"
                }
              />
              <FormFeedback>
                {error.errors?.response?.data?.password}
              </FormFeedback>{" "}
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
