const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const fileUpload = require('express-fileupload');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(expressLayouts);
app.use(cookieParser('CookingBlogSecure'));
app.use(session({
    secret: 'CookingBlogSecretSession',
    saveUninitialized: true,
    resave: true
}))
app.use(flash());
app.use(fileUpload());

app.set('view engine', 'ejs');
app.set('views', './views/layouts');


const routes = require('./server/routes/reciperoute.js');
app.use('/', routes);

app.listen(port, () => console.log(`App listening on port ${port}!`));