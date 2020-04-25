var express = require('express');
var app = express();

var mongoose = require('mongoose');
var User = require('./models/user');
var passport = require('./passport');


mongoose.connect('mongodb://localhost/page1', function(err){
    if(err) throw err;
});

app.use(require('cookie-parser')('secret string'));
app.use(require('express-session')({
    secret: 'other secret string'
}));
app.use(require('body-parser')());
app.use(passport.initialize());
app.use(passport.session());

// app.get('/', (req, res) => {
//     res.send('hello, world');
// });


app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.get('/', function(req, res, next){
    res.render('index');
});


// The way to add multiple templates
// app.engine('jade', require('jade').__express);
//    app.engine('html', require('ejs').__express);
//    app.get('/html', function(req, res, next) {
//    res.render('index.html');
// });
// app.get('/jade', function(req, res, next) {
//     res.render('index.jade');
// });

app.listen(3000);


