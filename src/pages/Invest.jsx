import React, { useState } from "react";
import "../css/Assets.css";
import img from "../assets/profilelogo.png";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

const Invest = ({ user }) => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="assets-container">
      <ScrollToTop />
      <div
        className="text-center"
        style={{
          paddingTop: "70px",
          paddingBottom: "10px",
          position: "relative",
          backgroundColor: "white",
        }}
      >
        <spanm className="fw-bold">Investment Details</spanm>
        <Link
          to="/investment_plans"
          className="arrow-icon"
          style={{
            position: "absolute",
            left: "10px",
            bottom: "7px",
          }}
        >
          <MdArrowBackIos />
        </Link>
      </div>
      <div className="assets-banner d-block" style={{ height: "170px" }}>
        <div className=" d-flex align-items-center justify-content-between mt-4 head">
          <span className="d-flex align-items-center justify-content-between">
            <img src={img} alt="" width="50px" />
            <div className="text-start ms-2">
              <span>Get USDT</span> <br />
              <span>Lock Up Mining 01</span>
            </div>
          </span>

          <div className="text-end">
            <small>Recent(Daily Earnings)</small>
            <br />
            <h5 className="text-warning">0.5 ~ 0.7%</h5>
          </div>
        </div>
      </div>
      <div className="text-containers">
        <div className="d-flex align-items-center justify-content-between head">
          <span>
            <h5>5(Days)</h5>
            <span className="text-warning">Financial Cycle</span>
          </span>

          <span>
            <h5>2000 ~ 99999999</h5>
            <span className="text-warning">Orders in Custody</span>
          </span>
        </div>
        <div className="d-flex align-items-center justify-content-between head">
          <span>
            <h5>Dividend Payment Time</h5>
            <span className="text-warning">Daily</span>
          </span>

          <span>
            <h5>Escrow Funds</h5>
            <span className="text-warning">Return Due</span>
          </span>
        </div>
        <div className="d-flex align-items-center justify-content-between head">
          <span>
            <h5>Expected Revenue</h5>
            <span className="text-warning">50.00 ~ 3499999.96</span>
          </span>

          <span>
            <h5>Available Assets(USDT)</h5>
            <span className="text-warning">{user.usdt}</span>
          </span>
        </div>
      </div>
      <form action="" className="mining-form">
        <label htmlFor="">Investment Amount(USDT)</label>
        <input type="text" placeholder="Please enter amount to invest" />
        <h6 className="fw-bold mb-0 mt-2">Mining Earns Non-Stop</h6>
        <small>
          Locked Up mining is the profit of mining in the platform mining pool
          by hosting the USDT to the platform's super-computing power miner
        </small>
        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary mt-2"
        >
          {loading ? "LOADING..." : "SUBSCRIBE"}
        </button>
      </form>
      <div className="assets-components assetmine pt-0"></div>
    </div>
  );
};

export default Invest;
