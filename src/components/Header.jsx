import React, { useEffect, useState } from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import Carousel from "react-bootstrap/Carousel";
import banner2 from "../assets/banner2.png";
import { BiWorld, BiHelpCircle } from "react-icons/bi";
import "../css/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [page, setPage] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.coinranking.com/v2/coins");
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        const data = await response.json();
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
    <div className="header">
      <Carousel slide>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img4} alt="Forth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img5} alt="Fifth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img6} alt="Sixth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img7} alt="Seventh slide" />
        </Carousel.Item>
      </Carousel>
      <div className="flex-component">
        {data.map((x) => {
          return (
            <div
              key={x.uuid}
              style={{ background: "white" }}
              className="p-3 d-flex rounded flex-column align-items-center"
            >
              <span>
                <span className="fw-bold">{x.symbol}</span>/USDT
              </span>
              <span
                className={`fw-bold ${
                  x.change > 0 ? "text-success" : "text-danger"
                }`}
              >
                {x.price.slice(0, 7)}
              </span>
              <span
                className={`${x.change > 0 ? "text-success" : "text-danger"}`}
              >
                {x.change}%
              </span>
            </div>
          );
        })}
      </div>
      <div className="banner1">
        <div className="img">
          <h4>Quick Transactions</h4>
          <p>Support</p>
          <h5>BTC, USDT, ETH, e.t.c</h5>
        </div>
        <div className="text">
          <Link to="">
            <BiWorld />
            <span>Trending Features</span>
          </Link>
          <Link to="">
            <BiHelpCircle />
            <span>Help Center</span>
          </Link>
        </div>
      </div>

      <div className="banner2">
        <img src={banner2} alt="" />
      </div>
    </div>
  );
};

export default Header;
