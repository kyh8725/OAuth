const mongoose = require("mongoose");

const VehicleSchema = new mongoose.Schema({
  make: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Vehicles", VehicleSchema);
