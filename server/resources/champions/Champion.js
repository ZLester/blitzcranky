const mongoose = require('mongoose');

const championSchema = new mongoose.Schema({
  colors: {
    title: { 
      type: String,
    },
    subtitle: { 
      type: String,
    },
    role: { 
      type: String,
    },
  },
  id: {
    type: Number,
    unique: true,
  },
  key: { 
    type: String,
  },
  name: {
    type: String,
  },
  title: {
    type: String,
  },
  lore: {
    type: String,
  },
  blurb: {
    type: String,
  }
  tags: [{
    type: String,
  }],
  info: {
    attack: {
      type: Number,
    },
    defense: { 
      type: Number,
    },
    magic: {
      type: Number,
    },
    difficulty: {
      type: Number,
    },
  },
  icon: {
    type: String,
  },
  background: {
    type: String,
  }
});

module.exports = mongoose.model('Champion', championSchema);
