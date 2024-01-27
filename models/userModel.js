const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    email : String,
    name: String,
    password: String,
    avatarImg : String,
    createdAt :  { type: Date, default: Date.now() },
    updatedAt: Date,
    currencyType: String,
})
const UserDatabase = mongoose.model("User", UserSchema)
module.exports = UserDatabase