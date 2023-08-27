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
import ScrollToTop from "../components/ScrollToTop";

const Register = () => {
  // const [regType, setRegType] = useState(false);
  const [value, setValue] = useState("");
  // const handleRegType = () => {
  //   setRegType(!regType);
  // };

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [referral, setReferral] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password1 !== password2) {
      return toast.error("Passwords do not match");
    }

    if (!email || !username || !password1) {
      return toast.error("Please fill all required fields");
    }

    const user = {
      referral,
      username,
      email: email !== "" ? email : null,
      phoneNum: value,
      password: password1,
    };

    setLoading(true);

    try {
      const response = await axios.post(
        "https://kucoinst-web.onrender.com/api/users/register",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("REGISTRATION SUCCESSFUL");
      sessionStorage.setItem("user", JSON.stringify(response.data));
      navigate("/");
    } catch (error) {
      if (error.response) {
        setLoading(false);
        toast.error(error.response.data.message || "An error occurred");
      } else {
        toast.error("An error occurred");
        setLoading(false);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <ScrollToTop />
      {/* <span onClick={() => handleRegType()} className="btn btn-dark mb-2 w-100">
        {regType ? "Use Phone Number" : "Use Email"}
      </span> */}
      {/* {regType ? ( */}
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
      {/* ) : ( */}
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
      {/* )} */}
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
            value={referral}
            onChange={(e) => setReferral(e.target.value)}
            placeholder="Enter invitation code"
          />
        </div>
      </div>
      <button disabled={loading} className="btn btn-dark mt-0">
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
