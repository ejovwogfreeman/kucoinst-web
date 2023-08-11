import React from "react";
import "../css/DWE.css";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import { CgArrowsExchangeAltV } from "react-icons/cg";

const Exchange = () => {
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
          <span className="d-block">
            <select>
              <option>USDT</option>
              <option>USD</option>
              <option>ETH</option>
              <option>BTC</option>
              <option>CNY</option>
            </select>
          </span>
          <span className="d-block">
            <select>
              <option>USDT</option>
              <option>USD</option>
              <option>ETH</option>
              <option>BTC</option>
              <option>CNY</option>
            </select>
          </span>
        </div>
        <span>
          <CgArrowsExchangeAltV className="exchange-icon" />
        </span>
      </div>

      <form className="exchange-form">
        <div>
          <div className="form-group">
            <label htmlFor="">
              <h6 className="fw-bold">Exchange Quantity</h6>
            </label>
            <div className="d-flex align-items-center border">
              <h6 className="fw-bold m-0 p-2">ETH</h6>
              <input placeholder="Enter email" />
            </div>
          </div>
        </div>
        <div>
          <div className="style-flex">
            <div>
              <p>Exchange Rate</p>
              <h6>23456.678</h6>
            </div>
            <div>
              <p>Available Eth</p>
              <h6>0</h6>
            </div>
            <div>
              <p>Available CNY</p>
              <h6>0</h6>
            </div>
          </div>
          <div className="style-flex">
            <div>
              <p>Service Charge Rate</p>
              <h6>0.1</h6>
            </div>
            <div>
              <p>Service Charge</p>
              <h6>0</h6>
            </div>
          </div>
        </div>
        <button className="btn btn-primary">Exchange</button>
      </form>
    </div>
  );
};

export default Exchange;
