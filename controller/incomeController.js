const IncomeModel = require('../models/incomeModel');

const createTransaction = async (req, res) => {
    const body = req.body;
    try {
        const transaction = await IncomeModel.create(body);
        res.status(200).send(transaction);
    } catch (err) {
        res.status(500).send('Internal Error')
    }
}

const getTransactions = async (req, res) => {
    try {
        const transaction = await IncomeModel.find({});
        res.status(200).send(transaction);
    } catch (err) {
        res.status(500).send('Internal Error')
    }
}

const deleteTransaction = async (req, res) => {
    const { id } = req.body;
    try {
        const transaction = await IncomeModel.findByIdAndDelete(id);
        res.status(200).send(transaction);
    } catch (err) {
        res.status(500).send('Internal Error')
    }
}
    const updateTransaction = async (req, res) => {
        const id = req.params.transactionId;
        const body = req.body
        console.log(body)
        try {
            const updatedTransaction = await IncomeModel.findByIdAndUpdate(id, body, { new: true })
            console.log(id)
            res.status(200).send(updatedTransaction)
        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    }

module.exports = { createTransaction, getTransactions, deleteTransaction, updateTransaction }