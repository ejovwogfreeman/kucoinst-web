import React, { useEffect, useState } from "react";
import "../css/Crypto.css";

const Market = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.coinranking.com/v2/coins");
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        const data = await response.json();
        console.log(data.data.coins);
        setData(data.data.coins);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="price-volume" style={{ paddingTop: "60px" }}>
        <span
          onClick={() => setPage(true)}
          style={{
            color: page ? "blue" : "black",
            borderColor: page ? "blue" : "rgba(0,0,0,0.5)",
            cursor: "pointer",
          }}
        >
          Optional
        </span>
        <span
          onClick={() => setPage(false)}
          style={{
            color: !page ? "blue" : "black",
            borderColor: !page ? "blue" : "rgba(0,0,0,0.5)",
            cursor: "pointer",
          }}
        >
          USDT
        </span>
      </div>
      <div className="crypto-container">
        {data.map((x) => {
          return (
            <div key={x.uuid} className="crypto">
              {page ? (
                <>
                  <span className="d-flex align-items-center">
                    <img src={x.iconUrl} alt="" width="20px" />
                    <span className="symbol-price d-flex align-items-center justify-content-between">
                      <span className="ms-3">{x.symbol}/USDT</span>
                      <span className="ms-5">{x.price.slice(0, 7)}</span>
                    </span>
                  </span>
                  <span
                    className={`btn ${
                      x.change > 0 ? "btn-success" : "btn-danger"
                    }`}
                  >
                    {x.change}%
                  </span>
                </>
              ) : (
                <>
                  <span className="d-flex align-items-center">
                    <img src={x.iconUrl} alt="" width="20px" />
                    <span className="symbol-price d-flex align-items-center justify-content-between">
                      <span className="ms-3">{x.symbol.slice(0, 5)}/USDT</span>
                      <span className="ms-5">{x.price.slice(0, 7)}</span>
                    </span>
                  </span>
                  <span className={`btn ${"btn-primary"}`}>{x.marketCap}</span>
                </>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Market;
