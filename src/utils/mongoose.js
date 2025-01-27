require('dotenv').config();
const mongoose = require("mongoose")

const DATABASE_URL = process.env.DATABASE_URL

mongoose.connect(DATABASE_URL, {
    ssl: true,
})
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));