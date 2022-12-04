import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";
const Login = () => {
  const Navigate = useNavigate();

  const [state, setState] = useState({ email: "", password: "" });


  const handleLogin = () => {
    axios({
      url: "http://localhost:3005/",
      method: "POST",
      headers: {},
      data: { email: state.email, password: state.password },
    })
      .then((loginData) => {
        localStorage.setItem("authorization", loginData.data.authToken);
        Navigate("/booklist");
      })
      .catch((err) => {
        
        console.log(err);
      });
  };

  return (
    <div className="login_container">
      <div className="login">
        <h2 className="loginh1">Member Login</h2> <br />
        
        <input
          className="logininput"
          type="text"
          id="username"
          placeholder="Username"
          onChange={(e) => {
            setState({ ...state, email: e.target.value });
          }}
        />{" "}
        <br />
        <div className="input-element-wrapper">
          <input
            className="logininput"
            type="text"
            id="passwordLI"
            placeholder="Password"
            onChange={(e) => {
              setState({ ...state, password: e.target.value });
            }}
          />
        </div>
        <button className="registerbtn" onClick={handleLogin}>
          login
        </button>{" "}
        <br />
        <p
          onClick={() => {
            Navigate("/register");
          }}
          className="registertext"
        >
          Forgot Password?
        </p>
      </div>
    </div>
  );
};

export default Login;