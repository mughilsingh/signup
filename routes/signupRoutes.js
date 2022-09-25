const express = require('express');
const router = express.Router();

const signupController = require('../controllers/signupController');

router.get('/', signupController.renderSignupPage);
router.post('/', signupController.serverSideEmailValidation);

module.exports = router;
