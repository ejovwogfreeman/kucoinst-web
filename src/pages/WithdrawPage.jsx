import React, { useState, useEffect } from "react";
import "../css/DWE.css";
import axios from "axios";
import { toast } from "react-toastify";
import { MdArrowBackIos } from "react-icons/md";
import { Link, useParams, useNavigate } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

const WithdrawPage = () => {
  const [loading, setLoading] = useState(false);
  const [method, setMethod] = useState("");
  const [details, setDetails] = useState("");
  const [amount, setAmount] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const value = params.method === "usdt" ? "usdt" : "btc";
    setMethod(value);
  }, [params.method]);

  const authToken = JSON.parse(sessionStorage.getItem("user")).token;
  const config = {
    headers: {
      "auth-token": authToken,
      "Content-Type": "multipart/form-data",
    },
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!method || !details || !amount) {
      return toast.error("PLEASE FILL ALL FIELDS");
    }

    setLoading(true);

    const withdraw = {
      mode: method,
      accountDetails: details,
      amount,
    };

    try {
      const response = await axios.post(
        "https://kucoinst-web.onrender.com/api/users/withdraw",
        withdraw,
        config
      );

      toast.success("WITHDRAWAL MADE SUCCESSFULLY");
      setLoading(false);
      navigate("/");
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "AN ERROR OCCURED");
        setLoading(false);
      } else {
        toast.error("AN ERROR OCCURED");
        setLoading(false);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="top-container">
      <ScrollToTop />
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
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary mt-0"
            >
              {loading ? "LOADING..." : "WITHDRAW"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WithdrawPage;
