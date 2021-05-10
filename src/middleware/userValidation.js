const Joi = require('joi');

const isValidUser = Joi.object({
	name: Joi.string().alphanum().min(3).max(30).required(),
	email: Joi.string().email().required(),
	country: Joi.string().required(),
});


//validating user using middleware
const userValidation = (req, res, next) => {
	const validation = isValidUser.validate(req.body);
	if (validation.error) {
		return res
			.status(400)
			.json({
				error: validation.error.details.map((error) =>
					error.message.replace(/"/g, '')
				),
			});
    }
    next()
};

module.exports = userValidation;
