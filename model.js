const mongoose = require("mongoose");
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true,
  },
});

module.exports = mongoose.model("Person", personSchema);
