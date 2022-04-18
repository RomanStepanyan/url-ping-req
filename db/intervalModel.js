const mongoose = require("mongoose");

const intervalSchema = new mongoose.Schema({
  interval: {
    type: Number,
    required: [true, "Input an interval for ping"],
  },
});

const Interval = mongoose.model("Interval", intervalSchema, "interval");

module.exports = {
  Interval,
};
