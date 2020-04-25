var mongoose = require('mongoose');
var validator = require('validator');

var userSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    created_at: {type: Date, default: Date.now}
});

userSchema.pre('save', function(next){
    if(!this.isModified('password')){
        return next();
    }
    this.password = User.encryptPassword(this.password);
    next();
});

User.schema.path('email').validate(function(email){
    return validator.isEmail(email);
});

User.schema.path('password').validate(function(password){
    return validator.isLength(password, 6);
});

var User = mongoose.model('User', userSchema);
module.exports = User;
