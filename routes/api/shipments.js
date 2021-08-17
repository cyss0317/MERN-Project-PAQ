const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const validateRegisterInput = require("../../validation/register")
const validateLoginInput = require("../../validation/login")

router.post("/register", (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                return res.status(400).json({ email: "A user is already registered with this email" })
            } else {
                const newUser = new User({
                    email: req.body.email,
                    name: req.body.name,
                    businessOwner: req.body.businessOwner,
                    password: req.body.password,
                    phoneNumber: req.body.phoneNumber,
                    address: req.body.address
                })

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then((user) => res.json(user))
                            .catch(err => console.log(err))
                    })
                })
            }
        })
})

module.exports = router;