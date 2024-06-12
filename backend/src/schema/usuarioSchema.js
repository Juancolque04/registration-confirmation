const mongoose = require("mongoose");

const usuarioSchema = mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  isConfirmed: {
    type: Boolean,
    default: false,
  },
});

const users = mongoose.model("users", usuarioSchema);

module.exports = { users };
