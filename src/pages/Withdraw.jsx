import React from "react";
import "../css/DWE.css";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";

const Withdraw = () => {
  return (
    <div className="top-container">
      <div className="bg-primary top">
        <span>Withdraw</span>
        <Link to="/assets" className="arrow-icon">
          <MdArrowBackIos />
        </Link>
      </div>
      <h6>Please Choose from the following Withdraw channel</h6>
    </div>
  );
};

export default Withdraw;
