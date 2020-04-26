var express = require('express');
var app = express();

app.get('http://www.omdbapi.com/?i=tt1285016', function(req, res, next) {
    res.status(200).json({ hello: 'world'});
});

app.get('/actors/:id/movies', function(req, res, next) {
    //Find all movies the actor with this :id is in
    //Respond to the client
});

app.post('/actors', function(req, res, next) {
    //Save new actor
    //Respond to the client
});

app.put('/actors/:id', function(req, res) {
    //Find and update the actor with this :id
    //Respond to the client
});

app.delete('/actors/:id', function(req, res) {
    //Remove the actor with this :id
    //Respond to the client
});


require('./parser')(app);
module.exports = app;