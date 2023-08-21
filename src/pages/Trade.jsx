import React, { useEffect, useState } from "react";
import "../css/Trade.css";
import loader from "../assets/loading.gif";
import { useParams } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import { toast } from "react-toastify"; // Make sure to import toast
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import GaugeChart from "react-gauge-chart";

const Trade = ({ user }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const [selectedDirection, setSelectedDirection] = useState(null);
  const [duration, setDuration] = useState(null);
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false); // Corrected state variable name

  const [showModal, setShowModal] = useState(false);

  const [speed, setSpeed] = useState(0);
  const [time, setTime] = useState(0);

  const [showTime, setShowTime] = useState(true);
  const [showBtn, setShowBtn] = useState(false);

  const authToken = JSON.parse(localStorage.getItem("user")).token;
  const config = {
    headers: {
      "auth-token": authToken,
    },
  };

  const handleClick = (e) => {
    setDuration(e.target.getAttribute("data-value"));
    document.querySelectorAll(".btn-primary").forEach((span) => {
      span.classList.remove("active");
    });
    e.target.classList.add("active");
  };

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const randomSpeed = Math.random() * 100;
      setSpeed(randomSpeed);

      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleShowBtn = () => {
    setTime(0);
    setShow(false);
    if (duration === "30") {
      setTimeout(() => {
        setShowBtn(true);
        setShowTime(false);
      }, 30000);
    } else if (duration === "60") {
      setTimeout(() => {
        setShowBtn(true);
        setShowTime(false);
      }, 60000);
    } else if (duration === "180") {
      setTimeout(() => {
        setShowBtn(true);
        setShowTime(false);
      }, 180000);
    } else {
      setTimeout(() => {
        setShowBtn(true);
        setShowTime(false);
      }, 360000);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
      duration,
      amount,
    });

    if (!amount || !duration) {
      return toast.error("PLEASE FILL ALL FIELDS");
    }

    setLoading(true);

    const trade = {
      duration,
      amount,
    };

    try {
      const response = await axios.post(
        "https://kucoinst-web.onrender.com/api/users/trade",
        trade,
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

  const handleShow = (direction) => {
    setSelectedDirection(direction);
    setShow(!show);
  };

  let gain;
  if (duration === "30") {
    gain = (20 * amount) / 100;
  } else if (duration === "60") {
    gain = (30 * amount) / 100;
  } else if (duration === "180") {
    gain = (50 * amount) / 100;
  } else {
    gain = (60 * amount) / 100;
  }

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
        setData(data.data.coin);
        console.log(data.symbol);
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
        <img src={loader} alt="loading-gif" />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="trade bg-dark" style={{ paddingBottom: "60px" }}>
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
        // src={`https://s.tradingview.com/widgetembed/?frameElementId=tradingview_0ceb8&amp;symbol=BITSTAMP%3ABTCUSD&amp;interval=D&amp;symboledit=1&amp;saveimage=1&amp;toolbarbg=f1f3f6&amp;studies=%5B%5D&amp;theme=dark&amp;style=3&amp;timezone=Etc%2FUTC&amp;studies_overrides=%7B%7D&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en&amp;utm_source=portalworld.tradeints.com&amp;utm_medium=widget_new&amp;utm_campaign=chart&amp;utm_term=BITSTAMP%3ABTCUSD#%7B%22page-uri%22%3A%22portalworld.tradeints.com%2F%22%7D`}
        src={`https://s.tradingview.com/widgetembed/?frameElementId=tradingview_0ceb8&symbol=BITSTAMP:${data.symbol}USD&interval=D&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=%5B%5D&theme=dark&style=3&timezone=Etc%2FUTC&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=portalworld.tradeints.com&utm_medium=widget_new&utm_campaign=chart&utm_term=BITSTAMP:${data.symbol}USD#%7B%22page-uri%22%3A%22portalworld.tradeints.com%2F%22%7D`}
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
      <div className={`bg-dark ${show ? "showBox" : "hideBox"}`}>
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
            <td>{data.price.slice(0, 7)}</td>
          </tr>
        </table>
        <form action="" className="buy-form" onSubmit={handleSubmit}>
          <div className="my-2">
            <span
              data-value="30"
              className="btn btn-primary me-2"
              onClick={handleClick}
            >
              30S
            </span>
            <span
              data-value="60"
              className="btn btn-primary me-2"
              onClick={handleClick}
            >
              60S
            </span>
            <span
              data-value="180"
              className="btn btn-primary me-2"
              onClick={handleClick}
            >
              3M
            </span>
            <span
              data-value="300"
              className="btn btn-primary me-2"
              onClick={handleClick}
            >
              5M
            </span>
          </div>
          <label htmlFor="">Buy Quantity</label>
          <input
            type="number"
            onChange={handleChange}
            value={amount}
            placeholder="Buy and make profit based on the timeframes above"
          />
          <div className="d-flex align-items-center justify-content-between mt-2">
            <h6>Available Balance: {user.usdt}</h6>
            <h6>Handling Fee: 0.01%</h6>
          </div>
          <button disabled={loading} className="btn btn-success mt-2 w-100">
            {loading ? "LOADING" : "CONFIRM ORDER"}
          </button>
        </form>
      </div>
      <div className={showModal ? "trade-modal-cover" : "hide-modal"}>
        <div className="trade-modal rounded">
          <h4 className="text-center text-dark fw-bold">{data.symbol}</h4>
          {showTime && showModal && (
            <>
              <GaugeChart
                id="speedometer"
                nrOfLevels={3}
                percent={speed / 100}
                arcsLength={[0.3, 0.5, 0.2]}
                colors={["#ff0000", "#ffa500", "#00ff00"]}
                textColor="#000"
                needleColor="#333"
                needleBaseColor="#333"
                hideText
              />
              <div style={{ textAlign: "center", marginTop: "10px" }}>
                <p className="text-dark">Time: {time} seconds</p>
              </div>
            </>
          )}
          {showTime && showModal && (
            <table className="text-dark" width="100%">
              <tr className="px-2">
                <td>Current</td>
                <td>{data.price.slice(0, 7)}</td>
              </tr>
              <tr className="px-2">
                <td>Direction</td>
                <td>{selectedDirection}</td>
              </tr>
              <tr className="px-2">
                <td>Quantity</td>
                <td>{amount} USDT</td>
              </tr>
              {/* <tr className="px-2">
                <td>Expected</td>
                <td>{gain} USDT</td>
              </tr> */}
            </table>
          )}
          {showBtn && (
            <>
              <div className="text-success d-flex align-items-center justify-content-center">
                <h3 className="text-strong">+{gain}</h3>
                <span>USDT</span>
              </div>
              <table className="text-dark" width="100%">
                {/* <tr className="px-2">
                  <td>Direction</td>
                  <td>{selectedDirection}</td>
                </tr> */}
                <tr className="px-2">
                  <td>Quantity</td>
                  <td>{amount} USDT</td>
                </tr>
              </table>
            </>
          )}
          {showBtn && (
            <span
              className="btn btn-success mt-2 w-100"
              onClick={() => {
                toast.success("TRADE MADE SUCCESSFULLY");
                setShowModal(false);
                setTimeout(() => {
                  window.location.reload();
                }, 3000);
              }}
            >
              Close Page
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Trade;
