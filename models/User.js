const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Shipment = require("./Shipment")

const UserSchema = new Schema({
    businessOwner: {
      type: Boolean,
      // required: true
    },
    address: {
      type: String,
      required: true
    },
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
    },
    
    shipment:{
      type: Schema.Types.ObjectId, ref: "shipments"
    }

});


const User = mongoose.model('users', UserSchema);
module.exports = User;