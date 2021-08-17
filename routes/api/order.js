const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Order = require('../../models/Orders');

router.get('/user/:user_id', (req, res) => {
  Order.find({ user: req.params.user_id })
    .sort ({ date: -1 })
    .then(orders => res.json(orders))
    .catch(err =>
      res.status(404).json({ noordersfound: "No orders found from this user" }
      )
    );
});

// router.delete('/orders/:id', (req, res) {
//   Order.findByIdAndRemove({ _id: req.params.user_id })
//     .then( res.redirect("/orders");
    
//     )
// })