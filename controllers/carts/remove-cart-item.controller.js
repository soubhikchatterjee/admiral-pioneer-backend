"use strict";

// Custom Modules
const Cart = require("../../models/Cart");

/**
 * Remove cart item
 *
 * @endpoint DELETE /cart/:id
 *
 * @param {object} req
 * @param {object} res
 * @param {function} next
 */
async function removeCartItem(req, res, next) {
  try {
    await Cart.deleteOne({ _id: req.params.id });
    res
      .status(200)
      .json({ message: "Cart item has been removed successfully" });
  } catch (error) {
    console.error(error);
  }
}

module.exports = removeCartItem;
