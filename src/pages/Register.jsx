import React, { useState } from "react";
import { Link } from "react-router-dom";
// import img from "../assets/titleicon.png";
import "../css/Register.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcInvite } from "react-icons/fc";
import { AiFillMail } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Register = () => {
  const [regType, setRegType] = useState(false);
  const [value, setValue] = useState("");
  const handleRegType = () => {
    setRegType(!regType);
  };

  // const [phoneNum, setPhoneNum] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    let user = {
      phoneNum: value,
      email,
      username,
      password: password1,
      inviteCode,
    };

    setLoading(true);
    e.preventDefault();

    if (password1 !== password2) {
      setLoading(false);
      return toast.error("PASSWORDS DO NOT MATCH");
    }

    if ((!value && !email) || !username || !password1) {
      setLoading(false);
      return toast.error("PLEASE REQUIRED FIELDS");
    }

    axios
      .post("http://localhost:8000/api/auth/register", user, {
        headers: {
          "Content-Type": "application/json",
          Accept: "applicatioon/json",
        },
      })
      .then((res) => {
        toast.success("REGISTRATION SUCCESSFUL");
        setLoading(false);
        navigate("/");
        localStorage.setItem("user", JSON.stringify(res.data));
      })
      .catch((err) => {
        // toast.error("INCORRECT CREDENTIALS");
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <span onClick={() => handleRegType()} className="btn btn-primary mb-2">
        {regType ? "Use Phone" : "Use Email"}
      </span>
      {regType ? (
        <div className="form-group">
          <label htmlFor="">Email</label>
          <div className="d-flex align-items-center border">
            <AiFillMail />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </div>
        </div>
      ) : (
        <div className="form-group">
          <label htmlFor="">Phone Number</label>
          <div className="border">
            <PhoneInput
              placeholder="Enter phone number"
              value={value}
              // onChange={(e) => setPhoneNum(e.target)}
              onChange={setValue}
            />
          </div>
        </div>
      )}
      <div className="form-group">
        <label htmlFor="">Username</label>
        <div className="d-flex align-items-center border">
          <FaUserCircle />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="">Password</label>
        <div className="d-flex align-items-center border">
          <RiLockPasswordFill />
          <input
            type="password"
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
            placeholder="Enter password"
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="">Confirm Password</label>
        <div className="input">
          <div className="d-flex align-items-center border">
            <RiLockPasswordFill />{" "}
            <input
              type="password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              placeholder="Confirm password"
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="">Invitation Code(Optional)</label>
        <div className="input"></div>
        <div className="d-flex align-items-center border">
          <FcInvite />
          <input
            type="text"
            value={inviteCode}
            onChange={(e) => setInviteCode(e.target.value)}
            placeholder="Enter invitation code"
          />
        </div>
      </div>
      <button
        disabled={loading}
        style={{ background: loading ? "rgba(21, 95,	200, 0.8)" : "#155fc8" }}
      >
        {loading ? "LOADING" : "REGISTER"}
      </button>
      <div className="center">
        <p>
          Already have an account? <Link to="/login">Login Now</Link>
        </p>
      </div>
    </form>
  );
};

export default Register;
