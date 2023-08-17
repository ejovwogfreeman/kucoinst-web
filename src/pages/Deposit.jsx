import React from "react";
import "../css/DWE.css";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import tether from "../assets/tether.png";
import btc from "../assets/btc.png";

const Deposit = () => {
  return (
    <div className="top-container">
      <div className="bg-primary top">
        <span>Deposit</span>
        <Link to="/assets" className="arrow-icon">
          <MdArrowBackIos />
        </Link>
      </div>
      <h6 className="text-center mt-4">
        Please Choose from the following deposit channel
      </h6>
      <div className="deposit-methods">
        <div>
          <span>
            <img src={tether} alt="" />
            <h6>USDT(TRC20)</h6>
          </span>
          <hr />
          <section>
            <Link to="/deposit/usdt_trc20">Go buy</Link>
          </section>
        </div>
        <div>
          <span>
            <img src={tether} alt="" />
            <h6>USDT(ERC20)</h6>
          </span>
          <hr />
          <section>
            <Link to="/deposit/usdt_erc20">Go buy</Link>
          </section>
        </div>
        <div>
          <span>
            <img src={btc} alt="" />
            <h6>BTC</h6>
          </span>
          <hr />
          <section>
            <Link to="/deposit/btc">Go buy</Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
