const Validator = require("validator");
const validText = require("../valid-text")


module.exports = function validateRegisterForShipment(data) {
    let errors = {};

    data.departure = validText(data.departure) ? data.departure : ""
    // data.weight = validText(data.weight) ? data.email : ""
    // data.full = validText(data.full) ? data.full : ""
    // data.userId = validText(data.userId) ? data.userId : ""


    if (Validator.isEmpty(data.departure)) {
        errors.departure = "Departure field is required"
    }

    if (Validator.isEmpty(data.weight)) {
        errors.weight = "Weight field is required"
    }
    

    if (Validator.isEmpty(data.userId)) {
        errors.userId = "User_id is field is required"
    }
    

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}
