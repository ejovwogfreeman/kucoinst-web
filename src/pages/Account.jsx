import React, { useState, useEffect } from "react";
import "../css/Account.css";
import icon1 from "../assets/icon-primary.png";
import icon2 from "../assets/icon-advanced.png";
import icon3 from "../assets/icon-transaction.png";
import icon4 from "../assets/icon-fast.png";
import icon5 from "../assets/icon-contract.png";
import icon6 from "../assets/icon-wallet.png";
import icon7 from "../assets/icon-payment.png";
import icon8 from "../assets/icon-share.png";
import icon9 from "../assets/icon-online.png";
import icon10 from "../assets/icon-help.png";
import icon11 from "../assets/icon-introduction.png";
import { MdArrowForwardIos } from "react-icons/md";
import { BsChatLeftDots } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import profilelogo from "../assets/profilelogo.png";
import { Link } from "react-router-dom";
import axios from "axios";

const Account = () => {
  const [user, setUser] = useState({});
  const authToken = JSON.parse(localStorage.getItem("user")).token;
  const config = {
    headers: {
      "auth-token": authToken,
    },
  };
  useEffect(() => {
    axios
      .get("https://kucoinst-web.onrender.com/api/users/user", config)
      .then((response) => {
        setUser(response.data);
        console.log(user.profileImage[0].link);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const datas = [
    {
      id: 1,
      icon: icon1,
      action: "Primary verification",
      text: "Certificating",
    },
    {
      id: 2,
      icon: icon2,
      action: "Advanced Verification",
      text: "Not Verified",
    },
    {
      id: 3,
      icon: icon3,
      action: "Transaction Details",
      text: "",
    },
    {
      id: 4,
      icon: icon4,
      action: "Fast Transaction",
      text: "Today's Profit 0.00",
    },
    {
      id: 5,
      icon: icon5,
      action: "Contract Position",
      text: "",
    },
    {
      id: 6,
      icon: icon6,
      action: "Wallet Address",
      text: "",
    },
    {
      id: 7,
      icon: icon7,
      action: "Payment Method Management",
      text: "",
    },
    {
      id: 8,
      icon: icon8,
      action: "I Want To Share",
      text: "",
    },
    {
      id: 9,
      icon: icon9,
      action: "Online Customer Service",
      text: "",
    },
    {
      id: 10,
      icon: icon10,
      action: "Help Center",
      text: "",
    },
    {
      id: 11,
      icon: icon11,
      action: "Introduction to the platform",
      text: "",
    },
  ];
  return (
    <>
      {user.profileImage && user.profileImage.length > 0 ? (
        <>
          <div className="account-container">
            <div className="account-banner">
              <Link to="" className="abs-left">
                <BsChatLeftDots />
              </Link>
              <div className="profileinfo">
                {user.profileImage ? (
                  <img
                    src={`https://kucoinst-web.onrender.com/${user.profileImage[0].link}`}
                    width="70px"
                  />
                ) : (
                  <img src={profilelogo} width="70px" />
                )}
                <span>{user.username}</span>
                <span>{user.email}</span>
              </div>
              <Link to="/settings" className="abs-right">
                <FiSettings />
              </Link>
            </div>
            <div className="asset-container">
              <div className="contain">
                {datas.map((data) => {
                  return (
                    <div key={data.id} className="asset-div">
                      <span className="d-flex align-items-center justify-content-between">
                        <img src={data.icon} alt="" />
                        <span>{data.action}</span>
                      </span>
                      <span className="d-flex align-items-center justify-content-between">
                        <span className="span">{data.text}</span>
                        <MdArrowForwardIos />
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="account-container">
          <div className="account-banner">
            <Link to="" className="abs-left">
              <BsChatLeftDots />
            </Link>
            <div className="profileinfo">
              <img src={profilelogo} width="70px" />
              <span>{user.username}</span>
              <span>{user.email}</span>
            </div>
            <Link to="/settings" className="abs-right">
              <FiSettings />
            </Link>
          </div>
          <div className="asset-container">
            <div className="contain">
              {datas.map((data) => {
                return (
                  <div key={data.id} className="asset-div">
                    <span className="d-flex align-items-center justify-content-between">
                      <img src={data.icon} alt="" />
                      <span>{data.action}</span>
                    </span>
                    <span className="d-flex align-items-center justify-content-between">
                      <span className="span">{data.text}</span>
                      <MdArrowForwardIos />
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Account;