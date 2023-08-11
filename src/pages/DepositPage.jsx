import React, { useState, useEffect } from "react";
import "../css/DWE.css";
import { MdArrowBackIos } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import QRCode from "react-qr-code";

const DepositPage = () => {
  const [copied, setCopied] = useState(false);
  const [text, setText] = useState("");
  const params = useParams();
  console.log(params.method);

  useEffect(() => {
    const address =
      params.method === "usdt_trc29"
        ? "0TUQSURgy9KUcV7c9AWVMrLVr1m2nHPLEZp"
        : params.method.trim() === "usdt_erc20"
        ? "0x0d2B1bF4Bde9D74543303C9CB846f6d9394Dc4E1"
        : "bc1qtjlh63059h0rxsv7c70pa5gl7h6zxyh30ek4ly";
    setText(address);
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
  return (
    <div className="top-container">
      <div className="bg-primary top">
        <span>Deposit</span>
        <Link to="/deposit" className="arrow-icon">
          <MdArrowBackIos />
        </Link>
      </div>
      <div className="bottom-space">
        <form className="deposit-form">
          <h5>DEPOSIT FORM</h5>
          <QRCode value={text} size={150} className="p-3 border rounded" />
          <h5 className="mt-3">DEPOSIT ADDRESS</h5>
          <div className="mb-3 address-text">{text}</div>
          <span className="btn btn-outline-primary" onClick={handleCopyClick}>
            {copied ? "Copied!" : "Copy to Clipboard"}
          </span>
          <div className="form-fields">
            <label htmlFor="">Amount Deposited</label>
            <input type="number" placeholder="Enter Amount Deposited" />
            <label htmlFor="">
              Provide a screenshot of the completed transfer
            </label>
            <input type="file" />
            <button className="btn btn-primary">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DepositPage;
