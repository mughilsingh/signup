const { check, validationResult } = require('express-validator');
const User = require('../models/userModel');

const renderSignupPage = (req, res) => {
    res.render('./signup');
    res.end();
}


const serverSideEmailValidation =  (req, res) => {
    
    const errors = validationResult(req);

    if(errors.array()){
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
