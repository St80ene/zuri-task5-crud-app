const mongoose = require('mongoose')
const { Schema } = require('mongoose');

//defining payload structure
const userModel = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
    },
    country: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('user', userModel);

