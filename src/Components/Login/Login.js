import React, { useEffect, useState } from "react";
import "./Login.css";

const Login = () => {
  const [userCreds, setUserCreds] = useState({ email: "", password: "" });
  const submitForm = (event) => {
    event.preventDefault();
    const userInput = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    setUserCreds(userInput);
  };

  useEffect(() => {}, [userCreds]);

  return (
    <>
      <div className="formBuilder">
        <h1>Welcome to Form Generator!</h1>
      </div>

      <div className="container">
        <h1>Log In</h1>
        <form action="" onSubmit={submitForm}>
          <div className="item">
            <label htmlFor="email">Email&nbsp;&nbsp;&nbsp;</label>
            <input
              className="item1"
              type="text"
              name="email"
              id="email"
              autoComplete="off"
              onChange={(event) => setUserCreds({ email: event.target.value })}
            ></input>
          </div>

          <div className="item">
            <label htmlFor="password">Password&nbsp;&nbsp;&nbsp;</label>
            <input
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
            <span>
              <a href="#">Forgot Password?</a>
            </span>
          </div>

          <button className="btn" type="submit">
            Submit
          </button>
        </form>
        <div className="item">
          <span>
            Don't have an account?<a href="#">Sign up</a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Login;
