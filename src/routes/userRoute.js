const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const userValidation = require('../middleware/userValidation')

const user = new userController()

//handling requests concerning users

router.get('/users', user.get);

router.get('/users/:id', user.getById);

router.post('/users', userValidation, user.create);

router.put('/users/:id', userValidation, user.update);

router.delete('/users/:id', user.delete);

module.exports = router;
