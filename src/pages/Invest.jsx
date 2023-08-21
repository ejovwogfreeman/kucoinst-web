import React, { useState } from "react";
import "../css/Assets.css";
import img from "../assets/profilelogo.png";
import Progress from "../components/Progress";

import { Link } from "react-router-dom";

const Invest = ({ user }) => {
  const plans = [
    {
      id: 1,
      url: "lockupmining01",
      plan: "Lock-Up Mining 01",
      Limit: "2000 ~ 99999999",
      ror: "0.5 ~ 0.7%",
      period: "5(Days)",
    },
    {
      id: 2,
      url: "lockupmining01",
      plan: "Lock-Up Mining 01",
      Limit: "2000 ~ 99999999",
      ror: "0.5 ~ 0.7%",
      period: "5(Days)",
    },
    {
      id: 3,
      url: "lockupmining01",
      plan: "Lock-Up Mining 01",
      Limit: "2000 ~ 99999999",
      ror: "0.5 ~ 0.7%",
      period: "5(Days)",
    },
    {
      id: 4,
      url: "lockupmining01",
      plan: "Lock-Up Mining 01",
      Limit: "2000 ~ 99999999",
      ror: "0.5 ~ 0.7%",
      period: "5(Days)",
    },
    {
      id: 5,
      url: "lockupmining01",
      plan: "Lock-Up Mining 01",
      Limit: "2000 ~ 99999999",
      ror: "0.5 ~ 0.7%",
      period: "5(Days)",
    },
  ];
  return (
    <div className="assets-container" style={{ paddingBottom: "20px" }}>
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
            <Link className="btn btn-light">Order</Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between head">
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
                  <h5 className="ms-2 m-0">Lock Up Mining 01</h5>
                </span>
                <div>
                  <Link className="btn btn-primary">Buy</Link>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between head my-2">
                <small className="text-center">
                  <small>Single Limit</small> <br />
                  <span>2000 ~ 99999999</span>
                </small>
                <small className="text-center">
                  <small>Daily Rate Of Return</small> <br />
                  <span>0.5 ~ 0.7%</span>
                </small>
                <small className="text-center">
                  <small>Period</small> <br />
                  <span>5(Days)</span>
                </small>
              </div>
              <Progress completed={50} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Invest;
