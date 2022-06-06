const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, uppercase: true },
    email: { type: String, uppercase: true },
    mobile: { type: Number },
    password: { typ: String },
  },
  { collection: "register" }
);

module.export = mongoose.model("userModel", userSchema);
