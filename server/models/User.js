const mongoose = require('mongoose');

const {Schema} = mongoose;
const Order = require('./Order');
const bcrypt = require('bcrypt')

const userSchema = new Schema ({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8
    },
    orders: [Order.schema]
})

const User = mongoose.model('User', userSchema);

module.exports = User;