const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
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
  delivered: {
    type: Boolean,
    default: false,
    required: true
  },
  businessOwnerId: {
    type: Schema.Types.ObjectId, ref: "users",
    required: true
  },
  customerId: {
    type: Schema.Types.ObjectId, ref: "users",

  },
  shipmentId: {
    type: Schema.Types.ObjectId, ref: "shipment",
    required: true
  },
},
  {timestamps: true}
);


const Order = mongoose.model('order', OrderSchema);
module.exports = Order;