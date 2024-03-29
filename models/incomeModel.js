const mongoose = require('mongoose');
const IncomeSchema = new mongoose.Schema({
    title: String,
    amount: Number,
    note: String,
    userId: { type: String },
    createdAt: { type:  String, default: Date.now().toString() },
    transactionType: {
        type: String,
        enum: ['income', 'expense']
    },
    category: {
        type: String,
        enum: ["Food & Drinks", "Shopping", "Housing", "Transportation", "Vehicle", "Life & Entertainment", 'Communication, PC', "Financial expenses", 'Investments', "Income", "Others"]
    }
})
const IncomeModel = mongoose.model("transaction", IncomeSchema)
module.exports = IncomeModel