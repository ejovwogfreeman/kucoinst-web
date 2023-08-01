import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../assets/titleicon.png";
import "../css/Register.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { BiSolidUserRectangle } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcInvite } from "react-icons/fc";
import { AiFillMail } from "react-icons/ai";

const Register = () => {
  const [regType, setRegType] = useState(false);
  const [value, setValue] = useState();
  const handleRegType = () => {
    setRegType(!regType);
  };
  return (
    <form>
      <div className="center">
        <img src={img} alt="" />
      </div>
      <span onClick={() => handleRegType()} className="btn btn-primary mb-2">
        {regType ? "Use Phone" : "Use Email"}
      </span>
      {regType ? (
        <div className="form-group">
          <label htmlFor="">Username</label>
          <div className="d-flex align-items-center border">
            <AiFillMail />
            <input type="email" placeholder="Enter email" />
          </div>
        </div>
      ) : (
        <div className="form-group">
          <label htmlFor="">Phone Number</label>
          <div className="border">
            <PhoneInput
              placeholder="Enter phone number"
              value={value}
              onChange={setValue}
            />
          </div>
        </div>
      )}
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
      <div className="form-group">
        <label htmlFor="">Confirm Password</label>
        <div className="input">
          <div className="d-flex align-items-center border">
            <RiLockPasswordFill />{" "}
            <input type="password" placeholder="Confirm password" />
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="">Invitation Code(Optional)</label>
        <div className="input"></div>
        <div className="d-flex align-items-center border">
          <FcInvite />
          <input type="text" placeholder="Enter invitation code" />
        </div>
      </div>
      <button>Register</button>
      <div className="center">
        <p>
          Already have an account? <Link to="/login">Login Now</Link>
        </p>
      </div>
    </form>
  );
};

export default Register;
