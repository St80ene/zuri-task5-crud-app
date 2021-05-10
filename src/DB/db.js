const mongoose = require('mongoose');

const dbConnectionOptions = {
	useNewUrlParser: true,
	useFindAndModify: false,
	useCreateIndex: true,
	useUnifiedTopology: true,
};

const databaseURI = process.env.DATABASE_URI;

class DataBase {
	constructor() {
		//
	}

	//connection to database
	async connectDataBase() {
		console.log('Attempting connection to Database');
		await mongoose.connect(databaseURI, dbConnectionOptions);
	}
}

module.exports = DataBase;
