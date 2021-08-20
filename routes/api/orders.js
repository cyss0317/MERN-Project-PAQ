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
router.get('/user/:userId', (req, res) => {

  // Order.find({ customerId: req.params.user_id })
  //   .sort ({ date: -1 })
  //   .then(orders => res.json(orders))
  //   .catch(err =>
  //     res.status(404).json({ noordersfound: "No orders found from this user" }
  //     )
  //   );

  const order = Order.find({ customerId: req.params.userId})
  .sort({delivered: false})
  .populate("customerId")
  .populate("order")
  .exec()
    .then(orders => res.json(orders))
    .catch(err => res.status(404).json(err))
});

// find by shipmentId
router.get('/shipment/:shipmentId', (req, res) => {
  const orders = Order.find({ shipmentId: req.params.shipmentId})
    .sort({delivered: false})  
    .populate("customerId")
    .populate("businessOwnerId")
    // .populate("shipmentId")
    .exec()
    .then(orders => res.json(orders))
    .catch(err =>
      res.status(404).json({ noorderfound: 'No order found with that ID' })
    );
});


router.get('/:id', (req, res) => {
  Order.findById(req.params.id)
    .populate("customerId")
    .populate("businessOwnerId")
    .populate("shipmentId")
    .exec()
    .then(order => res.json(order))
    .catch(err =>
      res.status(404).json({ noorderfound: 'No order found with that ID' })
    );
});

router.post('/',
(req, res) => {
  // const { errors, isValid } = validateOrderInput(req.body);
  
  //   if (!isValid) {
  //     return res.status(400).json(errors);
  //   }

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
        return res.status(400).json({ error: "Order did not update!"})
      } 
      res.json({data})
    })
});

router.get('/', (req, res) => {
  Order.find()
    .sort({ date: -1 })
    .then(orders => res.json(orders)
    .catch(err = res.status(400).json({ notordersfound: 'No orders found!'})))
})

module.exports = router;