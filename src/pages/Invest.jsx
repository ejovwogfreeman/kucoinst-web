import React, { useState } from "react";
import "../css/Assets.css";
import img from "../assets/profilelogo.png";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import { useParams } from "react-router-dom";

const Invest = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const params = useParams();
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
              <span>
                {params.plan === "lockupmining01" && "Lock Up Mining 01"}
                {params.plan === "lockupmining02" && "Lock Up Mining 02"}
                {params.plan === "lockupmining03" && "Lock Up Mining 03"}
                {params.plan === "lockupmining04" && "Lock Up Mining 04"}
                {params.plan === "lockupmining05" && "Lock Up Mining 05"}
              </span>
            </div>
          </span>

          <div className="text-end">
            <small>Recent(Daily Earnings)</small>
            <br />
            <h5 className="text-warning">
              {params.plan === "lockupmining01" && "0.5 ~ 0.7%"}
              {params.plan === "lockupmining02" && "1 ~ 1.25%"}
              {params.plan === "lockupmining03" && "1.25 ~ 1.5%"}
              {params.plan === "lockupmining04" && "1.25 ~ 2%"}
              {params.plan === "lockupmining05" && "2 ~ 2.5%"}
            </h5>
          </div>
        </div>
      </div>
      <div className="text-containers">
        <div className="d-flex align-items-center justify-content-between head">
          <span>
            <h5>
              {params.plan === "lockupmining01" && "5(Days)"}
              {params.plan === "lockupmining02" && "15(Days)"}
              {params.plan === "lockupmining03" && "30(Days)"}
              {params.plan === "lockupmining04" && "60(Days)"}
              {params.plan === "lockupmining05" && "90(Days)"}
            </h5>
            <span className="text-warning">Financial Cycle</span>
          </span>

          <span>
            <h5>
              {params.plan === "lockupmining01" && "2000 ~ 99999999"}
              {params.plan === "lockupmining02" && "5000 ~ 99999999"}
              {params.plan === "lockupmining03" && "20000 ~ 99999999"}
              {params.plan === "lockupmining04" && "100000 ~ 99999999"}
              {params.plan === "lockupmining05" && "1000000 ~ 99999999"}
            </h5>
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
            <span className="text-warning">
              {params.plan === "lockupmining01" && "50.00 ~ 3499999.96"}
              {params.plan === "lockupmining02" && "750.00 ~ 18749999.81"}
              {params.plan === "lockupmining03" && "7500.00 ~ 44999999.55"}
              {params.plan === "lockupmining04" && "90000.00 ~ 119999998.80"}
              {params.plan === "lockupmining05" && "1800000.00 ~ 224999997.75"}
            </span>
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
