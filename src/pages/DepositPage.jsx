import React, { useState, useEffect } from "react";
import "../css/DWE.css";
import axios from "axios";
import { toast } from "react-toastify";
import { MdArrowBackIos } from "react-icons/md";
import { Link, useParams, useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";
import ScrollToTop from "../components/ScrollToTop";

const DepositPage = () => {
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [text, setText] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  const [deposit, setDeposit] = useState({
    method: "",
    amount: "",
    proof: null,
  });

  const { method, amount, proof } = deposit;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDeposit((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    setDeposit((prevData) => ({
      ...prevData,
      proof: event.target.files[0],
    }));
  };

  const authToken = JSON.parse(sessionStorage.getItem("user")).token;
  const config = {
    headers: {
      "auth-token": authToken,
      "Content-Type": "multipart/form-data",
    },
  };

  useEffect(() => {
    const address =
      params.method === "usdt_trc20"
        ? "TUQSURgy9KUcV7c9AWVMrLVr1m2nHPLEZp TAg76W5NfAQYgFsJzHZaGaQt4uEUgLMZZj"
        : params.method.trim() === "usdt_erc20"
        ? "0x0d2B1bF4Bde9D74543303C9CB846f6d9394Dc4E1 0x167EAF64ca4dD4E175b4c645D0F66fC5188F983f"
        : "bc1qtjlh63059h0rxsv7c70pa5gl7h6zxyh30ek4ly bc1qumznts7fpwsj50gutk74aq9p540kc5nxxrafej";
    const value =
      (params.method === "usdt_trc20" && "usdt_trc20") ||
      (params.method === "usdt_erc20" && "usdt_erc20") ||
      (params.method === "btc" && "btc");
    setText(address);
    setDeposit({ ...deposit, method: value });
  }, [params.method]);

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1000);
      })
      .catch((error) => {
        console.error("Copy failed:", error);
      });
  };
  const handleSubmit = async (e) => {
    console.log(proof);
    e.preventDefault();

    if (!method || !amount || !proof) {
      return toast.error("PLEASE FILL ALL FIELDS");
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("mode", method);
    formData.append("amount", amount);
    formData.append("files", proof);

    try {
      await axios.post(
        // "https://kucoinst-web.onrender.com/api/users/deposit",
        // "http://localhost:8000/api/users/deposit",
        // "http://54.82.1.193/api/users/deposit",
        "https://34.224.57.76/api/users/deposit",
        formData,
        config
      );
      toast.success("DEPOSIT MADE SUCCESSFULLY");
      setLoading(false);
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("AN ERROR OCCURED");
      setLoading(false);
    }
  };
  return (
    <div className="top-container">
      <ScrollToTop />
      <div className="bg-primary top">
        <span>Deposit</span>
        <Link to="/deposit" className="arrow-icon">
          <MdArrowBackIos />
        </Link>
      </div>
      <div className="bottom-space">
        <form className="deposit-form" onSubmit={handleSubmit}>
          <h5>DEPOSIT FORM</h5>
          <QRCode value={text} size={150} className="p-3 border rounded" />
          <h5 className="mt-3">
            DEPOSIT ADDRESS{" "}
            {(method === "usdt_trc20" && "USDT(TRC20)") ||
              (method === "usdt_erc20" && "USDT(ERC20)") ||
              (method === "btc" && "BTC")}
          </h5>
          <div className="mb-3 address-text">
            Address 1 - {text.split(" ")[0]}
          </div>
          <div className="mb-3 address-text">
            Address 2 - {text.split(" ")[1]}
          </div>
          <span className="btn btn-outline-primary" onClick={handleCopyClick}>
            {copied ? "Copied!" : "Copy to Clipboard"}
          </span>
          <div className="form-fields">
            <label htmlFor="">Method</label>
            <select
              value={method}
              name="method"
              onChange={(e) => {
                navigate(`/deposit/${e.target.value}`);
              }}
            >
              <option value={"usdt_trc20"}>USDT(TRC20)</option>
              <option value={"usdt_erc20"}>USDT(ERC20)</option>
              <option value={"btc"}>BTC</option>
            </select>
            <label htmlFor="">Amount Deposited</label>
            <input
              type="number"
              value={amount}
              name="amount"
              onChange={handleChange}
              placeholder="Enter Amount Deposited"
            />
            <label htmlFor="">
              Provide a screenshot of the completed transfer
            </label>
            <input
              type="file"
              name="proof"
              accept="image/*"
              onChange={handleImageChange}
            />
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary mt-0"
            >
              {loading ? "LOADING..." : "DEPOSIT"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DepositPage;
