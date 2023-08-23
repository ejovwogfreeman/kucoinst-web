import React, { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import "../css/General.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ToastifyContext } from "../context/ToastifyContext";
import { UserContext } from "../context/UserContext";
import { loginUser } from "../data";
import logo from "../assets/logo.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);
  const [UserState, setUserState] = React.useContext(UserContext);

  const handleShow = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    let login = await loginUser({ username, password });

    if (login.error) {
      setLoading(false);
      return setToastifyState({
        ...ToastifyState,
        message: login.message,
        variant: "error",
        open: true,
      });
    }

    if (login.isAdmin === false) {
      setToastifyState({
        ...ToastifyState,
        message: "You are not authenticated to visit this route",
        variant: "error",
        open: true,
      });
      return setLoading(false);
    }

    localStorage.setItem("user", JSON.stringify(login));
    setUserState(login);
    setToastifyState({
      ...ToastifyState,
      message: "Login Successful",
      variant: "success",
      open: true,
    });

    navigate("/dashboard");

    setUsername("");
    setPassword("");
  };

  return (
    <>
      <Helmet>
        <title>Kucoin | Admin Login</title>
      </Helmet>
      <div className="general-container">
        <div className="body">
          <form onSubmit={handleSubmit} className="signin-form">
            <img
              src={logo}
              alt=""
              width="150px"
              style={{ display: "block", margin: "auto" }}
            />
            <h2 style={{ marginTop: "10px" }}>ADMIN LOGIN</h2>
            <div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your Username"
                required
              />
            </div>
            <div>
              <span style={{ position: "relative" }}>
                <input
                  type={showPassword ? "password" : "text"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your Password"
                  required
                />
                <span
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "3px",
                    cursor: "pointer",
                  }}
                  onClick={handleShow}
                >
                  {showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
                </span>
              </span>
            </div>
            <button disabled={loading} style={{ cursor: "pointer" }}>
              {loading ? "LOADING..." : "LOGIN"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
