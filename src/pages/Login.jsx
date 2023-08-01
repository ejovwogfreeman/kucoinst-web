import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/titleicon.png";
import { BiSolidUserRectangle } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import "../css/Login.css";

const Login = () => {
  return (
    <form>
      <div className="center">
        <img src={img} alt="" />
      </div>
      <div className="form-group">
        <label htmlFor="">Username</label>
        <div className="d-flex align-items-center border">
          <BiSolidUserRectangle />
          <input type="text" placeholder="Enter username" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="">Password</label>
        <div className="d-flex align-items-center border">
          <RiLockPasswordFill />
          <input type="password" placeholder="Enter password" />
        </div>
      </div>
      <button>Login</button>
      <div className="center">
        <Link>Forgot Password?</Link>
        <p>
          New Here? <Link to="/register">Register Now</Link>
        </p>
      </div>
    </form>
  );
};

export default Login;
