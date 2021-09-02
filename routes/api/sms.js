const express = require("express");
const router = express.Router();
const validateMessages = require('../../validation/messages')
const accountSid = require("../../config/keys").accountSid;
const authToken = require("../../config/keys").authToken;
const client = require('twilio')(accountSid, authToken);
const phoneNumber = require('../../config/keys').phoneNumber


      
 

router.post('/', (req,res) => {
  const { errors, isValid } = validateMessages(req.body);
  if(!isValid){
    return res.status(400).json(errors); 
  }
  res.header('Content-Type', 'application/json');
  client.messages
          .create({
               body: req.body.body,
               from: phoneNumber,
               to: `+1${req.body.to}`
         })
         .then(() => {
           res.send(JSON.stringify({ success: true}));
         })
         .catch(err => {
           console.log(err);
           res.send(JSON.stringify({success: false}));
         });
});



router.post('/massText', (req,res) => {
  const { errors, isValid } = validateMessages(req.body);
  if(!isValid){
    return res.status(400).json(errors); 
  }
  Promise.all(
    req.body.numbers.map(number => {
      return client.messages
          .create({
            to: number, 
            from: phoneNumber,
            body: req.body.body 
          })
    })
  )
        .then(messages => {
          console.log('Messages sent!');
        })
        .catch(err => console.log(err))
})



module.exports = router; 