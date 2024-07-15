const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const expressAsyncHandler = require("express-async-handler");
const User = require("../models/User");

const userController = {
    // Register
    register: expressAsyncHandler(async (req, res) => {
        const { firstName, lastName, email, password, confirmPassword } = req.body;

        // Check if passwords match
        if (password !== confirmPassword) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
        });

        try {
            const savedUser = await newUser.save();
            res.status(201).json({ message: 'User registered successfully', user: savedUser });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }),

    // Login
    login: expressAsyncHandler(async (req, res) => {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Check password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Generate token
        const token = jwt.sign({ id: user._id }, process.env.JWT_PRIVATE_KEY, { expiresIn: "30d" });

        // Send the response
        res.json({ message: "Login success", token, id: user._id, email: user.email, username: user.username });
    }),

    // Get user by ID
    getUser: expressAsyncHandler(async (req, res) => {
        try {
            const userId = req.params.userId;
            const user = await User.findById(userId).select("-password");
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            res.json({ user });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }),

    // Get all users
    getAllUsers: expressAsyncHandler(async (req, res) => {
        try {
            const users = await User.find().select("-password");
            res.json({ users });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }),

    // Delete user
    deleteUser: expressAsyncHandler(async (req, res) => {
        try {
            const userId = req.params.userId;
            const deletedUser = await User.findByIdAndDelete(userId).select("-password");
            if (!deletedUser) {
                return res.status(404).json({ message: "User not found" });
            }
            res.json({ message: "User deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    })
}

module.exports = userController;
