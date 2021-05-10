const DB = require('../DB/db');
const userModel = require('../model/userModel');

class UserController {
	constructor() {
		//
	}

	async create(req, res) {
		const { name, email, country } = req.body;
		try {
			//create new user
			const user = await userModel.findOne({ email });
			if (user) {
				return res.status(400).json({
					status: 400,
					message: 'User already exists',
				});
			}
			const savedUser = await userModel.create({
				name,
				email,
				country,
			});
			return res.status(200).json({
				status: 200,
				message: 'User created',
				data: savedUser,
			});
		} catch (error) {
			return res.status(500).json({
				status: 500,
				message: error.message,
			});
		}
	}

	async get(req, res) {
		try {
			//get list of all users
			const users = await userModel.find();
			return res.status(200).json({
				status: 200,
				message: 'List of users',
				data: users,
			});
		} catch (error) {
			return res.status(500).json({
				status: 500,
				message: error.message,
			});
		}
	}

	async getById(req, res) {
		try {
			const userId = req.params.id;
			//get user using id
			const user = await userModel.findById(userId);
			if (user) {
				return res.status(200).json({
					status: 200,
					message: 'Search successful',
					data: user,
				});
			}
		} catch (error) {
			return res.status(500).json({
				status: 500,
				message: error.message,
			});
		}
	}

	async update(req, res) {
		try {
			const userId = req.params.id;
			//search and update user using id
			const updatedUser = await userModel.findByIdAndUpdate(userId, req.body, {
				new: true,
			});
			return res.status(200).json({
				status: 200,
				message: 'User updated',
				data: updatedUser,
			});
		} catch (error) {
			return res.status(500).json({ status: 500, message: error.message });
		}
	}

	async delete(req, res) {
		try {
			const userId = req.params.id;

			//search and delete user using id
			const user = await userModel.findByIdAndDelete(userId, req.body);
			if (user) {
				res.status(200).json({
					status: 200,
					message: 'User deleted',
				});
			} else {
				throw new Error('User does not exist!');
			}
		} catch (error) {
			return res.status(500).json({ status: 500, message: error.message });
		}
	}
}

module.exports = UserController;
