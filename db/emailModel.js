const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Input the email for ping log sending"],
  },
});

const Email = mongoose.model("Email", emailSchema, "email");

module.exports = {
  Email,
};
