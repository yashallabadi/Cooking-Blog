const mongoose = require('mongoose');
require('dotenv').config()
const categoryschema = new mongoose.Schema({
    name:{
        type: String,
        required:'This field is required.'
    },
    image:{
        type: String,
        required:'This field is required.'
    }
});

module.exports = mongoose.model('Category', categoryschema);