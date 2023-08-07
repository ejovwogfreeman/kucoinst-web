import React from "react";
import "../css/Navbar.css";
import { FaHouseUser, FaChartBar } from "react-icons/fa";
import { TbChartCandle } from "react-icons/tb";
import { BiChat } from "react-icons/bi";
import { BsPersonSquare } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">
            <FaHouseUser />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/market">
            <FaChartBar />
            <span>Markets</span>
          </Link>
        </li>
        <li>
          <Link to="">
            <TbChartCandle />
            <span>Trade</span>
          </Link>
        </li>
        <li>
          <Link to="/assets">
            <BiChat />
            <span>Assets</span>
          </Link>
        </li>
        <li>
          <Link to="/account">
            <BsPersonSquare />
            <span>Me</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
