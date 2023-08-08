const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    sec: {
      type: String,
      required: true,
    },
    row: {
      type: String,
      required: true,
    },
    seat: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    venue: {
      type: String,
      required: true,
    },
    image: [Object],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ticket", ticketSchema);
