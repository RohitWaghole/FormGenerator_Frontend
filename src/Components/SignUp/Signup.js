import React, { useEffect, useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [userCreds, setUserCreds] = useState({ email: "", password: "" });
  const submitForm = (event) => {
    event.preventDefault();
    const userInput = {
      email: event.target.email.value,
      password: event.target.password.value,
      confirmPassword: event.target.confirmPassword.value,
    };

    setUserCreds(userInput);
  };

  useEffect(() => {}, [userCreds]);

  return (
    <div className="signup-root">
      <div className="formBuilder formSupport">
        <h1>Get started with your Form Generator journey!</h1>
      </div>

      <div className="signupContainer loginContainer">
        <h1>Sign Up</h1>
        <form action="" onSubmit={submitForm}>
          <div className="item">
            <label className="label" htmlFor="email">
              Email&nbsp;&nbsp;&nbsp;
            </label>
            <input
              className="item1 input"
              type="text"
              name="email"
              id="email"
              autoComplete="off"
              onChange={(event) => setUserCreds({ email: event.target.value })}
            ></input>
          </div>

          <div className="item">
            <label className="label" htmlFor="password">
              Password&nbsp;&nbsp;&nbsp;
            </label>
            <input
              className="input"
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              onChange={(event) =>
                setUserCreds({ password: event.target.value })
              }
            ></input>
          </div>

          <div className="item">
            <label className="label" htmlFor="confirmPassword">
              Confirm Password&nbsp;&nbsp;
            </label>
            <input
              className="input"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              autoComplete="off"
              onChange={(event) =>
                setUserCreds({ confirmPassword: event.target.value })
              }
            ></input>
          </div>

          <button className="btn" type="submit">
            Submit
          </button>
        </form>
        <div className="item">
          <span>
            Already have an account?<a href="#"> Log in</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
