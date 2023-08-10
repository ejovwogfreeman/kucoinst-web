const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    referralId: {
      type: String,
      required: false,
    },
    referrals: {
      type: Number,
      default: 0,
    },
    username: {
      type: String,
      requied: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    phoneNum: {
      type: String,
    },
    password: {
      type: String,
      required: true,
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
    investments: [
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
    mail: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Email",
      },
    ],
    support: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Support",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
