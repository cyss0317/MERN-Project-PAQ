const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  // calculated field per weight input
  price: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  receiverName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  // autogenerated fields on the backend
  delivered: {
    type: Boolean,
    default: false,
    required: true
  },
  businessOwnerId: {
    type: String,
    required: true
  },
  customerId: {
    type: String,
    required: true
  },
  shipmentId: {
    type: String,
    required: true
  },
},
  {timestamps: true}
);


const Order = mongoose.model('orders', OrderSchema);
module.exports = Order;