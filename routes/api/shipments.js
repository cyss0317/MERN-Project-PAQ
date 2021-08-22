const express = require("express");
const router = express.Router();
const validateRegisterForShipment = require("../../validation/shipments/shipment_register")
const Shipment = require("../../models/Shipment");
const { response } = require("express");
const User = require("../../models/User");


router.get("/test", (req, res) => {
  res.json({message: "This is the shipments route"})
})

router.post("/create", (req, res) => {
    const { errors, isValid } = validateRegisterForShipment(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const newShipment = new Shipment({ 
        departure: req.body.departure,
        weight: req.body.weight,
        full: req.body.full,
        userId: req.body.userId,
        delivered: req.body.delivered,
        order: req.body.orders
    })
    newShipment.save()
    .then((newShipment) => res.json(newShipment))
    .catch(err => console.log(err))
})

router.delete("/:id", (req, res) => {
  const shipment = Shipment.findById(req.params.id)
    .then ( shipment => Shipment.remove(shipment))
    .then ( () => res.json({message: "Successfully deleted"}))
    .catch( err => res.status(404).json(err))

  // const { id } = req.body.id;
  // res.send(req.body.id)
  // .then(res => console.log(res))

  // console.log(id);
  // if ( Shipment.findOne({id: id})){
  //   Shipment.findOneAndDelete({id: id})
  // } else{
  //   return res.status(404).json({})
  // }
})

router.patch("/:_id", (req, res)=> {
  Shipment.findOneAndUpdate({ _id: req.params._id },
  // Shipment.findByIdAndUpdate( req.params._id ,
     { departure: req.body.departure,
       weight: req.body.weight,
       full: req.body.full, 
       delivered: req.body.delivered,
       order: req.body.order
       },
         {new: true}, (error, data) => {
    if(error){
      res.json(error)
    }else{
      res.json(data)
    }
  })
});


router.get("/:id", (req, res) => {
  const shipment = Shipment.findById(req.params.id)
    .populate("userId")
    .populate("order")
    .exec()
    .then( shipment => res.json(shipment))
    .catch( err => res.status(404).json(err))

})

router.get("/allShipments/:delivered", (req, res) => {
  Shipment.find({ delivered: req.params.delivered })
    .populate("userId")
    .populate("order")
    .exec()
    .then( shipments => res.json(shipments))
    .catch(err => res.status(404).json(err))
})

router.get("/user/:userId", (req, res) => {
  const shipment = Shipment.find({ userId: req.params.userId})
  .sort({delivered: false})
  .populate("userId")
  .populate("order")
  .exec()
    .then(shipments => res.json(shipments))
    .catch(err => res.status(404).json(err))

})
// router.get('/user/:id', (req, res) => {
//   Shipment.findAll()
//     .then( shipments => shipments.findBy({userId: req.params.userId }))
//     .sort({ date: -1 })
//     .then(shipments => res.json(shipments))
//     .catch(err => res.status(404).json(err))
// });

router.get("/allShipments/:delivered", (req,res) => {
  debugger
  Shipment.find({delivered: req.params.delivered})
  .populate('userId')
  .populate("order")
  .exec()
    .then(shipments => res.json(shipments))
    .catch(err => res.status((404).json(err)))
})


module.exports = router;