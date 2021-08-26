const mongoose = require('mongoose')

const ariBnbSchema = mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: String,
})

module.exports = mongoose.model('AirBnbHostName', ariBnbSchema)
