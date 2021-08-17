const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShipmentSchema = new Schema({
    departure: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    full: {
        type: Boolean,
        required: true
    },
    userId: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});


const Shipment = mongoose.model('shipments', ShipmentSchema);
module.exports = Shipment;