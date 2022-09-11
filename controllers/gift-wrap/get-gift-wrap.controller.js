"use strict";

// Custom Modules
const GiftWrap = require("../../models/GiftWrap");

/**
 * Get gift wrap information
 *
 * @endpoint GET /gift-wrap/
 *
 * @param {object} req
 * @param {object} res
 * @param {function} next
 */
async function getAllGiftWrap(req, res, next) {
  const giftWrapDoc = await GiftWrap.find({});
  res.status(200).json(giftWrapDoc);
}

module.exports = getAllGiftWrap;
