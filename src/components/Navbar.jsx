import React from "react";
import "../css/Navbar.css";
import { FaHouseUser, FaChartBar } from "react-icons/fa";
import { TbChartCandle } from "react-icons/tb";
import { BiChat } from "react-icons/bi";
import { BsPersonSquare } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="">
            <FaHouseUser />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="">
            <FaChartBar />
            <span>Markets</span>
          </a>
        </li>
        <li>
          <a href="">
            <TbChartCandle />
            <span>Trade</span>
          </a>
        </li>
        <li>
          <a href="">
            <BiChat />
            <span>Assets</span>
          </a>
        </li>
        <li>
          <a href="">
            <BsPersonSquare />
            <span>Me</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
