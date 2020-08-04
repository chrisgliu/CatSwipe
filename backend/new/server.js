const express = require('express');
const mongoose = require('mongoose');
const catRouter = require('./catrouter.js');

const app = express();
app.use(express.json()); // Make sure it comes back as json
const uri = "mongodb+srv://chris:2438@cluster0.awwks.mongodb.net/TaskManager?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true
});

app.use(catRouter);

app.listen(8000, () => { console.log('Server is running...') });