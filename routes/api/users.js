const express = require("express");
const router = express.Router();
const User = require("../../models/User");

router.post("/register", (req, res)=> {
    User.findOne({email: req.body.email })
      .then( user => {
        if ( user ){
          return res.status(400).json({email: "A user is already registered with this email"})
        } else {
          const newUser = new User({
            email: req.body.email,
            name: req.body.name,
            businessOwner: req.body.businessOwner,
            password: req.body.password,
            phoneNumber: req.body.phoneNumber
          })
          newUser.save()
            .then( user => res.send(user))
            .catch(err => res.send(err));
        }
      })
})

router.get("/test", (req, res) => {
    res.json({ msg: "This is the user route"});
});

module.exports = router;