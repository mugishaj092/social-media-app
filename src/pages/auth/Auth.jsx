import React, { useState } from "react";
import logo from "../../img/logo.png";
import "./auth.css";
import { useDispatch, useSelector } from "react-redux";
import { login, signUp } from "../../actions/AuthAction";
import store from "../../store/reduxStore";

function Auth() {
  const [isSignup, setIsSignup] = useState(true);
  const dispatch = useDispatch();
  const loading=useSelector((state)=>state.auth.loading);
  console.log(loading);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [confirmPass, setConfirmPass] = useState(false);

  const handleAuth = () => {
    setIsSignup(!isSignup);
  };

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isSignup) {
      data.password == data.confirmPassword
        ? dispatch(signUp(data))
        : setConfirmPass(false);
    }
    else{
      dispatch(login(data))
    }
  };

  const resetForm = () => {
    setData({
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      confirmPassword: "",
    });
    setConfirmPass(false);
  };

  return (
    <div className="auth">
      <div className="a-left">
        <img src={logo} alt="" />
        <div className="web-name">
          <h1>WalZ Media</h1>
          <h6>Explore the ideas through the world</h6>
        </div>
      </div>
      <div className="a-right">
        <form action="" className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignup ? "Sign Up" : "Login"}</h3>
          {isSignup && (
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                value={data.firstname}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                value={data.lastname}
                onChange={handleChange}
              />
            </div>
          )}
          <div>
            <input
              type="text"
              placeholder="Username or Email"
              className="infoInput"
              name="username"
              value={data.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="infoInput"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
            {isSignup && (
              <input
                type="password"
                placeholder="Confirm password"
                className="infoInput"
                name="confirmPassword"
                value={data.confirmPassword}
                onChange={handleChange}
              />
            )}
          </div>
          <span
            style={{
              display: confirmPass ? "block" : "none",
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
            }}
          >
            * Confirm Password is not the same
          </span>
          <div>
            <span style={{ fontSize: "13px" }}>
              {isSignup ? (
                <>
                  Already have an account.{" "}
                  <span
                    onClick={() => {
                      handleAuth();
                      resetForm();
                    }}
                    style={{ color: "gray", cursor: "pointer" }}
                  >
                    Login!
                  </span>
                </>
              ) : (
                <>
                  I don't have an account.{" "}
                  <span
                    onClick={() => {
                      handleAuth();
                      resetForm();
                    }}
                    style={{ color: "gray", cursor: "pointer" }}
                  >
                    Signup
                  </span>
                </>
              )}
            </span>
            <button className="button S-btn" type="submit" disabled={loading}>
              {loading?"Loading...":isSignup ? "Signup" : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Auth;
