import React from "react";
import Header from "../components/Header";
import Crypto from "../components/Crypto";
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Crypto />
    </div>
  );
};

export default Home;
