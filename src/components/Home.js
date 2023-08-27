import React, { useEffect, useState } from "react";
import "../css/Home.css";
import Navbar from "./Navbar";
import SearchIcon from "@mui/icons-material/Search";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PaymentsIcon from "@mui/icons-material/Payments";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { TransactionContext } from "../context/TransactionContext";
import { UsersContext } from "../context/UsersContext";
// import loaderimg from "../assets/icons8-combo-chart.gif";
import Loader from "./Loader";
import { Helmet } from "react-helmet";
import "../css/Home.css";
// import { UserContext } from "../context/UserContext";
// import { useNavigate } from "react-router-dom";
import { Button, Box, Popover, Typography, TextField } from "@mui/material";

const Home = () => {
  let hours = new Date().getHours();
  let time = null;
  if (hours < 12) {
    time = "Good Morning!";
  } else if (hours < 16) {
    time = "Good Afternoon!";
  } else if (hours < 21) {
    time = "Good Evening!";
  } else {
    time = "Good Night!";
  }

  const { users } = React.useContext(UsersContext);

  const { investment, deposit, withdrawal } =
    React.useContext(TransactionContext);
  const [usersState, setUsersState] = users;
  const [investmentState, setInvestmentState] = investment;
  const [depositState, setDepositState] = deposit;
  const [withdrawalState, setWithdrawalState] = withdrawal;
  const [tradeIsOpen, setTradeIsOpen] = useState("");
  const [admin, setAdmin] = useState({});

  // const [userState, setUserState] = React.useContext(UserContext);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!userState.username) {
  //     return navigate("/");
  //   }
  // });

  const authToken = JSON.parse(localStorage.getItem("user")).token;
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(
          "https://kucoinst-web.onrender.com/api/users/user",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "auth-token": authToken,
            },
          }
        );

        if (response.status === 200) {
          const user = await response.json();
          if (user.tradeIsOpen) {
            setTradeIsOpen(false);
          } else {
            setTradeIsOpen(true);
          }
        }
      } catch (error) {
        console.error("Error getting user:", error);
      }
    };

    getUser();
  }, []);

  const handleUpdateStatus = async () => {
    setTradeIsOpen(!tradeIsOpen);
    try {
      const response = await fetch(
        "https://kucoinst-web.onrender.com/api/users/trade",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": authToken,
          },
          body: JSON.stringify({ tradeIsOpen }),
        }
      );

      if (response.status === 200) {
        console.log("Trade status updated successfully");
      }
    } catch (error) {
      console.error("Error updating trade status:", error);
    }
  };

  return (
    <>
      {!usersState ? (
        <Loader />
      ) : (
        <>
          <div className="home-container">
            <Helmet>
              <title>Kucoin | dashboard</title>
            </Helmet>
            <Navbar />
            <form>
              <input type="text" />
              <SearchIcon className="search-icon" />
            </form>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h1>Hello Admin, {time}</h1>
              <button
                className={
                  tradeIsOpen === false ? "closeTradeStyle" : "openTradeStyle"
                }
                onClick={handleUpdateStatus}
              >
                {tradeIsOpen === false ? "LOCK TRADE" : "OPEN TRADE"}
              </button>
            </div>

            <div className="user-container">
              <div>
                <SupervisedUserCircleIcon className="icon" />
                <h3>Total Users</h3>
                <h1>{usersState && usersState.length}</h1>
              </div>
              <div>
                <AccountBalanceIcon className="icon" />
                <h3>Total Investments</h3>
                <h1>{investmentState && investmentState.length}</h1>
              </div>
              <div>
                <PaymentsIcon className="icon" />
                <h3>Total Deposits</h3>
                <h1>{depositState && depositState.length}</h1>
              </div>
              <div>
                <AccountBalanceWalletIcon className="icon" />
                <h3>Total Withdralals</h3>
                <h1>{withdrawalState && withdrawalState.length}</h1>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
