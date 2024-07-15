// Libraries
const express = require("express");
require('dotenv').config();
const mongoose = require("mongoose");
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler.js");

const userRoutes = require("./routes/userRoutes.js");

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(cors());

// Error Handler
app.use(errorHandler)

// Routes
app.use('/api', userRoutes);

// Default Route
app.get("/", (req, res) => {
    res.send("Hello");
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("App connected to database");
        // Start the server only after a successful DB connection
        app.listen(PORT, () => {
            console.log(`Server is running on PORT ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Database connection error:", error);
    });
