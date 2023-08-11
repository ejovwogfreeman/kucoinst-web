import React, { useEffect, useState } from "react";
import "../css/Trade.css";
import loading from "../assets/loading.gif";
import { useParams } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

const Trade = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const [selectedDirection, setSelectedDirection] = useState(null);

  const handleShow = (direction) => {
    setSelectedDirection(direction);
    setShow(!show);
  };

  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.coinranking.com/v2/coin/${params.id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        const data = await response.json();
        console.log(data.data.coin);
        setData(data.data.coin);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="loading-gif">
        <img src={loading} alt="loading-gif" />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="trade bg-dark">
      <div
        className={`info ${data.price >= 1 ? "text-success" : "text-danger"}`}
      >
        <h4 className="m-0 fw-bold">{data.symbol}/USDT</h4>
        <h5 className="m-0 fw-bold">{data.price.slice(0, 7)}</h5>
        <span className="m-0 fw-bold">{data.price.slice(0, 3)}</span> &nbsp;
        <span className="m-0 fw-bold">{data.change}%</span>
      </div>
      <iframe
        id="tradingview_0ceb8"
        src={`https://s.tradingview.com/widgetembed/?frameElementId=tradingview_0ceb8&amp;symbol=BITSTAMP%3ABTCUSD&amp;interval=D&amp;symboledit=1&amp;saveimage=1&amp;toolbarbg=f1f3f6&amp;studies=%5B%5D&amp;theme=dark&amp;style=3&amp;timezone=Etc%2FUTC&amp;studies_overrides=%7B%7D&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en&amp;utm_source=portalworld.tradeints.com&amp;utm_medium=widget_new&amp;utm_campaign=chart&amp;utm_term=BITSTAMP%3ABTCUSD#%7B%22page-uri%22%3A%22portalworld.tradeints.com%2F%22%7D`}
        // src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_0ceb8&amp;symbol=BITSTAMP%3ABTCUSD&amp;interval=D&amp;symboledit=1&amp;saveimage=1&amp;toolbarbg=f1f3f6&amp;studies=%5B%5D&amp;theme=dark&amp;style=3&amp;timezone=Etc%2FUTC&amp;studies_overrides=%7B%7D&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en&amp;utm_source=portalworld.tradeints.com&amp;utm_medium=widget_new&amp;utm_campaign=chart&amp;utm_term=BITSTAMP%3ABTCUSD#%7B%22page-uri%22%3A%22portalworld.tradeints.com%2F%22%7D"
        style={{ width: "100%", height: "100vh" }}
        frameBorder="0"
        allowtransparency="true"
        scrolling="no"
        allowFullScreen=""
      ></iframe>
      <div className="buy-sell bg-dark">
        <button
          className="btn btn-success"
          onClick={() => handleShow("Buy Up")}
        >
          Buy Up
        </button>
        <div className="btn btn-danger" onClick={() => handleShow("Buy Fall")}>
          Buy Fall
        </div>
      </div>
      <div className={`bg-dark ${show ? "show" : "hide"}`}>
        <h5 className="text-center fw-bold">ORDER CONFIRMATION</h5>
        <IoMdClose className="close-icon" onClick={() => handleShow()} />
        <table width="100%">
          <tr>
            <th>NAME</th>
            <th>{data.symbol}/USDT</th>
          </tr>
          <tr>
            <td>Direction</td>
            <td>{selectedDirection}</td>
          </tr>
          <tr>
            <td>Current</td>
            <td>23455</td>
          </tr>
          <div className="my-2">
            <button className="btn btn-primary me-2">30S</button>
            <button className="btn btn-primary me-2">60S</button>
            <button className="btn btn-primary me-2">3M</button>
            <button className="btn btn-primary me-2">5M</button>
          </div>
        </table>
        <form action="" className="buy-form">
          <label htmlFor="">Buy Quantity</label>
          <input
            type="text"
            placeholder="Buy and make profit based on the timeframes above"
          />
          <div className="d-flex align-items-center justify-content-between mt-2">
            <h6>Available Balance: 2345678</h6>
            <h6>Handling Fee: 0.01%</h6>
          </div>
          <button className="btn btn-success mt-2">Confirm Order</button>
        </form>
      </div>
    </div>
  );
};

export default Trade;
