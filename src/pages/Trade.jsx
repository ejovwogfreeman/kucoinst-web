import React, { useEffect, useState } from "react";
import "../css/Trade.css";
import loading from "../assets/loading.gif";
import { useParams } from "react-router-dom";

const Trade = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(true);

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
    <div className="trade">
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
    </div>
  );
};

export default Trade;
