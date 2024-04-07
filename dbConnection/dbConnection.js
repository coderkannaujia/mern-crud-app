const mongoose = require('mongoose')
require('dotenv').config();


const MONGO_URL = process.env.MONGODB_URL

const db =  mongoose.connect(MONGO_URL)
.then(()=> console.log("server connected")
);



module.exports = db;