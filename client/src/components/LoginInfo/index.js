import React, { useState } from "react";
import './style.css';
import { useNavigate } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { LOGIN } from "../../utils/mutations"
import Auth from "../../utils/auth";


function LoginInfo() {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({ email: '', password: '' })
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const mutationResponse = await login({ variables: { email: formState.email, password: formState.password } })
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e)
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <div className="signup-page" id="login">
        <div className="signup-hero">
          <h1>Login!</h1>
        </div>
        <div className="signup-box">
          <div className="bg-container">
          <div className="form-container">
            <form className="signup-form" id="signup-form" onSubmit={handleFormSubmit}>
              <h2>Log in!</h2>
              <input className="field" type="email" id="email-signup" name="email" placeholder="Email" onChange={handleChange}></input>
              <input className="field" type="password" id="password-signup" name="password" placeholder="Password" onChange={handleChange}></input>
              <button className="form-btn" type="submit" >Log in</button>
              {
                error ? <div>
                  <p className="error-text" >The provided credentials are incorrect</p>
                </div> : null
              }
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

export default LoginInfo;