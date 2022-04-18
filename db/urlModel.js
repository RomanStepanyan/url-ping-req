const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  url: {
    type: String,
    required: [true, "Input the URL for ping"],
  },
});

const URL = mongoose.model("URL", urlSchema, "url-list");

module.exports = {
  URL,
};
