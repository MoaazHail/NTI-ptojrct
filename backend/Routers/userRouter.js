const userController = require('../Controllers/userController');
const auth = require('../Utiliy/auth');

const express = require('express');
const router = express.Router();

router.post('/add',userController.addNewUser);
router.post('/login',userController.logIn);
router.get('/data',auth.verifyToken,userController.getUsers);

module.exports = router;