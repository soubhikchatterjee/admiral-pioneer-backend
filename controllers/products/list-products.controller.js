"use strict";

// Custom Modules
const Product = require("../../models/Product");
const { getLimit, getSkip } = require("../../lib/response");

/**
 * List all products
 *
 * @endpoint GET /products/
 *
 * @param {object} req
 * @param {object} res
 * @param {function} next
 */
async function listProducts(req, res, next) {
  const productDocs = await Product.find()
    .populate("tax")
    .sort({ _id: -1 })
    .skip(getSkip(req.query.page, req.query.limit))
    .limit(getLimit(req.query.limit));
  res.json(productDocs);
}

module.exports = listProducts;
