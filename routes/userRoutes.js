const express = require("express");
const router = express.Router();
const checkAdmin = require("../middlewares/checkAdmin");
const verify = require("../middlewares/authToken");
const {
  registerUser,
  loginUser,
  updateUser,
  userInvest,
  userVerify,
  resetPassword,
  forgotPasword,
  getUser,
  userDeposit,
  userWithdraw,
  userTrade,
  getTransaction,
  getDeposit,
  getWithdrawal,
  getInvestment,
} = require("../controllers/userController");
const {
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
} = require("../controllers/adminController");
const { upload } = require("../config/file");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/reset-password", resetPassword);
router.post("/forgot-password", forgotPasword);
router.get("/", checkAdmin, adminGetUsers);
router.get("/single/:id", checkAdmin, adminGetUser);
router.patch("/update/:id", checkAdmin, adminUpdateUser);
router.delete("/delete/:id", checkAdmin, adminDeleteUser);
router.get("/user", verify, getUser);
router.post("/user/verify", verify, upload.array("files"), userVerify);
router.patch("/update-user", verify, upload.array("files"), updateUser);
router.post("/invest", verify, userInvest);
router.post("/deposit", verify, upload.array("files"), userDeposit);
router.post("/deposit/confirm", checkAdmin, confirmDeposit);
router.post("/deposit/process", checkAdmin, processDeposit);
router.post("/deposit/decline", checkAdmin, declineDeposit);
router.post("/trade", verify, userTrade);
router.post("/withdraw", verify, userWithdraw);
router.post("/withdraw/confirm", checkAdmin, confirmWithdraw);
router.post("/withdraw/process", checkAdmin, processWithdraw);
router.post("/withdraw/decline", checkAdmin, declineWithdraw);
router.get("/transactions", checkAdmin, getTransactions);
router.get("/transaction", verify, getTransaction);
router.get("/deposit", verify, getDeposit);
router.get("/deposits", checkAdmin, getDeposits);
router.get("/withdrawal", verify, getWithdrawal);
router.get("/withdrawals", checkAdmin, getWithdrawals);
router.get("/investment", verify, getInvestment);
router.get("/investments", checkAdmin, getInvestments);
router.post("/funduser", checkAdmin, fundUser);

module.exports = router;
