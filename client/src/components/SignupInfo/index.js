import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './style.css';
import Auth from "../../utils/auth";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";

function SignupInfo() {
  const [formState, setFormState] = useState({ email: '', password: '', errors: []});
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const valid = await validate(formState);

    if(!valid) {
      console.log(formState.errors.length)
      return
    } else {
      const mutationResponse = await addUser({
        variables: {
          email: formState.email,
          password: formState.password,
          firstName: formState.firstName,
          lastName: formState.lastName
        }
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormState({
      ...formState,
      [name]: value
    })
    console.log(formState)
  };

  const validate = async (formState) =>{
    const { email, password, firstName, lastName } = formState;
    const errors = []

    if (!email){
      console.log('email error')
      errors.push({type: 'email', message: 'A valid email required.'})
    }
    if (!password || password.length < 5 ){
      console.log('password error')
      errors.push({type: 'password', message: 'A password of 5 or more characters is required.'})
    }
    if (!firstName){
      console.log('first name error')
      errors.push({type: 'firstName', message: 'A valid first name is required.'})
    }
    if (!lastName){
      console.log('last name error')
      errors.push({type: 'lastName', message: 'A valid last name is required.'})
    }

    setFormState({
      ...formState,
      errors
    })

    if(errors.length > 0){
      return false
    } else {
      return true
    }
  }

  const navigate = useNavigate();
  return (
    <div className="signup-page" id="signup">
      <div className="signup-hero">
        <h1>Signup!</h1>
      </div>
      <div className="signup-box">
        <div className="bg-container">
          <div className="form-container">
            <form className="signup-form" id="signup-form" onSubmit={handleFormSubmit}>
              <h2>Sign up today!</h2>
              {formState.errors.length > 0 ?(
                <div className="error-div">
                  <h4>Sign up failed!</h4>
                  {formState.errors.map(error => (
                  <p>{error.message}</p>
                  ))}
                </div>
              ):(<div></div>)}
              <input
                className="field"
                name="firstName"
                type="text"
                id="firstName-signup"
                placeholder="First Name"
                onChange={handleChange}
              ></input>
              <input
                className="field"
                name="lastName"
                type="text"
                id="lastName-signup"
                placeholder="Last Name"
                onChange={handleChange}
              ></input>
              <input
                className="field"
                name="email"
                type="email"
                id="email-signup"
                placeholder="Email"
                onChange={handleChange}
              ></input>
              <input
                className="field"
                name="password"
                type="password"
                id="password-signup"
                placeholder="Password"
                onChange={handleChange}
              ></input>
              <button className="form-btn" type="submit">
                Create Account
              </button>
              <h3 className="">Have an account? </h3>
              <button onClick={() => navigate("/login")} className="login-btn">
                {" "}
                Login{" "}
              </button>
              <h4>Go Back</h4>
              <div className="btn-wrapper2">
                <button onClick={() => navigate("/")}>Home</button>
                <button onClick={() => navigate("/shop")}>Shop</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}


export default SignupInfo;