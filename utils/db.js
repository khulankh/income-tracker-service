const mongoose = require('mongoose');


const connectToMongoDb = async () => {
    try {
        const mongoUri = 'mongodb+srv://khulankh:%40Pi46895@cluster0.tt8nuyt.mongodb.net/'
        await mongoose.connect(mongoUri)
        console.log("Database was connected")
    } catch (err) {
        console.log('Error')
        console.log(err)
    }
};
module.exports = connectToMongoDb