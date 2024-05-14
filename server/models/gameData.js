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
    default: Date.now,
  },
  createdDate: {
    type: Number,
    default: Date.now,
  },
});

const gameData = mongoose.model('gameData', GameDataSchema);
module.exports = gameData;
