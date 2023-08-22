import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Trades.css";
import ScrollToTop from "../components/ScrollToTop";

const TradeWithdrawal = () => {
  const [trades, settrades] = useState([]);
  const authToken = JSON.parse(localStorage.getItem("user")).token;
  const config = {
    headers: {
      "auth-token": authToken,
    },
  };
  useEffect(() => {
    axios
      .get("https://kucoinst-web.onrender.com/api/users/withdrawal", config)
      .then((response) => {
        settrades(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="trades-container">
      <ScrollToTop />
      <table width="100%">
        <tr className="px-2">
          <th>TYPE</th>
          <th>AMOUNT</th>
          <th>PROFIT</th>
          <th>DATE</th>
        </tr>
        {[...trades].reverse().map((x) => {
          return (
            <div key={x._id}>
              <tr className="px-2">
                <td>Trade</td>
                <td>{x.amount}</td>
                <td>+{x.profit}</td>
                <td>{new Date(x.createdAt).toLocaleDateString()}</td>
              </tr>
            </div>
          );
        })}
      </table>
    </div>
  );
};

export default TradeWithdrawal;
