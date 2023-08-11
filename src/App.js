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
import ProtectedRoutes from "./components/ProtectedRoutes";
import Toastify from "./components/Toastify";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import Exchange from "./pages/Exchange";

const App = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <Toastify />
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/market" element={<Market />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/trade/:id" element={<Trade />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/assets" element={<Assets />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/account" element={<Account />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/deposit" element={<Deposit />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/withdraw" element={<Withdraw />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/exchange" element={<Exchange />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Navbar />
    </BrowserRouter>
  );
};

export default App;
