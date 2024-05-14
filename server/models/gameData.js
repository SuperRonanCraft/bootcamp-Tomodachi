const mongoose = require('mongoose');
const { Schema } = mongoose;

const gameDataSchema = new Schema({
  food: {
    type: Number,
    required: true,
  },
  happiness: {
    type: Number,
    required: true,
  },
  energy: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  lastSaveDate: {
    type: Number,
    default: Date.now,
  },
  createdDate: {
    type: Number,
    default: Date.now,
  },
});

module.exports = gameDataSchema;
