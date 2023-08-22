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
      requied: true,
    },
    plan: {
      type: String,
      default: "Lock Up Mining O1",
      enum: [
        "Lock Up Mining O1",
        "Lock Up Mining O2",
        "Lock Up Mining O3",
        "Lock Up Mining O4",
        "Lock Up Mining O5",
      ],
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
