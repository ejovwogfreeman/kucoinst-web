import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Passwordresetconfirm = () => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="general-container">
        <div className="body">
          <form onSubmit={handleSubmit} className="signin-form">
            <h2>RESET PASSWORD</h2>
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your New Password"
                required
              />
            </div>
            <button disabled={loading}>
              {loading ? "LOADING..." : "RESET PASSWORD"}
            </button>
            <section style={{ marginTop: "20px" }}>
              <small>
                <Link to="/login">GO TO LOGIN</Link>
              </small>
            </section>
          </form>
        </div>
      </div>
    </>
  );
};

export default Passwordresetconfirm;
