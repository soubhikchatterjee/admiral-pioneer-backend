"use strict";

const mongoose = require("mongoose");

const giftWrapTypeSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("GiftWrapType", giftWrapTypeSchema);
