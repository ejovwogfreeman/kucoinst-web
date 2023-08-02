import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Market from "./pages/Market";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
      </Routes>
      <Navbar />
    </BrowserRouter>
  );
};

export default App;
