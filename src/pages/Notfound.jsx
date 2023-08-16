import React from "react";
import { Link } from "react-router-dom";
import notfound from "../assets/notfound.gif";

const Notfound = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <img src={notfound} alt="" className="ms-4 d-block" />
        <p className="mt-3">
          Page Not Found...<Link to="/">Go to Home Page</Link>
        </p>
      </div>
    </div>
  );
};

export default Notfound;
