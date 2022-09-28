const { body } = require('express-validator');

const validate = (method) => {
	let error = [];
    switch (method) {
		case 'USER_REGISTER': {
			error = [
				body("email", "Email is required").isEmail(),
				body("password", "Password is required")
			];
			break;
		}
	}
	return error;
}

module.exports = validate;