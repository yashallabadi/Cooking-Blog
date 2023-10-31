const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect('mongodb+srv://yashallabadi24:Yash%40242002@cluster0.sdj09sb.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error:'));
db.once('open', function () {
    console.log('connected')
});

// model 
require('./Category');
require('./Recipe')