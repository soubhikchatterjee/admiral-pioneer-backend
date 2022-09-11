"use strict";

// Custom Modules
const Cart = require("../../models/Cart");

/**
 * Add/Edit new cart
 *
 * @endpoint POST /cart
 *
 * @param {object} req
 * @param {object} res
 * @param {function} next
 */
async function upsertCart(req, res, next) {
  const { product_id, quantity, gift_wrapping_required, gift_wrapping_id } =
    req.body;

  try {
    await Cart.updateOne(
      {
        product: product_id
      },
      {
        product: product_id,
        $inc: { quantity },
        giftWrappingRequired: gift_wrapping_required,
        giftWrappingType: gift_wrapping_id
      },
      { upsert: true }
    );

    res.status(201).json({ message: "Cart has been added successfully" });
  } catch (error) {
    console.error(error);
  }
}

module.exports = upsertCart;
