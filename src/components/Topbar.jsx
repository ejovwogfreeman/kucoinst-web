import React from "react";
import logo from "../assets/titleicon.png";
import "../css/Topbar.css";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="topbar">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
    </div>
  );
};

export default Topbar;
