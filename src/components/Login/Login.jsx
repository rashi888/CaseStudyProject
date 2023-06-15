import "./Login.css"
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import login from "../../assets/LoginSignupImg/loginsignup1.gif";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Swal from "sweetalert2";
import GitHubLogin from 'react-github-login';
import jwt_decode from "jwt-decode"



function Login() {

  const onSuccess = (response) => {
    // console.log(response);
    const token = response.code;
    const client_id = "Iv1.781b6a8be3b8aa24";
    const client_secret = "7e4df136172e715f5f7ae915696457800aec1278";
    axios.post("https://github.com/login/oauth/access_token?client_id=" + client_id + "&client_secret=" + client_secret + "&code=" + token,
      {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    ).then((response) => {
      console.log(response);
    })
      .catch((error) => {
        console.log(error);
      })

  }

  const makeAPICall = async () => {
    try {
      const response = await fetch('http://localhost:8080/login', { mode: 'cors' });
      const data = await response.json();
      console.log({ data })
    }
    catch (e) {
      console.log(e)
    }
  }

  const onFailure = (response) => console.error(response);

  const handleCredentialResponse = (response) => {
    console.log(response.credential);
    const token = response.credential;
    const decoded = jwt_decode(token);
    console.log(decoded);
    const data = {
      name: decoded.name,
      emailId: decoded.email,

    };
    console.log(data);

    axios.post("http://localhost:8080/api/users/OAuth", data).then((response) => {
      console.log(response.data);
      console.log(response);
      window.localStorage.setItem("token", response.data.token);
      window.localStorage.setItem("userId", response.data.userId);
      window.localStorage.setItem("role", response.data.role);
      window.localStorage.setItem("name", response.data.name);
      navigate("/");
    }
    ).catch((error) => {
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
  }

  useEffect(() => {
    makeAPICall();
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    google.accounts.id.initialize({
      client_id: '889458596682-oujv8pjnafnps4o28rdii03t9bhtn5qq.apps.googleusercontent.com',
      callback: handleCredentialResponse,
      auto_select: true,
      cancel_on_tap_outside: false
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {
        theme: "outline",
        size: "large",
        text: "Continue with Google",
        shape: "circle",
      }
    );
  }, [])

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
      window.localStorage.setItem("role", response.data.role);


      Swal.fire({
        title: "Login Successfull",
        text: "You have successfully logged in!",
        icon: "success",
      });

      if (response.data.role === "USER")
        navigate("/");
      else if (response.data.role === "MERCHANT")
        navigate("/mdash");
      else if (response.data.role === "ADMIN")
        navigate("/admindashboard");
      else
        navigate("/login");

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

      <div className="login-form-container">
        <div className="left-gif-portion">
          <img class="logingif" src={login} />
        </div>
        <div className="right-content-portion">

          <form className="loginformy" onSubmit={submitForm}>
            <div className="title">Login</div>
            <div className="field">
              <input
                type="emailId"
                id="emailId"
                onChange={(e) => handleChange(e, "emailId")}
                value={data.emailId}
                required

              />
              <label >Email Address</label>
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
            <div className="field">
              <input type="submit" value="Login" />
            </div>
            <div className="midd">
              <div className="hrline"></div>
              <h6 style={{ fontWeight: 300 }}>Or</h6>
              <div className="hrline"></div>
            </div>
            <div className="google-btn" id="signInDiv"></div>
            {/* <div className="github-btn">
              <i class="ri-github-fill" ></i>
              <GitHubLogin clientId="7c2801c627dcd73b7745"
                onSuccess={onSuccess}
                onFailure={onFailure}
                redirectUri=""
                className="github-style"
              />
            </div> */}

            <div className="login-link">
              Not a member? <a href="signup" style={{ textDecoration: 'none' }}>Signup now</a>
            </div>
          </form>
        </div>
      </div>
      <script src="https://accounts.google.com/gsi/client"></script>

    </>

  )
}

export default Login