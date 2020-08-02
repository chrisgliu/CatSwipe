const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const CatRoute = express.Router();
const PORT = 4000;

let Cat = require('./cats.model');
app.use(cors());
app.use(bodyParser.json());

// connecting to local cats mongo database 
mongoose.connect('mongodb://127.0.0.1:27017/cats', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

//get all
CatRoute.route('/').get(function(req, res) {
    Cat.find(function(err, cats) {
        if (err) { console.log(err);
        } else { res.json(cats); }
    });
});
//get specific
CatRoute.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Cat.findById(id, function(err, cats) {
        res.json(cats);
    });
});
// change specific
CatRoute.route('/update/:id').post(function(req, res) {
    Cat.findById(req.params.id, function(err, cat) {
        if (!cat) {res.status(404).send("data is not found"); 
        } else {
            cat.cat_name = req.body.cat_name;
            cat.cat_age = req.body.cat_age;
            cat.cat_description = req.body.cat_description;
            cat.cat_img = req.body.cat_img;
        }
        cat.save().then(cat => {
        res.json('Cat updated!');
        })
        .catch(err => {
          res.status(400).send("Update not possible");
        });
    });
});
// new cat
CatRoute.route('/add').post(function(req, res) {
    let chatte = new Cat(req.body);
    cat.save()
        .then(chatte => {
            res.status(200).json({'cat': 'cat added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new cat failed');
        });
});
// register cat routes
app.use('/cats', CatRoute);
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
