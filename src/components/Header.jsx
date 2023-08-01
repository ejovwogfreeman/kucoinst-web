import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import Carousel from "react-bootstrap/Carousel";
import "../css/Header.css";

const Header = () => {
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
    </div>
  );
};

export default Header;
