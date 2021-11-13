const mongoose = require("mongoose")

const recipySchema = mongoose.Schema({
  fullname: {
    type: String,
    minLength: 5,
    maxLength: 100
  }
}, {
  timestamp: true
})

const Recipy = mongoose.model("Recipy", recipySchema)

module.exports = Recipy
