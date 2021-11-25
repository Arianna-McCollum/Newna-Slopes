import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import Auth from "../../utils/auth";
import { useMutation } from "@apollo/client";
import { CHANGE_PASSWORD, REMOVE_USER } from "../../utils/mutations";

function AccountOptions() {
  const [formState, setFormState] = useState({
    password: "",
    errors: [],
  });
  const [changePassword] = useMutation(CHANGE_PASSWORD);
  const [deleteUser] = useMutation(REMOVE_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const valid = await validate(formState);

    if (!valid) {
      console.log(formState.errors.length);
      return;
    } else {
      console.log('changing password')
      const mutationResponse = await changePassword({
        variables: {
          password: formState.password,
        },
      });
      console.log(mutationResponse)
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(formState);
  };

  const validate = async (formState) => {
    const { password } = formState;
    const errors = [];
    if (!password || password.length < 5) {
      console.log("password error");
      errors.push({
        type: "password",
        message: "A password of 5 or more characters is required.",
      });
    }
    setFormState({
      ...formState,
      errors,
    });

    if (errors.length > 0) {
      return false;
    } else {
      return true;
    }
  };

  const handleDelete = () => {
    // const mutationResponse = await deleteUser({
      // variables: []
    // });
    // Auth.logout();
  }

  const navigate = useNavigate();
  return (
    <div className="changePassword-page" id="changePassword">
      <div className="changePassword-box">
        <div className="bg-container">
          <div className="form-container">
            <form
              className="changePassword-form"
              id="changePassword-form"
              onSubmit={handleFormSubmit}
            >
              <h2>Change your password?</h2>
              {formState.errors.length > 0 ? (
                <div className="error-div">
                  <h4>Sign up failed!</h4>
                  {formState.errors.map((error) => (
                    <p>{error.message}</p>
                  ))}
                </div>
              ) : (
                <div></div>
              )}
              <input
                className="field"
                name="password"
                type="password"
                id="password-change"
                placeholder="New Password"
                onChange={handleChange}
              ></input>
              <button className="form-btn" type="submit">
                Change Password
              </button>
              <div className="delete-container">
                <button className="btn" onClick={handleDelete}>
                  Delete Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountOptions;
