"use strict";

const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
    },
    quantity: Number,
    giftWrappingRequired: Boolean,
    giftWrappingType: {
      type: mongoose.Types.ObjectId,
      ref: "GiftWrapType",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", orderSchema);
