import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      return toast.error("PLEASE FILL ALL FIELDS");
    }

    setLoading(true);

    const user = { username, password };

    axios
      .post("http://localhost:8000/api/users/login", user, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        toast.success("LOGIN SUCCESSFUL");
        setLoading(false);
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/");
      })
      .catch((err) => {
        toast.error("INCORRECT CREDENTIALS");
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="">Username</label>
        <div className="d-flex align-items-center border">
          <FaUserCircle />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="">Password</label>
        <div className="d-flex align-items-center border">
          <RiLockPasswordFill />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
      </div>
      <button disabled={loading} className="btn btn-dark mt-0">
        {loading ? "LOADING" : "LOGIN"}
      </button>
      <div className="center">
        <Link>Forgot Password?</Link>
        <p className="mt-2">
          New Here? <Link to="/register">Register Now</Link>
        </p>
      </div>
    </form>
  );
};

export default Login;
