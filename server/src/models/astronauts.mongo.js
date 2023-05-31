const mongoose = require('mongoose');

const astronautsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: Number,
    required: true,
  },
  launchNumber: {
    type: Date,
    required: true,
  },
  scheduled: {
    type: Boolean,
    required: true,
    default: false,
  },
});

// Connects launchesSchema with the "launches" collection
module.exports = mongoose.model('Astronauts', astronautsSchema);
