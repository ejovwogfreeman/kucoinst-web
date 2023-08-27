import React, { useState, useEffect } from "react";
import "../css/Assets.css";
import img from "../assets/profilelogo.png";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import axios from "axios";

const InvestmentHistory = ({ user }) => {
  const [investments, setInvestments] = useState([]);
  const authToken = JSON.parse(sessionStorage.getItem("user")).token;
  const config = {
    headers: {
      "auth-token": authToken,
    },
  };
  useEffect(() => {
    axios
      .get("https://kucoinst-web.onrender.com/api/users/investment", config)
      .then((response) => {
        console.log(response.data);
        setInvestments(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
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
        <span className="fw-bold">Orders</span>
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

      <div className="assets-components assetmine pt-0">
        {investments.length > 0 ? (
          <>
            {[...investments].reverse().map((x) => {
              return (
                <div className="plans p-2 mt-3 bg-light rounded" key={x._id}>
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="d-flex align-items-center">
                      <img src={img} alt="" width="50px" />
                      <h5 className="ms-2 m-0 fw-bold smallme">
                        {x.plan.name}
                      </h5>
                    </span>
                    <div>
                      <span className="btn btn-primary p-1">{x.status}</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between head my-2">
                    <small className="text-center">
                      <small>Single Limit</small> <br />
                      <span>{x.plan.limit}</span>
                    </small>
                    <small className="text-center">
                      <small>Daily Rate Of Return</small> <br />
                      <span>{x.plan.ror}</span>
                    </small>
                    <small className="text-center">
                      <small>Period</small> <br />
                      <span>{x.plan.days}days</span>
                    </small>
                  </div>
                  <div className="d-flex align-items-center justify-content-between head my-2">
                    <small className="text-center" style={{ flex: "1" }}>
                      <small>Start Date</small> <br />
                      <span>{new Date(x.createdAt).toLocaleDateString()}</span>
                    </small>
                    <small className="text-center" style={{ flex: "1" }}>
                      <small>End Date</small> <br />
                      <span>
                        {new Date(
                          new Date(x.createdAt).getTime() +
                            5 * 24 * 60 * 60 * 1000
                        ).toLocaleDateString()}
                      </span>
                    </small>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <h5 className="text-center mt-3">NO Orders Yet...</h5>
        )}
      </div>
    </div>
  );
};

export default InvestmentHistory;
