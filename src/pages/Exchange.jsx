import React from "react";
import "../css/DWE.css";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";

const Exchange = () => {
  return (
    <div className="top-container">
      <div className="bg-primary top">
        <span>Exchange</span>
        <Link to="/assets" className="arrow-icon">
          <MdArrowBackIos />
        </Link>
      </div>
      <h6>Please Choose from the following Exchange channel</h6>
    </div>
  );
};

export default Exchange;
