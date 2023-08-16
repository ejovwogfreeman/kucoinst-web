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
import Passwordreset from "./pages/Passwordreset";
import Passwordresetconfirm from "./pages/Passwordresetconfirm";
import PrimaryVerification from "./pages/PrimaryVerification";
import SecondaryVerification from "./pages/SecondaryVerification";
import Trades from "./pages/Trades";
import TradeDeposit from "./pages/TradeDeposit";
import TradeWithdrawal from "./pages/TradeWithdrawal";
import Notfound from "./pages/Notfound";

const App = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const authToken = JSON.parse(storedUser).token;
      const config = {
        headers: {
          "auth-token": authToken,
        },
      };

      axios
        .get("https://kucoinst-web.onrender.com/api/users/user", config)
        .then((response) => {
          setUser(response.data);
          console.log(response.data); // Logging the response data
        })
        .catch((error) => {
          console.error("Error fetching user data:", error); // More informative error logging
        });
    }
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
        <Route element={<ProtectedRoutes />}>
          <Route
            path="/primary_verification"
            element={<PrimaryVerification />}
          />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route
            path="/secondary_verification"
            element={<SecondaryVerification />}
          />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/trades" element={<Trades />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/deposits" element={<TradeDeposit />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/withdrawals" element={<TradeWithdrawal />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset_password" element={<Passwordreset />} />
        <Route
          path="/confirm_password_reset"
          element={<Passwordresetconfirm />}
        />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Navbar />
    </BrowserRouter>
  );
};

export default App;
