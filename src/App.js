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
import DepositPage from "./pages/DepositPage";
import Withdraw from "./pages/Withdraw";
import WithdrawPage from "./pages/WithdrawPage";
import Exchange from "./pages/Exchange";
import axios from "axios";

const App = () => {
  const [user, setUser] = useState({});

  const authToken = JSON.parse(localStorage.getItem("user")).token;
  const config = {
    headers: {
      "auth-token": authToken,
    },
  };

  useEffect(() => {
    axios
      .get("https://kucoinst-web.onrender.com/api/users/user", config)
      .then((response) => {
        setUser(response.data);
        console.log(response.data); // Logging the response data
      })
      .catch((error) => {
        console.error("Error fetching user data:", error); // More informative error logging
      });
  }, []);

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
          <Route path="/trade/:id" element={<Trade user={user} />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/assets" element={<Assets user={user} />} />
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
          <Route path="/deposit/:method" element={<DepositPage />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/withdraw" element={<Withdraw />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/withdraw/:method" element={<WithdrawPage />} />
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
