"use strict";
const express = require("express");
const router = express.Router();

// Controllers
const listProductController = require("../controllers/products/list-products.controller");
const addProductController = require("../controllers/products/add-product.controller");

// Middlewares
const { addProduction } = require("../middlewares/products.middleware");

router.get("/api/products", listProductController);
router.post("/api/products", [addProduction], addProductController);

module.exports = router;
