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
    showProductCustomizationPrompt: Boolean, // used to prompt a user if they want to gift wrap the item
    tax: {
      type: mongoose.Types.ObjectId,
      ref: "Tax"
    },
    taxPercentage: Number
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
