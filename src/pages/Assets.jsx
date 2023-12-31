import React, { useState } from "react";
import "../css/Assets.css";
import icon1 from "../assets/icon-deposit.png";
import icon2 from "../assets/icon-withdraw.png";
import icon3 from "../assets/icon-exchange.png";
import { Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

const Assets = ({ user }) => {
  const [page, setPage] = useState(true);

  let coins = [
    {
      id: 1,
      name: "USDT",
      available: user.usdt,
    },
    {
      id: 2,
      name: "BTC",
      available: "0000000.00",
    },
    {
      id: 3,
      name: "ETH",
      available: "0000000.00",
    },
    {
      id: 4,
      name: "USD",
      available: "0000000.00",
    },
    {
      id: 5,
      name: "CNY",
      available: "0000000.00",
    },
  ];

  return (
    <div className="assets-container">
      <ScrollToTop />
      <div className="assets-banner">
        <div>
          <span>Assts</span>
          <span className="bal">
            <h1>{user.usdt}</h1>
            <span>USDT</span>
          </span>
        </div>
      </div>
      <div className="transactions">
        <Link to="/deposit">
          <img src={icon1} alt="" />
          <h6>Deposit</h6>
        </Link>
        <Link to="/withdraw">
          <img src={icon2} alt="" />
          <h6>Withdraw</h6>
        </Link>
        <Link to="/exchange">
          <img src={icon3} alt="" />
          <h6>Exchange</h6>
        </Link>
      </div>
      <div className="assets">
        <span
          onClick={() => setPage(true)}
          style={{
            color: page ? "blue" : "black",
            borderColor: page ? "blue" : "rgba(0,0,0,0.5)",
            cursor: "pointer",
          }}
        >
          Account Assets
        </span>
        <span
          onClick={() => setPage(false)}
          style={{
            color: !page ? "blue" : "black",
            borderColor: !page ? "blue" : "rgba(0,0,0,0.5)",
            cursor: "pointer",
          }}
        >
          Coin Assets
        </span>
      </div>
      <div className="assets-components">
        {page ? (
          <>
            {coins.map((coin) => {
              return (
                <div key={coin.id} className="asset-divs">
                  <h5 className="text-primary">{coin.name}</h5>
                  <table>
                    <tr className="px-2">
                      <th>Available(USDT)</th>
                      <th>In Review(USDT)</th>
                      <th>Coin(USDT)</th>
                    </tr>
                    <tr className="px-2">
                      <td>{coin.available}</td>
                      <td>0000000.00</td>
                      <td>{coin.available}</td>
                    </tr>
                  </table>
                </div>
              );
            })}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Assets;
