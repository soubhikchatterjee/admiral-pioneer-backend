"use strict";

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: String,
    imageUrl: String,
    productType: String,
    isMinOrderQuantityRequired: Boolean,
    price: Number,
    customQuantity: Number,
    showProductCustomizationPrompt: Boolean,
    taxId: {
      type: mongoose.Types.ObjectId,
      ref: "Tax"
    },
    taxAmount: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
