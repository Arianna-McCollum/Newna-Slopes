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

// pre-save middleware that hashes password with bcrypt
userSchema.pre('save', async function(next) {
    if( this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds)
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;