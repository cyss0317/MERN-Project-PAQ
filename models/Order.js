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
    type: Schema.Types.ObjectId, ref: "users",
    required: true
  },
  customerId: {
    type: Schema.Types.ObjectId, ref: "users",
    required: true,
    // type: Schema.Types.ObjectId,
    // ref: 'user'
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