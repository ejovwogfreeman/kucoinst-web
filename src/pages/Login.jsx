import React, { useState } from "react";
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

  const user = { username, password };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    if (!username || !password) {
      setLoading(false);
      return toast.error("PLEASE FILL ALL FIELDS");
    }

    axios
      .post("http://localhost:8000/api/auth/login", user, {
        headers: {
          "Content-Type": "application/json",
          Accept: "applicatioon/json",
        },
      })
      .then((res) => {
        toast.success("LOGIN SUCCESSFUL");
        setLoading(false);
        navigate("/");
        localStorage.setItem("user", JSON.stringify(res.data));
      })
      .catch((err) => {
        toast.error("INCORRECT CREDENTIALS");
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
      <button
        disabled={loading}
        style={{ background: loading ? "rgba(21, 95,	200, 0.8)" : "#155fc8" }}
      >
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
