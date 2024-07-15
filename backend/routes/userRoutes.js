const express = require("express");
const userController = require("../controllers/userController");
const isAuthenticated = require("../middlewares/Auth");

const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/users/:userId', isAuthenticated, userController.getUser);
router.get('/users', isAuthenticated, userController.getAllUsers);
router.delete('/users/:userId', isAuthenticated, userController.deleteUser);

module.exports = router;