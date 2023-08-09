const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const Investment = require("../models/investmentModel");
const Transaction = require("../models/TransactionModel");
const Deposit = require("../models/depositModel");
const Withdrawal = require("../models/withdrawalModel");
const refCode = require("voucher-code-generator");
const sendEmail = require("../helpers/email");

////////////////////////////////////
///////////process Withdraw/////////
////////////////////////////////////

const processWithdraw = async (req, res) => {
  const { id } = req.body;
  const withdraw = await Withdrawal.findByIdAndUpdate(id, {
    status: "processing",
  });
  const transaction = await Transaction.findOneAndUpdate(
    { transaction: withdraw.id },
    {
      status: "processing",
    }
  );
  res.status(200).json({ message: "processing Successfully" });
};

////////////////////////////////////
///////////Confirm Withdraw//////////
////////////////////////////////////

const confirmWithdraw = async (req, res) => {
  const { id } = req.body;
  const withdraw = await Withdrawal.findByIdAndUpdate(id, {
    status: "confirmed",
  });
  const transaction = await Transaction.findOneAndUpdate(
    { transaction: withdraw.id },
    {
      status: "confirmed",
    }
  );

  let userid = transaction.user.id;

  const user = await User.findById(userid);

  const bal = Number(user.balance) - Number(withdraw.amount);

  await User.findByIdAndUpdate(userid, {
    balance: Number(bal),
  });
  res.status(200).json({ message: "Confirmed Successfully" });
};

////////////////////////////////////
///////////decline Withdraw/////////
////////////////////////////////////

const declineWithdraw = async (req, res) => {
  const { id } = req.body;
  const withdraw = await Withdrawal.findByIdAndUpdate(id, {
    status: "declined",
  });
  const transaction = await Transaction.findOneAndUpdate(
    { transaction: withdraw.id },
    {
      status: "declined",
    }
  );
  res.status(200).json({ message: "declined Successfully" });
};

////////////////////////////////////
///////////process Deposit//////////
////////////////////////////////////

const processDeposit = async (req, res) => {
  const { id } = req.body;
  const deposit = await Deposit.findByIdAndUpdate(id, {
    status: "processing",
  });
  const transaction = await Transaction.findOneAndUpdate(
    { transaction: deposit.id },
    {
      status: "processing",
    }
  );
  res.status(200).json({ message: "processing Successfully" });
};

////////////////////////////////////
///////////Confirm Deposit//////////
////////////////////////////////////

const confirmDeposit = async (req, res) => {
  const { id } = req.body;
  const deposit = await Deposit.findByIdAndUpdate(id, {
    status: "confirmed",
  });
  const transaction = await Transaction.findOneAndUpdate(
    { transaction: deposit.id },
    {
      status: "confirmed",
    }
  );

  let userid = transaction.user.id;

  const user = await User.findById(userid);

  const bal = Number(user.balance) + Number(deposit.amount);

  await User.findByIdAndUpdate(userid, {
    balance: Number(bal),
  });
  res.status(200).json({ message: "Confirmed Successfully" });
};

////////////////////////////////////
///////////decline Deposit//////////
////////////////////////////////////

const declineDeposit = async (req, res) => {
  const { id } = req.body;
  const deposit = await Deposit.findByIdAndUpdate(id, {
    status: "declined",
  });
  const transaction = await Transaction.findOneAndUpdate(
    { transaction: deposit.id },
    {
      status: "declined",
    }
  );
  res.status(200).json({ message: "declined Successfully" });
};

///////////////////////////////////
//////////get transactions/////////
///////////////////////////////////

const getTransactions = async (req, res) => {
  const transactions = await Transaction.find();
  res.status(200).json(transactions);
};

///////////////////////////////////
//////////get investments/////////
///////////////////////////////////

const getInvestments = async (req, res) => {
  const investments = await Investment.find();
  res.status(200).json(investments);
};

///////////////////////////////////
//////////get deposits/////////
///////////////////////////////////

const getDeposits = async (req, res) => {
  const deposits = await Deposit.find();
  res.status(200).json(deposits);
};

///////////////////////////////////
//////////get withdrawals/////////
///////////////////////////////////

const getWithdrawals = async (req, res) => {
  const withdrawals = await Withdrawal.find();
  res.status(200).json(withdrawals);
};

///////////////////////////////////
//////////fund user/////////
///////////////////////////////////

const fundUser = async (req, res) => {
  const { id, amount } = req.body;

  const user = await User.findById(id);

  const bal = Number(user.balance) + Number(amount);

  await User.findByIdAndUpdate(id, {
    balance: Number(bal),
  });
  res.status(200).json({ message: "Funded Successfully" });
};

///////////////////////////
///////get all users///////
///////////////////////////

const adminGetUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};

//////////////////////////////////////////////////
//////////////admin getting a user////////////////
//////////////////////////////////////////////////
const adminGetUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.send(user);
};

///////////////////////////////////////////////////
//////////////admin upgating a user////////////////
///////////////////////////////////////////////////
const adminUpdateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, userName, email, phoneNumber, balance, profit } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: { name, userName, email, phoneNumber, balance, profit } },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//////////////////////////////////////////////////
//////////////admin deleting a user///////////////
//////////////////////////////////////////////////
const adminDeleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  await res.status(200).send({ message: "user post deleted successfully" });
};

module.exports = {
  confirmDeposit,
  processDeposit,
  declineDeposit,
  processWithdraw,
  confirmWithdraw,
  declineWithdraw,
  getTransactions,
  getDeposits,
  getWithdrawals,
  getInvestments,
  fundUser,
  adminGetUsers,
  adminGetUser,
  adminUpdateUser,
  adminDeleteUser,
};
