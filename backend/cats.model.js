/*
 *Cat Model
 *Name String
 *Age String
 *Description String
 *ImgUrl String
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Cat = new Schema({
    cat_name: {
        type: String
    },
    cat_age: {
        type: String
    }, 
    cat_description: {
        type: String
    },
    cat_img: {
        type: String
    },
});
module.exports = mongoose.model('Cat', Cat);
