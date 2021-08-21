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
    shipments:[
      {
        shipment: {
          type: Schema.Types.ObjectId, ref: "shipment"
        }
      }
    ],
    deliveryMan:{
      type: Schema.Types.ObjectId, ref: 'users'
    }

});


const User = mongoose.model('users', UserSchema);
module.exports = User;