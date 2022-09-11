"use strict";

const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Types.ObjectId,
      ref: "Product"
    },
    quantity: Number,
    giftWrappingRequired: Boolean,
    giftWrappingType: {
      type: mongoose.Types.ObjectId,
      ref: "GiftWrapType",
      default: null
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);
