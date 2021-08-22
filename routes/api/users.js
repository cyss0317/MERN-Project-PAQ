const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const keys = require('../../config/keys')
const jwt = require("jsonwebtoken");
const validateRegisterInput = require("../../validation/register")
const validateLoginInput = require("../../validation/login")
const bodyParser = require("body-parser");

router.use(bodyParser.json())

router.post("/register", (req, res)=> {
  const { errors, isValid } = validateRegisterInput(req.body);

  if ( !isValid ) {
    return res.status(400).json(errors);
  }

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
          phoneNumber: req.body.phoneNumber,
          address: req.body.address,
          shipment: req.body.shipment
        })
      
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then((user) => {
                const payload = {
                  _id: user._id,
                  name: user.name,
                  email: user.email,
                  phoneNumber: user.phoneNumber,
                  address: user.address
                }
                jwt.sign(
                  payload,
                  keys.secretOrKey,
                  { expiresIn: 3600},
                  (err, token) => {
                    res.json({
                      success: true,
                      token: "Bearer " + token
                    });
                  }
                )
              })
              .catch(err => console.log(err))
          })
        })
      }
    })
})

router.patch("/:id", (req, res) => {
  User.findOneAndUpdate({ _id: req.body._id },
    {
      address: req.body.address,
      phoneNumber: req.body.phoneNumber,
      shipment: req.body.shipment
    },
    { new: true }, (error, data) => {
      if (error) {
        res.json(error)
      } else {
        res.json(data)
      }
    })
});

router.get("/:id", (req, res) => {
  const user = User.findOne({_id: req.params.id})
    .populate("shipments")
    .exec()
    .then(user => res.json(user))
    .catch(err => res.status(404).json(err))

})


router.post('/login', (req, res)=> {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid){
    return res.status(400).json(errors)
  }

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
          const payload = {
            _id: user._id,
            name: user.name,
            email: user.email,
            phoneNumber: user.phoneNumber,
            address: user.address
          }
          jwt.sign(
            payload,
            keys.secretOrKey,
            { expiresIn: 3600},
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          )
        } else {
          return res.status(400).json({password: "Incorrect password"});
        }
      })
    })
})

router.get("/test", (req, res) => {
    res.json({ msg: "This is the user route"});
});



router.patch('/:_id/settings', (req,res) => {
  // const { errors, isValid } = validateLoginInput(req.body);

  // if(!isValid) {
  //   return res.status(500).json(errors); 
  // }

  
    User.findByIdAndUpdate(req.params._id,
    {
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      address: req.body.address,

    },
    {new: true}, 
    
    (error, data) => {
      if(error){
        res.json(error)
      } else {
        console.log(data)
        res.json(data)
      }
    }) 
  
})




module.exports = router;