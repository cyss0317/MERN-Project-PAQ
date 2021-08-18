const express = require("express");
const router = express.Router();

const accountSid = require("../../config/keys").accountSid;
const authToken = require("../../config/keys").authToken;
const client = require('twilio')(accountSid, authToken);
const phoneNumber = require('../../config/keys').phoneNumber


      
 

router.post('/', (req,res) => {
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

// multiple messages 

router.post('/massText', (req,res) => {
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

// router.post('/massText', (req,res) => {
//   res.header('Content-Type', 'application/json');
//   req.body.numbers.forEach(number => {
//     client.messages
//           .create({
//                body: req.body.body,
//                from: phoneNumber,
//                to: `+1${number}`
//          })
//          .then(() => {
//            res.send(JSON.stringify({ success: true}));
//          })
//          .catch(err => {
//            console.log(err);
//            res.send(JSON.stringify({success: false}));
//          });
//   })
  
// });

module.exports = router; 