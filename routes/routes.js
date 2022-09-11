"use strict";
const express = require("express");
const router = express.Router();

// Controllers
const listProductController = require("../controllers/products/list-products.controller");
const addProductController = require("../controllers/products/add-product.controller");
const getAllTaxController = require("../controllers/tax/get-tax.controller");
const getAllGiftWrapController = require("../controllers/gift-wrap/get-gift-wrap.controller");
const addToCartController = require("../controllers/carts/add-to-card.controller");
const cartSummaryController = require("../controllers/carts/cart.summary.controller");
const removeCartItemController = require("../controllers/carts/remove-cart-item.controller");

// Middlewares
const { addProductMiddleware } = require("../middlewares/products.middleware");
const { addToCartMiddlware } = require("../middlewares/add-to-card.middleware");

router.get("/api/cart", cartSummaryController);
router.post("/api/cart", [addToCartMiddlware], addToCartController);
router.delete("/api/cart/:id", removeCartItemController);
router.get("/api/tax", getAllTaxController);
router.get("/api/gift-wrap", getAllGiftWrapController);
router.get("/api/products", listProductController);
router.post("/api/products", [addProductMiddleware], addProductController);

module.exports = router;
