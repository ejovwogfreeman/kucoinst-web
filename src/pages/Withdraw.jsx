import React from "react";
import "../css/DWE.css";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import tether from "../assets/tether.png";

const Withdraw = () => {
  return (
    <div className="top-container">
      <div className="bg-primary top">
        <span>Withdraw</span>
        <Link to="/assets" className="arrow-icon">
          <MdArrowBackIos />
        </Link>
      </div>
      <h6 className="text-center mt-4">
        Warm Tips: Withdrawal is limited by transaction volume
      </h6>
      <div className="deposit-methods">
        <div>
          <span>
            <img src={tether} alt="" />
            <h6>USDT WITHDRAWAL</h6>
          </span>
          <hr />
          <section>
            <Link to="">Withdraw</Link>
          </section>
        </div>
        <div style={{ border: "0px" }}></div>
        <div style={{ border: "0px" }}></div>
      </div>
    </div>
  );
};

export default Withdraw;
