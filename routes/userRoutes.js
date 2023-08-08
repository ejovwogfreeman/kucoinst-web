const express = require("express");
const { getUser } = require("../controllers/userControllers");
const protect = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/user", protect, getUser);

module.exports = router;
