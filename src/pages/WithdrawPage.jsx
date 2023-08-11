import React, { useState, useEffect } from "react";
import "../css/DWE.css";
import { MdArrowBackIos } from "react-icons/md";
import { Link, useParams, useNavigate } from "react-router-dom";

const WithdrawPage = () => {
  const [method, setMethod] = useState("");
  const [details, setDetails] = useState("");
  const [amount, setAmount] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const value = params.method === "usdt" ? "usdt" : "btc";
    setMethod(value);
  }, [params.method]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ method, details, amount });
  };

  return (
    <div className="top-container">
      <div className="bg-primary top">
        <span>Withdraw</span>
        <Link to="/withdraw" className="arrow-icon">
          <MdArrowBackIos />
        </Link>
      </div>
      <div className="bottom-space">
        <form className="deposit-form" onSubmit={handleSubmit}>
          <h5>WITHDRAWAL FORM</h5>
          <div className="form-fields">
            <label htmlFor="">Method</label>
            <select
              value={method}
              onChange={(e) => {
                navigate(`/withdraw/${e.target.value}`);
              }}
            >
              <option value={"usdt"}>USDT</option>
              <option value={"btc"}>BTC</option>
            </select>
            <label htmlFor="">Account Details/Wallet Address</label>
            <input
              type="text"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Enter Account Details/Wallet Address"
            />
            <label htmlFor="">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter Amount"
            />
            <button className="btn btn-primary mt-0">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WithdrawPage;
