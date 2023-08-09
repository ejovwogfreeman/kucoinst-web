const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
    },
    phoneNum: {
      type: String,
      unique: true,
    },
    username: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    inviteCode: {
      type: String,
    },
    invites: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    balance: {
      type: Number,
      default: 0,
    },
    profit: {
      type: Number,
      default: 0,
    },
    profileImage: [Object],
    transactions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction",
      },
    ],
    exchange: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Investment",
      },
    ],
    deposits: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "deposit",
      },
    ],
    withdrawal: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "withdrawal",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
