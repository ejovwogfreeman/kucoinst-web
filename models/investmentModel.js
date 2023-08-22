const mongoose = require("mongoose");

const investmentSchema = new mongoose.Schema(
  {
    user: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      username: String,
      email: String,
    },
    amount: {
      type: Number,
      required: true,
    },
    plan: {
      name: {
        type: String,
        enum: [
          "Lock Up Mining 01",
          "Lock Up Mining 02",
          "Lock Up Mining 03",
          "Lock Up Mining 04",
          "Lock Up Mining 05",
        ],
        default: "Lock Up Mining 01",
      },
      minAmount: {
        type: Number,
        default: 2000,
      },
      dailyProfit: {
        type: Number,
        default: 0.007,
      },
      days: {
        type: Number,
        default: 5,
      },
      // Add more properties as needed
    },
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "processing", "confirmed", "failed", "declined"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Investment", investmentSchema);
