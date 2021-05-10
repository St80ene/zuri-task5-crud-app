const express = require('express');
const router = express.Router();

//handling request to homepage
router.get('/', (req, res) => {
	res.send(
		'Hey there, welcome to My First Zuri CRUD APP. I am Excited.Yaaay!!'
	);
});

module.exports = router;