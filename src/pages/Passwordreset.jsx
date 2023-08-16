import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillMail } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-toastify";

const Passwordreset = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email) {
      setLoading(false);
      return toast.error("PLEASE ENTER YOUR EMAIL");
    }
    axios
      .post(
        "http://localhost:8000/api/users/forgot-password",
        { email },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        toast.success("A LINK TO RESET PASSWORD HAVE BEEN SENT TO YOUR EMAIL");
        setLoading(false);
        setEmail("");
      })
      .catch((err) => {
        toast.error("INCORRECT CREDENTIALS");
        console.log(err);
        setLoading(false);
      });
  };

  return (
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
      <button disabled={loading} className="btn btn-dark mt-0">
        {loading ? "LOADING..." : "SEND PASSWORD RESET LINK"}
      </button>
      <div className="center">
        <Link to="/login">Go Back</Link>
      </div>
    </form>
  );
};

export default Passwordreset;
