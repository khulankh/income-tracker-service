const mongoose = require('mongoose');
const IncomeSchema = new mongoose.Schema({
    title: String,
    amount: Number,
    note: String,
    userId: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() },
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