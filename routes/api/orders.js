const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
// const jwt = require('jsonwebtoken');
require('../../config/passport')(passport);
const validateOrderInput = require('../../validation/order');
const {response} = require('express');

const Order = require('../../models/Order');

router.get("/test", (req, res) => {
  res.json({ msg: "This is the order route" })
})

//might have to change the route
router.get('/user/:user_id', (req, res) => {
  Order.find({ customerId: req.params.user_id })
    .sort ({ date: -1 })
    .then(orders => res.json(orders))
    .catch(err =>
      res.status(404).json({ noordersfound: "No orders found from this user" }
      )
    );
});

router.get('/:id', (req, res) => {
  Order.findById(req.params.id)
    .then(order => res.json(order))
    .catch(err =>
      res.status(404).json({ noorderfound: 'No order found with that ID' })
    );
});

router.post('/',
// passport.authenticate('jwt', { session: false }),
(req, res) => {
  const { errors, isValid } = validateOrderInput(req.body);
  
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newOrder = new Order({
      price: req.body.price,
      weight: req.body.weight,
      receiverName: req.body.receiverName,
      description: req.body.description,
      delivered: req.body.delivered,
      businessOwnerId: req.body.businessOwnerId,
      customerId: req.body.customerId,
      shipmentId: req.body.shipmentId
    });

    newOrder.save().then(order => res.json(order));
  }
);

router.delete('/:id', (req, res) => {
  Order.findOneAndRemove({_id: req.params.id}, (err) => {
    if (err) {
      return next(err)
    };
    res.json({ orderdeleted: "Order has been deleted!"})
  })
})

router.patch('/:id',
  (req, res) => {
    // Order.findById(req.params.id)

    Order.findOneAndUpdate({_id: req.params.id}, {
        price: req.body.price,
        weight: req.body.weight,
        receiverName: req.body.receiverName,
        description: req.body.description,
        delivered: req.body.delivered,
        businessOwnerId: req.body.businessOwnerId,
        customerId: req.body.customerId,
        shipmentId: req.body.shipmentId
    },
    {new: true}, 
    (err, data) => {
      if(err){
        // console.log(err)
        // return next(err)
        return res.status(400).json({ error: "Order did not update!"})
      } 
      res.json({data})
    })
    // res.json({ orderupdated: "Still not updating the order!"}))

});

module.exports = router;