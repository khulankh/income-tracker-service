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

module.exports = { createTransaction, getTransactions, deleteTransaction }