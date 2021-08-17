const express = require("express");
const router = express.Router();
const validateRegisterForShipment = require("../../validation/shipments/shipment_register")
const Shipment = require("../../models/Shipment");
const { response } = require("express");
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
  const shipment = Shipment.findById(req.params.id)
    .then ( shipment => Shipment.remove(shipment))
    .then ( () => res.json({message: "Successfully deleted"}))
    .catch( err => res.status(404).json(err))

  // const { id } = req.body.id;
  // res.send(req.body.id)
  // .then(res => console.log(res))
  // // debugger
  // console.log(id);
  // if ( Shipment.findOne({id: id})){
  //   Shipment.findOneAndDelete({id: id})
  // } else{
  //   return res.status(404).json({})
  // }
})

router.patch("/:id", (req, res)=> {
  Shipment.findOneAndUpdate({ id: req.body.id },
     { departure: req.body.departure, weight: req.body.weight, full: req.body.full, userId: req.body.userId },
         {new: true}, (error, data) => {
    if(error){
      console.log(error)
    }else{
      console.log(data)
    }
  })

});


router.get("/:id", (req, res) => {
  const shipment = Shipment.findById(req.params.id)
    .then( shipment => res.json(shipment))
    .catch( err => res.status(404).json(err))

})

module.exports = router;