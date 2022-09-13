const express = require('express');
const router = express.Router();

const User = require('../models/userModel');

router.get('/', (req, res) => {
    res.render('./signup');
    res.end();
});

router.post('/', (req, res) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password
    }); 
    
    user.save();
    res.redirect('/index');
});

module.exports = router;