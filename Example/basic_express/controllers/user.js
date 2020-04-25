var User = require('mongoose').model('User');

module.exports.showRegistrationForm = function(req, res, next){
    res.send('register');
};

module.exports.createUser = function(req, res, next){
    User.register(req.body.email, req.body.password, function(err, user){
        if(err) return next(err);
        req.login(user, function(err){
            if(err) return next(err);
            res.redirect('/');
        });
    });
};

module.exports.showLoginForm = function(req, res, next){
    res.send('login');
};

module.exports.createSession = passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
});
