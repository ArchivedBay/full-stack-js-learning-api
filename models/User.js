const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the schema
const UserSchema = new Schema({ // this is where you define the columns for your model.
  name:{
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

//this creates a model based on the schema above and exports it.
module.exports = User = mongoose.model('users', UserSchema)