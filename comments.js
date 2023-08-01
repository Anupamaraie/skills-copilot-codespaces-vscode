// Create web server

// Require modules
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Comment = require('./models/comment');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/comments');

// Create web server
var app = express();

// Use body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/api'));

// Start web server
app.listen(3000);
console.log('API is running on port 3000');