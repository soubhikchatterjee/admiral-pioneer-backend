"use strict";
const Joi = require("joi");

const PRODUCT_TYPES = {
  PHYSICAL: "physical",
  VIRTUAL: "virtual"
};

async function addProduction(req, res, next) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    image_url: Joi.string().required(),
    product_type: Joi.string()
      .valid(PRODUCT_TYPES.PHYSICAL, PRODUCT_TYPES.VIRTUAL)
      .required(),
    is_min_order_qty_required: Joi.boolean(),
    show_product_customization_prompt: Joi.boolean(),
    custom_quantity: Joi.number().integer().min(0).max(100),
    price: Joi.number().required(),
    taxId: Joi.string(),
    tax_percentage: Joi.number()
  });

  try {
    await schema.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: err });
  }
}

module.exports = {
  addProduction
};
