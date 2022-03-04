const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  opendate: {
    type: Date,
    required: true,
  },
  updatedate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model('data', dataSchema);
