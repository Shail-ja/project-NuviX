const mongoose = require("mongoose");

const LoanApplicationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  income: { type: Number, required: true },
  existingDebtPayment: { type: Number, required: true },
  loanAmount: { type: Number, required: true },
  loanRate: { type: Number, required: true },
  loanTerm: { type: Number, required: true },
  hasDependents: { type: Boolean, required: true },
  hasMortgage: { type: Boolean, required: true },
  loanPurpose: { type: String, required: true },
  status: { 
    type: String, 
    enum: ["pending", "approved", "rejected"], 
    default: "pending" 
  },
}, { timestamps: true });

module.exports = mongoose.model("LoanApplication", LoanApplicationSchema);