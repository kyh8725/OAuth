const express = require("express");
const router = express.Router();
const Vehicle = require("../../models/vehicles");

router.get("/", async (req, res) => {
  try {
    const data = await Vehicle.find({});
    res.send(data);
    console.log(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/new", async (req, res) => {
  const vehicle = new Vehicle({
    make: req.body,
  });
  try {
    const savedVehicle = await vehicle.save();
    res.status(201).send(savedVehicle);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
