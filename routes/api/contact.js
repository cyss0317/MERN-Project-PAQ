const express = require("express");
const router = express.Router();

const nodemailer = require("nodemailer");
const paqEmail = require('../../config/keys').user;
const pass = require('../../config/keys').pass;

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: paqEmail,
    pass: pass 
  },
}); 

contactEmail.verify((error) => {
  if(error){
    console.log(error);
  }else{
    console.log('Ready to Send');
  }
})

router.post('/', (req,res) => {
  debugger 
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message; 

  const mail = {
    from: name,
    to: paqEmail,
    subject: 'Contact form submission',
    html: `<p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if(error){
      require.json({status: 'ERROR'});
    }else{
      res.json({status: 'Message Sent'})
    }
  })
})



module.exports = router; 