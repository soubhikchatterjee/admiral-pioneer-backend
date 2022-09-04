"use strict";

const mongoose = require("mongoose");

const taxSchema = new mongoose.Schema(
  {
    name: String,
    taxAmount: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tax", taxSchema);
