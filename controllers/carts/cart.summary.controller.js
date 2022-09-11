"use strict";

// Custom Modules
const Product = require("../../models/Product");
const Cart = require("../../models/Cart");
const { getLimit, getSkip } = require("../../lib/response");

/**
 * List all cart items
 *
 * @endpoint GET /carts
 *
 * @param {object} req
 * @param {object} res
 * @param {function} next
 */
async function listCart(req, res, next) {
  const cartDocs = await Cart.find()
    .populate("product")
    .populate({
      path: "product",
      populate: {
        path: "tax"
      }
    })
    .populate("giftWrappingType")
    .sort({ _id: -1 })
    .skip(getSkip(req.query.page, req.query.limit))
    .limit(getLimit(req.query.limit));
  res.json(cartDocs);
}

module.exports = listCart;
