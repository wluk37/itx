const express = require("express");
const router = express.Router();
const db = require("../db/db");
module.exports = router;

// get a product by ID
router.get("/:productID", (req, res, next) => {});

// create a new product
router.post("/:productID/create", (req, res, next) => {});
