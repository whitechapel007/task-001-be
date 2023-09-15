const mongoose = require("mongoose");
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true,
  },
  email: {
    type: String,
    index: true,
  },
  age: String,
  phoneNo: String,
});

module.exports = mongoose.model("Person", personSchema);
