const express = require("express");
const userController = require("../controllers/userController");
const authenticate = require("../middlewares/Auth");

const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/users/:userId', authenticate, userController.getUser);
router.get('/users', authenticate, userController.getAllUsers);
router.delete('/users/:userId', authenticate, userController.deleteUser);

module.exports = router;