const validate = require("../validators/userValidator");
const express = require('express');
const router = express.Router();

const signupController = require('../controllers/signupController');

router.get('/', signupController.renderSignupPage);
router.post('/', validate('USER_REGISTER'), signupController.serverSideEmailValidation);

module.exports = router;
