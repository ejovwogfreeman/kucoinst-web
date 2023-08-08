const express = require("express");
const {
  createTicket,
  updateTicket,
  deleteTicket,
  getAllTickets,
  getSingleTicket,
} = require("../controllers/ticketControllers");
const protect = require("../middlewares/authMiddleware");
const { upload } = require("../middlewares/fileMiddleware");

const router = express.Router();

router.get("/", protect, getAllTickets);
router.get("/:id", getSingleTicket);
router.post("/create", protect, upload.array("files"), createTicket);
router.put("/update/:id", protect, updateTicket);
router.delete("/delete/:id", protect, deleteTicket);

module.exports = router;
