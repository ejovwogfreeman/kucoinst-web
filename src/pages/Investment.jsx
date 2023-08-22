import React, { useState } from "react";
import "../css/Assets.css";
import icon1 from "../assets/inv1.png";
import icon2 from "../assets/inv2.png";
import icon3 from "../assets/inv3.png";
import { Link } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import ScrollToTop from "../components/ScrollToTop";

const Investment = ({ user }) => {
  return (
    <div className="assets-container" style={{ paddingBottom: "20px" }}>
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
        <span className="fw-bold">Investment</span>
        <Link
          to="/"
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
      <div className="assets-banner">
        <div>
          <h3 className="fw-bold">Mining Earns Non-Stop</h3>
          <p>
            Locked Up mining is the profit of mining in the platform mining pool
            by hosting the USDT to the platform's super-computing power miner
          </p>
        </div>
      </div>
      <div className="transactions">
        <span className="invx">
          <img src={icon1} alt="" />
          <h6>100% capital security</h6>
        </span>
        <span className="invx">
          <img src={icon2} alt="" />
          <h6>Continuous revenue on holiday</h6>
        </span>
        <span className="invx">
          <img src={icon3} alt="" />
          <h6>Value of the day after successful deposit</h6>
        </span>
      </div>
      <div className="assets-components pt-0">
        <div className="bg-light p-2 rounded">
          <h4 className="text-center fw-bold">For Example</h4>
          <h5 className="text-center fw-bold">Income Calculation</h5>
          <p>
            The member locks 10000U on the platform and chooses a five-day
            period, and the daily output is 0.5% to 0.7% of the locked position
            amount. The daily output is as follows:
          </p>
          <p>Minimum: 10000Ux 0.5%=50U</p>
          <p>Maximum: 10000Ux 0.7%=70U</p>
          <p>
            That is, you can get 250U~350U of income after 5 days. The income is
            issued daily, and the issued income can be deposited and withdrawn
            at any time. After the lock-up principal expires, it will be
            automatically transferred to your asset account.
          </p>
        </div>
        <div className="bg-light p-2 rounded my-4">
          <h5 className="text-center fw-bold">
            Will market conditions affect lock-up income?
          </h5>
          <p>
            1.Lock-up mining is a mechanism for the operation of the blockchain
            network of a currency project. It is related to the actual project
            operation and has no direct relationship with the rise and fall of
            the market. <br />
          </p>
        </div>
        <Link to="/investment_plans" className="btn btn-primary w-100">
          I want to participate
        </Link>
      </div>
    </div>
  );
};

export default Investment;
