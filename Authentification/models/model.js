const mongoose = require("mongoose");
const muv = require("mongoose-unique-validator");

const userShema = mongoose.Schema({
  firstname: { type: "string", required: true },
  lastname: { type: "string", required: true },
  email: { type: "string", required: true, unique: true },
  password: { type: "string", required: true },
  date: { type: Date, default: Date.now },
});

mongoose.plugin(muv);

module.exports = mongoose.model("user", userShema);
