const mongoose = require('mongoose');

const astronautsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  status:{
    type: Boolean,
    required:true,
  },
  launchNumber: {
    type: Number,
    required: false,
  },
  gender:{
    type:String,
    required:true,
  },
  scheduled: {
    type: Boolean,
    required: true,
    default: false,
  },
});

// Connects launchesSchema with the "launches" collection
module.exports = mongoose.model('Astronauts', astronautsSchema);
