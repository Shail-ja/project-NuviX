const express = require("express");
const router = express.Router();
const LoanApplication = require("../models/LoanApplication");
const authMiddleware = require("../middlewares/auth");

// Submit a new loan application
router.post("/", authMiddleware, async (req, res) => {
  try {
    const {
      name,
      age,
      income,
      existingDebtPayment,
      loanAmount,
      loanRate,
      loanTerm,
      hasDependents,
      hasMortgage,
      loanPurpose
    } = req.body;

    const loanApplication = new LoanApplication({
      user: req.user.id,
      name,
      age,
      income,
      existingDebtPayment,
      loanAmount,
      loanRate,
      loanTerm,
      hasDependents,
      hasMortgage,
      loanPurpose
    });

    await loanApplication.save();
    res.status(201).json(loanApplication);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Get all loan applications for a user
router.get("/", authMiddleware, async (req, res) => {
  try {
    const applications = await LoanApplication.find({ user: req.user.id });
    res.json(applications);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;