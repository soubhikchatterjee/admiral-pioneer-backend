"use strict";

// Custom Modules
const Tax = require("../../models/Tax");

/**
 * Get Tax information
 *
 * @endpoint GET /tax/
 *
 * @param {object} req
 * @param {object} res
 * @param {function} next
 */
async function getAllTax(req, res, next) {
  const taxDoc = await Tax.find({});
  res.status(200).json(taxDoc);
}

module.exports = getAllTax;
