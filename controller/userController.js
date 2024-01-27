const UserDatabase = require('../models/userModel');
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
    const body = req.body;
    const password = body.password;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const data = { ...body, password: hashedPassword };

    try {
        const user = await UserDatabase.create(data);
        res.status(200).send(user._id);
    } catch (err) {
        res.status(500).send('Internal Error')
    }
}
module.exports = { createUser }