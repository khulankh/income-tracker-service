const IncomeModel = require('../models/incomeModel');

const createTransaction = async (req, res) => {
    const body = req.body;
    try {
        const transaction = await IncomeModel.create(body);
        console.log(transaction)
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
module.exports = { createTransaction, getTransactions }