const mongoose = require('mongoose');
const { Schema } = mongoose;

const GameDataSchema = new Schema({
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
  lastSaveDate: {
    type: Number,
    required: true,
    // need to fix: the last state date needs to be equal to the current date if anything is updated
  },
  createdDate: {
    type: Number,
    required: true,
    default: Date.now,
  },
});

module.exports = GameDataSchema;
