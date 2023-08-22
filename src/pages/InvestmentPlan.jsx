import React, { useState } from "react";
import "../css/Assets.css";
import img from "../assets/profilelogo.png";
import Progress from "../components/Progress";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

const InvestmentPlan = ({ user }) => {
  const plans = [
    {
      id: 1,
      url: "lockupmining01",
      plan: "Lock-Up Mining 01",
      limit: "2000 ~ 99999999",
      ror: "0.5 ~ 0.7%",
      period: "5(Days)",
      percent: 8.3,
    },
    {
      id: 2,
      url: "lockupmining02",
      plan: "Lock-Up Mining 02",
      limit: "5000 ~ 99999999",
      ror: "1 ~ 1.25%",
      period: "15(Days)",
      percent: 9.1,
    },
    {
      id: 3,
      url: "lockupmining03",
      plan: "Lock-Up Mining 03",
      limit: "20000 ~ 99999999",
      ror: "1.25 ~ 1.5%",
      period: "30(Days)",
      percent: 17,
    },
    {
      id: 4,
      url: "lockupmining04",
      plan: "Lock-Up Mining 04",
      limit: "100000 ~ 99999999",
      ror: "1.25 ~ 2%",
      period: "60(Days)",
      percent: 16.1,
    },
    {
      id: 5,
      url: "lockupmining05",
      plan: "Lock-Up Mining 05",
      limit: "1000000 ~ 99999999",
      ror: "2 ~ 2.5%",
      period: "90(Days)",
      percent: 60,
    },
  ];
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
        <span className="fw-bold">Investment Plans</span>
        <Link
          to="/investment"
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
      <div className="assets-banner d-block">
        <div className=" d-flex align-items-center justify-content-between mt-4 head">
          <div className="text-start">
            <span>Funds in Custody</span>
            <span className="d-flex align-items-center justify-content-between">
              <h1 className="fw-bold">200000</h1>
              <span>USDT</span>
            </span>
          </div>
          <div>
            <Link to="/orders" className="btn btn-light">
              Orders
            </Link>
          </div>
        </div>
        <div
          className="d-flex align-items-center justify-content-between head"
          style={{ backgroundColor: "rgba(256, 256,256, 0.3)" }}
        >
          <span>
            <h5>140.0000</h5>
            <span>Expected earnings</span>
          </span>
          <span>
            <h5>225.8</h5>
            <span>Expected earnings</span>
          </span>
          <span>
            <h5>1</h5>
            <span>Orders in Custody</span>
          </span>
        </div>
      </div>

      <div className="assets-components assetmine pt-0">
        {plans.map((x) => {
          return (
            <div className="plans p-2 mt-3 bg-light rounded" key={x.id}>
              <div className="d-flex align-items-center justify-content-between">
                <span className="d-flex align-items-center">
                  <img src={img} alt="" width="50px" />
                  <h5 className="ms-2 m-0 fw-bold">{x.plan}</h5>
                </span>
                <div>
                  <Link to={`/invest/${x.url}`} className="btn btn-primary">
                    Buy
                  </Link>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between head my-2">
                <small className="text-center">
                  <small>Single Limit</small> <br />
                  <span>{x.limit}</span>
                </small>
                <small className="text-center">
                  <small>Daily Rate Of Return</small> <br />
                  <span>{x.ror}</span>
                </small>
                <small className="text-center">
                  <small>Period</small> <br />
                  <span>{x.period}</span>
                </small>
              </div>
              <Progress completed={x.percent} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InvestmentPlan;
