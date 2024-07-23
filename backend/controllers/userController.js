const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const expressAsyncHandler = require("express-async-handler");
const User = require("../models/User");

const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY;

const userController = {
    // Register
    register: expressAsyncHandler(async (req, res) => {
        const { firstName, lastName, email, password, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }

        if (password.length < 8) {
            return res.status(400).json({ message: 'Password must be at least 8 characters long' });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
        });

        const savedUser = await newUser.save();
        res.status(201).json({ message: 'User registered successfully', userId: savedUser._id });
    }),

    // Login
    login: expressAsyncHandler(async (req, res) => {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id }, JWT_PRIVATE_KEY, { expiresIn: '1h' });

        res.json({ message: "Login successful", token, userId: user._id });
    }),

    // Verify token
    verifyToken: expressAsyncHandler(async (req, res) => {
        const token = req.headers['authorization']?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }

        try {
            const decoded = jwt.verify(token, JWT_PRIVATE_KEY);
            res.status(200).json({ message: 'Token is valid', userId: decoded.id });
        } catch (err) {
            return res.status(401).json({ message: 'Failed to authenticate token' });
        }
    }),
    // Get user by ID
    getUser: expressAsyncHandler(async (req, res) => {
        const userId = req.params.userId;
        const user = await User.findById(userId).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ user });
    }),

    // Get all users
    getAllUsers: expressAsyncHandler(async (req, res) => {
        const users = await User.find().select("_id firstName lastName email");
        res.json({ users });
    }),

    // Delete user
    deleteUser: expressAsyncHandler(async (req, res) => {
        const userId = req.params.userId;
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "User deleted successfully" });
    })
}

module.exports = userController;