import React from "react";
import logo from "../assets/titleicon.png";
import "../css/Topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <img src={logo} alt="" />
    </div>
  );
};

export default Topbar;
