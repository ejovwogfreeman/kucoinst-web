import React, { useState, useEffect } from "react";
import "../css/DWE.css";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import { toast } from "react-toastify";
import axios from "axios";

const Exchange = ({ user }) => {
  const [sourceCurrency, setSourceCurrency] = useState("USDT");
  const [targetCurrency, setTargetCurrency] = useState("USDT");
  const [amount, setAmount] = useState(0);
  const [value, setValue] = useState(0);
  const [rate, setRate] = useState(0);
  const [serviceCharge, setServiceCharge] = useState(0);

  const handleChange = (e) => {
    const newAmount = Number(e.target.value);
    setAmount(newAmount);

    if (!newAmount) {
      setServiceCharge(0);
    } else if (newAmount > 0) {
      setServiceCharge(newAmount * 0.01);
    }
    if (sourceCurrency === targetCurrency) {
      setRate(1);
      setValue(rate * amount);
    } else if (sourceCurrency === "USDT" && targetCurrency === "USD") {
      setRate(1);
      setValue(rate * amount);
    } else if (sourceCurrency === "USDT" && targetCurrency === "ETH") {
      setRate(0.00055827);
      setValue(rate * amount);
    } else if (sourceCurrency === "USDT" && targetCurrency === "BTC") {
      setRate(0.00003508);
      setValue(rate * amount);
    } else if (sourceCurrency === "USDT" && targetCurrency === "CNY") {
      setRate(7.00000014);
      setValue(rate * amount);
    } else if (sourceCurrency === "USD" && targetCurrency === "USDT") {
      setRate(1);
      setValue(rate * amount);
    } else if (sourceCurrency === "USD" && targetCurrency === "ETH") {
      setRate(0.00055891);
      setValue(rate * amount);
    } else if (sourceCurrency === "USD" && targetCurrency === "BTC") {
      setRate(0.00003513);
      setValue(rate * amount);
    } else if (sourceCurrency === "USD" && targetCurrency === "CNY") {
      setRate(7.00000014);
      setValue(rate * amount);
    } else if (sourceCurrency === "ETH" && targetCurrency === "USDT") {
      setRate(1788.31);
      setValue(rate * amount);
    } else if (sourceCurrency === "ETH" && targetCurrency === "USD") {
      setRate(1788.16);
      setValue(rate * amount);
    } else if (sourceCurrency === "ETH" && targetCurrency === "BTC") {
      setRate(0.06291066);
      setValue(rate * amount);
    } else if (sourceCurrency === "ETH" && targetCurrency === "CNY") {
      setRate(12316.77025034);
      setValue(rate * amount);
    } else if (sourceCurrency === "BTC" && targetCurrency === "USDT") {
      setRate(28432.27);
      setValue(rate * amount);
    } else if (sourceCurrency === "BTC" && targetCurrency === "USD") {
      setRate(28424.75);
      setValue(rate * amount);
    } else if (sourceCurrency === "BTC" && targetCurrency === "ETH") {
      setRate(15.90294093);
      setValue(rate * amount);
    } else if (sourceCurrency === "BTC" && targetCurrency === "CNY") {
      setRate(198959.18397918);
      setValue(rate * amount);
    } else if (sourceCurrency === "CNY" && targetCurrency === "USDT") {
      setRate(0.14285714);
      setValue(rate * amount);
    } else if (sourceCurrency === "CNY" && targetCurrency === "USD") {
      setRate(0.14285714);
      setValue(rate * amount);
    } else if (sourceCurrency === "CNY" && targetCurrency === "ETH") {
      setRate(0.00007997);
      setValue(rate * amount);
    } else if (sourceCurrency === "CNY" && targetCurrency === "BTC") {
      setRate(0.00000503);
      setValue(rate * amount);
    }
  };

  const authToken = JSON.parse(localStorage.getItem("user")).token;
  const config = {
    headers: {
      "auth-token": authToken,
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!sourceCurrency || !targetCurrency || !amount || !value) {
      return toast.error("PLEASE FILL ALL FIELDS");
    }
    const exchange = {
      sourceCurrency,
      targetCurrency,
      amount,
      value,
    };

    try {
      const response = await axios.post(
        "https://kucoinst-web.onrender.com/api/users/exchange",
        exchange,
        config
      );
      setShowModal(true);
      handleShowBtn();
      setLoading(false);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "AN ERROR OCCURRED");
      } else {
        toast.error("AN ERROR OCCURRED");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="top-container">
      <div className="bg-primary top">
        <span>Exchange</span>
        <Link to="/assets" className="arrow-icon">
          <MdArrowBackIos />
        </Link>
      </div>
      <div className="exchange-top border mt-3 mx-sm-3 mx-2 rounded d-flex align-items-center justify-content-between shadow-sm">
        <div>
          <span
            className="d-block"
            value={sourceCurrency}
            onChange={(e) => setSourceCurrency(e.target.value)}
          >
            <select>
              <option value="USDT">USDT</option>
              <option value="USD">USD</option>
              <option value="ETH">ETH</option>
              <option value="BTC">BTC</option>
              <option value="CNY">CNY</option>
            </select>
          </span>
          <span
            className="d-block"
            value={targetCurrency}
            onChange={(e) => setTargetCurrency(e.target.value)}
          >
            <select>
              <option value="USDT">USDT</option>
              <option value="USD">USD</option>
              <option value="ETH">ETH</option>
              <option value="BTC">BTC</option>
              <option value="CNY">CNY</option>
            </select>
          </span>
        </div>
        <span>
          <CgArrowsExchangeAltV className="exchange-icon" />
        </span>
      </div>

      <form className="exchange-form" onSubmit={handleSubmit}>
        <div>
          <div className="form-group">
            <label htmlFor="">
              <h6 className="fw-bold">Exchange Quantity</h6>
            </label>
            <div className="d-flex align-items-center border">
              <h6 className="fw-bold m-0 p-2">{sourceCurrency}</h6>
              <input
                placeholder="Enter Amount"
                value={amount}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="style-flex">
            <div>
              <p>Exchange Rate</p>
              <h6>{rate}</h6>
            </div>
            <div>
              <p>Available {sourceCurrency}</p>
              <h6>{user.usdt}</h6>
            </div>
            <div>
              <p>Available {targetCurrency}</p>
              <h6>0</h6>
            </div>
          </div>
          <div className="style-flex">
            <div>
              <p>Service Charge Rate</p>
              <h6>0.01</h6>
            </div>
            <div>
              <p>Service Charge</p>
              <h6>{serviceCharge}</h6>
            </div>
          </div>
        </div>
        <button className="btn btn-primary">Exchange</button>
      </form>
    </div>
  );
};

export default Exchange;
