import React from 'react';
import { useNavigate } from "react-router-dom";
import '../css/signup.css';

function Signup() {
  const navigate = useNavigate();
  return (
    <div className="signup-page" id="signup">
        <div className="signup-hero">
          <h1>Signup!</h1>
        </div>
        <div className="signup-box">
          <div className="bg-container">
          <div className="form-container">
            <form className="signup-form" id="signup-form">
              <h2>Sign up today!</h2>
              <input className="field" type="text" id="username-signup" placeholder="Username"></input>
              <input className="field" type="email" id="email-signup" placeholder="Email"></input>
              <input className="field" type="password" id="password-signup" placeholder="Password"></input>
              <button className="form-btn" type="submit" >Create Account</button>
              <h3 className="">Have an account? </h3>
              <button onClick={()=> navigate("/login")} className="login-btn"> Login </button>
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

export default Signup;