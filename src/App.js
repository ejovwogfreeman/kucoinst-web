import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Market from "./pages/Market";
import Trade from "./pages/Trade";

const App = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
        <Route path="/trade/:id" element={<Trade />} />
      </Routes>
      <Navbar />
    </BrowserRouter>
  );
};

export default App;
