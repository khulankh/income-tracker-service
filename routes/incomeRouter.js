const { Router } = require('express');
const { getTransactions, createTransaction, deleteTransaction, updateTransaction } = require('../controller/incomeController');

const transactionRouter = Router();

transactionRouter.post('/createTransaction', createTransaction);
transactionRouter.get('/getTransactions', getTransactions);
transactionRouter.delete('/deleteTransaction', deleteTransaction);
transactionRouter.put('/updateTransaction/:transactionId', updateTransaction);
module.exports = transactionRouter;