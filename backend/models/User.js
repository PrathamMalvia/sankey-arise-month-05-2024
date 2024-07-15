const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: {
            type: String,
            required: true,
            unique: true,
            match: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
        },
        password: { type: String, required: true },
        role: { type: String, enum: ['admin', 'user'], default: 'user' }
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
