import React, { useState, useEffect } from "react";
import "../css/Assets.css";
import img from "../assets/profilelogo.png";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import axios from "axios";

const InvestmentHistory = ({ user }) => {
  // const plans = [
  //   {
  //     id: 1,
  //     status: "processing",
  //     plan: "Lock-Up Mining 01",
  //     limit: "2000 ~ 99999999",
  //     ror: "0.5 ~ 0.7%",
  //     period: "5(Days)",
  //     percent: 8.3,
  //     startDate: "02/02/2023",
  //     endDate: "05/02/2023",
  //   },
  //   {
  //     id: 2,
  //     status: "processing",
  //     plan: "Lock-Up Mining 02",
  //     limit: "5000 ~ 99999999",
  //     ror: "1 ~ 1.25%",
  //     period: "15(Days)",
  //     percent: 9.1,
  //     startDate: "02/02/2023",
  //     endDate: "05/02/2023",
  //   },
  //   {
  //     id: 3,
  //     status: "processing",
  //     plan: "Lock-Up Mining 03",
  //     limit: "20000 ~ 99999999",
  //     ror: "1.25 ~ 1.5%",
  //     period: "30(Days)",
  //     percent: 17,
  //     startDate: "02/02/2023",
  //     endDate: "05/02/2023",
  //   },
  //   {
  //     id: 4,
  //     status: "processing",
  //     plan: "Lock-Up Mining 04",
  //     limit: "100000 ~ 99999999",
  //     ror: "1.25 ~ 2%",
  //     period: "60(Days)",
  //     percent: 16.1,
  //     startDate: "02/02/2023",
  //     endDate: "05/02/2023",
  //   },
  //   {
  //     id: 5,
  //     status: "processing",
  //     plan: "Lock-Up Mining 05",
  //     limit: "1000000 ~ 99999999",
  //     ror: "2 ~ 2.5%",
  //     period: "90(Days)",
  //     percent: 60,
  //     startDate: "02/02/2023",
  //     endDate: "05/02/2023",
  //   },
  // ];

  const [investments, setInvestments] = useState([]);
  const authToken = JSON.parse(localStorage.getItem("user")).token;
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
            {investments.map((x) => {
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
                      <span>{x.plan.days}</span>
                    </small>
                  </div>
                  <div className="d-flex align-items-center justify-content-between head my-2">
                    <small className="text-center" style={{ flex: "1" }}>
                      <small>Start Date</small> <br />
                      <span>{new Date(x.createdAt).toLocaleDateString()}</span>
                    </small>
                    <small className="text-center" style={{ flex: "1" }}>
                      <small>End Date</small> <br />
                      {/* <span>{x.endDate}</span> */}
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
