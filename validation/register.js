const Validator = require("validator");
const validText = require("./valid-text")


module.exports = function validateRegisterInput(data){
    let errors = {};

    data.name = validText(data.name) ? data.name : ""
    data.email = validText(data.email) ? data.email : ""
    data.password = validText(data.password) ? data.password : ""
    data.password2 = validText(data.password2) ? data.password2 : ""
    data.businessOwner = validText(data.businessOwner) ? data.businessOwner : ""
    data.phoneNumber = validText(data.phoneNumber) ? data.phoneNumber : ""
    data.address = validText(data.address) ? data.address : ""

    if (!Validator.isLength(data.name, {min: 2, max: 30})){
        errors.name = "Name must be between 2 to 30 characters"
    }

    if (Validator.isEmpty(data.name)){
        errors.name = "Name field is required"
    } 
    
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required"
    }

    //question . might cause issue
    if (Validator.isEmail(data.email)) {
        errors.email = "Email is invalid"
    }
    if (Validator.isEmpty(data.password)){
        errors.password = "Password field is required";
    }
    if (!Validator.isLength(data.password)) {
        errors.password = "Password must be between 2 to 30 characters";
    }
    if (!Validator.equals(data.password, data.password2)) {
        errors.password = "Passwords must match";
    }
    if (!Validator.isLength(data.password)) {
        errors.password = "Password must be between 2 to 30 characters";
    }
    if (!Validator.isLength((data.address), {min: 10, max: 70})){
        errors.address = "Address must be between 10 to 70 characters"
    }
    if (Validator.isEmpty(data.address)) {
        errors.address = "address field is required";
    }

    data.address = validText(data.address) ? data.address : ""
    return { 
        errors,
        isValid: Object.keys(errors).length === 0
    }
}
