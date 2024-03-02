const { Router } = require('express');
const {getTransactions, createTransaction} = require('../controller/incomeController')

const transactionRouter = Router();

transactionRouter.post('/createTransaction', createTransaction)
transactionRouter.get('/getTransactions', getTransactions)

module.exports = transactionRouter