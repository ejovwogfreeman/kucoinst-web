import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Market from "./pages/Market";
import Trade from "./pages/Trade";
import Assets from "./pages/Assets";
import Account from "./pages/Account";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
        <Route path="/trade/:id" element={<Trade />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/account" element={<Account />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Navbar />
    </BrowserRouter>
  );
};

export default App;
