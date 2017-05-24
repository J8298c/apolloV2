/**
 * Created by julio.mojica on 5/24/2017.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    userimage: {
        type: String //passing string from file stack
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;