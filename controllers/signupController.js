const { check, validationResult } = require('express-validator');
const User = require('../models/userModel');

const renderSignupPage = (req, res) => {
    res.render('./signup');
    res.end();
}


const serverSideEmailValidation = 
    check('email')
    .notEmpty().withMessage('Email cannot be empty')
    .isEmail().withMessage('Email is invalid'), (req, res) => {

    const errors = validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()});
    
};
const user = new User({
    email: req.body.email,
    password: req.body.password
}); 

user.save();
res.redirect('verify-email');
};
module.exports = {renderSignupPage, serverSideEmailValidation}
