import React from 'react';
import '../css/signup.css';
import { useNavigate } from "react-router-dom";



function Login() {
  const navigate = useNavigate();
  return (
    <div className="signup-page" id="login">
        <div className="signup-hero">
          <h1>Login!</h1>
        </div>
        <div className="signup-box">
          <div className="bg-container">
          <div className="form-container">
            <form className="signup-form" id="signup-form">
              <h2>Log in!</h2>
              <input className="field" type="text" id="username-signup" placeholder="Username"></input>
              <input className="field" type="email" id="email-signup" placeholder="Email"></input>
              <input className="field" type="password" id="password-signup" placeholder="Password"></input>
              <button className="form-btn" type="submit" >Log in</button>
              <h3 className="">Need an account? </h3>
              <button onClick={()=> navigate("/signup")} className="login-btn"> Register </button>
              <h4>Go Back</h4>
                <div className="btn-wrapper2">
                  <button onClick={()=> navigate("/")}>Home</button>
                  <button onClick={()=> navigate("/shop")}>Shop</button>
                </div>
            </form>
            </div>
          </div>
        </div>
    </div>
    
  );
}

export default Login;