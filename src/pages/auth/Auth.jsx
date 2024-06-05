import React from "react";
import logo from "../../img/logo.png";
import "./auth.css";

function Auth() {
  return (
    <div className="auth">
      <div className="a-left">
        <img src={logo} alt="" />
        <div className="web-name">
          <h1>WalZ Media</h1>
          <h6>Explore the ideas through the world</h6>
        </div>
      </div>
      <Login />
    </div>
  );

  function SignUp() {
    return (
      <div className="a-right">
        <form action="" className="infoForm authForm">
          <h3>Sign Up</h3>
          <div>
            <input
              type="text"
              placeholder="First Name"
              className="infoInput"
              name="Firstname"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="infoInput"
              name="Lastname"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Username or Email"
              className="infoInput"
              name="username"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Password"
              className="infoInput"
              name="password"
            />
            <input
              type="text"
              placeholder="Confirm password"
              className="infoInput"
              name="confirmPass"
            />
          </div>
          <div>
            <span style={{fontSize:"13px"}}>Already have an account. Login!</span>
            <div className="button S-btn">Signup</div>
          </div>
        </form>
      </div>
    );
  }
  function Login() {
    return (
      <div className="a-right">
        <form action="" className="infoForm authForm">
          <h3>Sign Up</h3>
          <div>
            <input
              type="text"
              placeholder="Username or Email"
              className="infoInput"
              name="username"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Password"
              className="infoInput"
              name="password"
            />
          </div>
          <div>
            <span style={{fontSize:"13px"}}>Don't have an account. Signup!</span>
            <div className="button S-btn">Login</div>
          </div>
        </form>
      </div>
    );
  }
}

export default Auth;
