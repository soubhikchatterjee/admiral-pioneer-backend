"use strict";
const Joi = require("joi");

// Custom Modules
const Product = require("../models/Product");
const Tax = require("../models/Tax");
const GiftWrap = require("../models/GiftWrap");

async function addToCartMiddlware(req, res, next) {
  try {
    const schema = Joi.object({
      product_id: Joi.string()
        .external(() => {
          validateProduct(req.body);
        })
        .required(),
      quantity: Joi.number()
        .external(() => {
          validateProduct(req.body);
        })
        .required(),
      gift_wrapping_required: Joi.boolean(),
      gift_wrapping_id: Joi.any().external(() => {
        validateGiftWrappingType(req.body);
      })
    });
    await schema.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (error) {
    return res.status(400).json({ message: error });
  }
}

const validateProduct = async body => {
  const productDoc = await Product.findOne({ _id: body.product_id });
  if (!productDoc) {
    throw new Error("Invalid product Id");
  }

  if (
    productDoc.isMinOrderQuantityRequired &&
    body?.quantity < productDoc.customQuantity
  ) {
    throw new Error(
      `Quantity of the product should not be less than ${productDoc.customQuantity}`
    );
  }
};

const validateGiftWrappingType = async body => {
  if (!body?.gift_wrapping_id && body?.gift_wrapping_required) {
    throw new Error("Please choose a gift wrapping plan.");
  }

  if (body?.gift_wrapping_id) {
    const giftWrapTypeExist = await GiftWrap.exists({
      _id: body.gift_wrapping_id
    });
    if (!giftWrapTypeExist) {
      throw new Error("Invalid gift wrap type");
    }
  }
};

module.exports = {
  addToCartMiddlware
};
