const express = require("express");
const router = express.Router();
const validateRegisterForShipment = require("../../validation/shipments/shipment_register")
const Shipment = require("../../models/Shipment");
router.get("/test", (req, res) => {
  res.json({message: "This is the shipments route"})
})

router.post("/", (req, res) => {
    const { errors, isValid } = validateRegisterForShipment(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const newShipment = new Shipment({ 
        departure: req.body.departure,
        weight: req.body.weight,
        full: req.body.full,
        userId: req.body.userId,
    })
    newShipment.save()
    .then((newShipment) => res.json(newShipment))
    .catch(err => console.log(err))
})

router.delete("/:id", (req, res) => {
  const { id } = req.body.id;
  res.send(req.body.id)
  .then(res => console.log(res))
  // debugger
  // console.log(id);
  // if ( Shipment.findOne({id: id})){
  //   Shipment.findOneAndDelete({id: id})
  // } else{
  //   return res.status(404).json({})
  // }
})

router.get("/:id", (req, res) => {
  const shipment = Shipment.findById({id: req.params.id})
  if ( shipment ){
    return res.json(shipment)
  } else {
    return res.status(404).json({})
  }

})

module.exports = router;