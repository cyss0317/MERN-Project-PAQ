const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Shipment = require("./Shipment")

const UserSchema = new Schema({
    businessOwner: {
      type: Boolean,
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
    shipments:[
      {
        shipment: {
          type: Schema.Types.ObjectId, ref: "shipment"
        }
      }
    ],

});


const User = mongoose.model('users', UserSchema);
module.exports = User;