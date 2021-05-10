const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const DataBase = require('./src/DB/db');
const homeRoute = require('./src/routes/homeRoute');
const userRoute = require('./src/routes/userRoute');

const app = express();

const port = process.env.PORT || 2710;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(homeRoute);
app.use(userRoute);


function dataBaseConnection() {
	new DataBase()
		.connectDataBase()
		.then(() => console.log('Successfully connected to Database'))
		.catch((error) => console.error(error.message));

	app.listen(port, () => console.log(`App listening on port ${port}`));
}

dataBaseConnection();
