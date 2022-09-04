"use strict";

// Custom Modules
const Product = require("../../models/Product");

/**
 * Add new product
 *
 * @endpoint POST /products/
 *
 * @param {object} req
 * @param {object} res
 * @param {function} next
 */
async function addProduct(req, res, next) {
  const {
    name,
    image_url,
    product_type,
    is_min_order_qty_required,
    custom_quantity,
    show_product_customization_prompt,
    price,
    taxId,
    tax_percentage
  } = req.body;

  const product = new Product({
    name,
    imageUrl: image_url,
    productType: product_type,
    isMinOrderQuantityRequired: is_min_order_qty_required,
    customQuantity: custom_quantity,
    showProductCustomizationPrompt: show_product_customization_prompt,
    price,
    // taxId,
    taxPercentage: tax_percentage
  });
  const productDoc = await product.save();

  res.status(201).json({ message: "Product has been created successfully" });
}

module.exports = addProduct;
