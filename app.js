// app.js
//
// Set routing and middleware.

var express = require('express');
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var path = require('path');
require('dotenv').config();
var contacts = require('./routes/contacts');

var app = express();

// set up 'moment' for date formatting
app.locals.moment = require("moment");

// setup the mongoose connection
var uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-shard-00-00-tkkm3.mongodb.net:27017,cluster0-shard-00-01-tkkm3.mongodb.net:27017,cluster0-shard-00-02-tkkm3.mongodb.net:27017/${process.env.DB_NAME}?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`;
mongoose.connect(uri);

// listen for Mongo DB connecion errors
var db = mongoose.connection;
db.on('error', (err) => {
    console.error('connection error: ${err}');
});

// initialize body-parser
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

// Page views are stored in the 'views' folder
app.set('views', './views');

// Set Pug as the template engine
app.set('view engine', 'pug');

// Requests for the root should display the 'contacts' view
app.get('/', (request, response) => {
    response.redirect('contacts');
});

// Static elements are served out of the public folder
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'public', 'css')));

// The app recognizes these routes:
app.use('/contacts', contacts);

// Handle anything we don't specifically recognize with a 404 response
app.use((request, response, next) => {
    response.status(404);
    response.send('File could not be found');
});

module.exports = app;
