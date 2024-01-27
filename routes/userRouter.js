const { Router } = require('express');
const { createUser } = require('../controller/UserController');
const { validateInput } = require('../middleware/userValidation')

const userRouter = Router();

userRouter.post('/signup', validateInput, createUser)

module.exports = userRouter