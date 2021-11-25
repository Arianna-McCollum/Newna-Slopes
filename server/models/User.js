const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Order = require('./Order');

const userSchema = new Schema({
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
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  orders: [Order.schema]
});

// set up pre-save middleware to create password
// userSchema.pre('save', async function(next) {
//   if (this.isNew || this.isModified('password')) {
//     const saltRounds = 10;
//     this.password = await bcrypt.hash(this.password, saltRounds);
//   }

//   next();
// });

// encrypts new password when updated
userSchema.pre('findOneAndUpdate', async function(next) {
    if (this._update.password){
    const saltRounds = 10;
    this._update.password = await bcrypt.hash(this._update.password, saltRounds);
    };

  next();
});


const User = mongoose.model('User', userSchema);

module.exports = User;
