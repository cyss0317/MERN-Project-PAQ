const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    businessOwner: {
      type: Boolean,
      required: true
    },
    // clients: {
    //   type: Integer,
    //   required: false
    // },
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }

});


const User = mongoose.model('users', UserSchema);
module.exports = User;