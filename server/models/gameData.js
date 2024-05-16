const mongoose = require('mongoose');
const { Schema } = mongoose;

const gameDataSchema = new Schema({
  food: {
    type: Number,
    default: 30,
  },
  happiness: {
    type: Number,
    default: 25,
  },
  energy: {
    type: Number,
    default: 50,
  },
  name: {
    type: String,
    required: true,
  },
  lastSaveDate: {
    type: Number,
    default: Date.now,
  },
  timeAlive: {
    type: Number,
    default: 0,
  },
  createdDate: {
    type: Number,
    default: Date.now,
  },
});

module.exports = gameDataSchema;
