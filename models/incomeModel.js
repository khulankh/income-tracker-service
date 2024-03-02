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
        enum: ['investment', 'food', 'bills', 'other']
    }
})
const IncomeModel = mongoose.model("transaction", IncomeSchema)
module.exports = IncomeModel