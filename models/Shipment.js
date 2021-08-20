const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User")
const Order = require("./Order")


const ShipmentSchema = new Schema({
    departure: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true,
        default: 120
    },
    full: {
        type: Boolean,
        default: false,
        required: true
    },
    delivered: {
        type: Boolean,
        default: false,
        required: true
    },
    userId:{
        type: Schema.Types.ObjectId, ref: 'users',
        require: true
    },

    orders: {
        order: {
            type: Schema.Types.ObjectId, ref: "order"
            // [OrderShema]
        }
    },

    // order: {
    //     type: Schema.Types.ObjectId, ref: "order"
    // },

    date: {
        type: Date,
        default: Date.now
    },

});


const Shipment = mongoose.model('shipment', ShipmentSchema);
module.exports = Shipment;