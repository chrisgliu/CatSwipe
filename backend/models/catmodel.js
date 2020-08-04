const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Cat = new Schema({
    name: { type: String},
    sex: { type: String}, 
    detail: { type: String}, 
    age: { type: String}, 
    url: { type: String},
});
module.exports = mongoose.model('Cat', Cat);