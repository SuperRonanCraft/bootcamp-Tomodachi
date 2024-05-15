const mongoose = require('mongoose');
const { Schema } = mongoose;

const gameDataSchema = new Schema({
  food: {
    type: Number,
    default: 100,
  },
  happiness: {
    type: Number,
    default: 100,
  },
  energy: {
    type: Number,
    default: 100,
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
