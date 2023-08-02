import React from "react";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Crypto from "../components/Crypto";

const Home = () => {
  return (
    <div>
      <Topbar />
      <Header />
      <Crypto />
      <Navbar />
    </div>
  );
};

export default Home;
