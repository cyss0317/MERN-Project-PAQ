const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  price: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: false
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
  },
  receiver: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  orderStatus: {
    type: String,
    required: true
  },
  businessOwner: {
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
  shipmentId: {
    type: String,
    required: true
  }
});


const Order = mongoose.model('orders', OrderSchema);
module.exports = Order;