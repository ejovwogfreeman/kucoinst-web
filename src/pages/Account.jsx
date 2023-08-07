import React from "react";
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

const Account = () => {
  const datas = [
    {
      id: 1,
      icon: icon1,
      action: "Primary verification",
    },
    {
      id: 2,
      icon: icon2,
      action: "Advanced Verification",
    },
    {
      id: 3,
      icon: icon3,
      action: "Transaction Details",
    },
    {
      id: 4,
      icon: icon4,
      action: "Fast Transaction",
    },
    {
      id: 5,
      icon: icon5,
      action: "Contract Position",
    },
    {
      id: 6,
      icon: icon6,
      action: "Wallet Address",
    },
    {
      id: 7,
      icon: icon7,
      action: "Payment Method Management",
    },
    {
      id: 8,
      icon: icon8,
      action: "I Want To Share",
    },
    {
      id: 9,
      icon: icon9,
      action: "Online Customer Service",
    },
    {
      id: 10,
      icon: icon10,
      action: "Help Center",
    },
    {
      id: 11,
      icon: icon11,
      action: "Introduction to the platform",
    },
  ];
  return (
    <div className="account-container">
      <div className="account-banner">
        <div>
          <span>Assts</span>
          <span className="bal">
            <h1>802341.3251</h1>
            <span>USDT</span>
          </span>
        </div>
      </div>
      <div className="asset-container">
        <div className="contain">
          {datas.map((data) => {
            return (
              <div key={data.id} className="asset-div">
                <img src={data.icon} alt="" />
                <span>{data.action}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Account;
