const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const keys = require('../../config/keys')


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

router.post('/login', (req, res)=> {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email })
    .then(user => {
      if (!user){
        return res.status(404).json({ email: "This user does not exist" });
      }

      bcrypt.compare(password, user.password)
      .then(isMatch => {
        if(isMatch){
        res.json({msg: "Success!"})
        } else {
          return res.status(400).json({password: "Incorrect password"});
        }
      })
    })
})

router.get("/test", (req, res) => {
    res.json({ msg: "This is the user route"});
});

module.exports = router;