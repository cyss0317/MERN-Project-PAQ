const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateOrderInput(data) {
  let errors = {};

  // data.weight = validText(data.weight) ? data.weight : "";
  data.receiverName = validText(data.receiverName) ? data.receiverName : "";
  data.description = validText(data.description) ? data.description : "";

  // if (Validator.isEmpty(data.price)) {
  //   errors.price = 'Price field is required';
  // }

  // if (Validator.isEmpty(data.weight)) {
  //   errors.weight = 'Weight field is required';
  // }

  if (Validator.isEmpty(data.receiverName)) {
    errors.receiverName = 'Receiver Name field is required';
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = 'Description field is required';
  }

  // if (Validator.isEmpty(data.delivered)) {
  //   errors.delivered = 'Delivered field is required';
  // }

  // if (Validator.isEmpty(data.businessOwnerId)) {
  //   errors.businessOwnerId = 'Business Owner Id field is required';
  // }

  // if (Validator.isEmpty(data.customerId)) {
  //   errors.customerId = 'Customer Id field is required';
  // }

  // if (Validator.isEmpty(data.shipmentId)) {
  //   errors.shipmentId = 'Shipment Id field is required';
  // }


  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};