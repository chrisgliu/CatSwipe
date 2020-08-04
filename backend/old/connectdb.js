const mongoose = require('mongoose')

const uri = "mongodb+srv://chris:2438@cluster0.awwks.mongodb.net/TaskManager?retryWrites=true&w=majority";

mongoose
    .connect(uri, { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db


// // connecting to local cats mongo database 
// mongoose.connect('mongodb://127.0.0.1:27017/cats', { useNewUrlParser: true });
// const connection = mongoose.connection;
// connection.once('open', function() {
//     console.log("MongoDB database connection established successfully");
// })