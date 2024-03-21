const { Router } = require('express');
const { getTransactions, createTransaction, deleteTransaction } = require('../controller/incomeController');

const transactionRouter = Router();

transactionRouter.post('/createTransaction', createTransaction);
transactionRouter.get('/getTransactions', getTransactions);
transactionRouter.delete('/deleteTransaction', deleteTransaction);

module.exports = transactionRouter;
