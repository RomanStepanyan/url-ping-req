const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  service_URL: String,
  ping_timestamp: String,
  HTTP_status: Number,
});

const Log = mongoose.model("Log", logSchema, "log");

module.exports = {
  Log,
};
