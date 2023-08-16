import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { AiFillMail } from "react-icons/ai";
import { toast } from "react-toastify";
import { RiLockPasswordFill } from "react-icons/ri";
import axios from "axios";

const Passwordresetconfirm = () => {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email || !password1 || !password2) {
      setLoading(false);
      return toast.error("PLEASE FILL ALL FIELDS");
    }

    if (password1 !== password2) {
      setLoading(false);
      return toast.error("PASSWORDS DO NOT MATCH");
    }
    axios
      .post(
        "https://kucoinst-web.onrender.com/api/users/reset-password",
        { email, papssword: password1 },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        toast.success("PASSWORD RESET SUCCESSFUL");
        setLoading(false);
        Navigate("/login");
      })
      .catch((err) => {
        toast.error("INCORRECT CREDENTIALS");
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="general-container">
        <div className="body">
          <form onSubmit={handleSubmit} className="signin-form">
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
            <div className="form-group">
              <label htmlFor="">PASSWORD</label>
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
              <label htmlFor="">RETYPE PASSWORD</label>
              <div className="d-flex align-items-center border">
                <RiLockPasswordFill />
                <input
                  type="password"
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                  placeholder="Re-Type Password"
                />
              </div>
            </div>
            <button disabled={loading} className="btn btn-dark mt-0">
              {loading ? "LOADING..." : "RESET PASSWORD"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Passwordresetconfirm;
