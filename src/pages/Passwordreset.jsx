import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillMail } from "react-icons/ai";

const Passwordreset = () => {
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <button disabled={loading}>
        {loading ? "LOADING..." : "SEND PASSWORD RESET LINK"}
      </button>
      <div className="center">
        <Link to="/login">Go Back</Link>
      </div>
    </form>
  );
};

export default Passwordreset;
