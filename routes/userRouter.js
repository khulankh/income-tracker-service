const { Router } = require('express');
const {createUser, loginUser} = require('../controller/userController')
const { validateInput, validatePassword } = require('../middleware/userValidation')

const userRouter = Router();

userRouter.post('/signup', validateInput, createUser)
userRouter.post('/login', validatePassword, loginUser)

module.exports = userRouter