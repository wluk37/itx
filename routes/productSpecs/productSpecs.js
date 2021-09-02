const express = require("express");
const router = express.Router();
const db = require("../../db/db");
module.exports = router;

// get all rows of a category
router.get("/:productID/category/:category", async (req, res, next) => {
  try {
    const tableName = req.params.category;
    let data = await db(tableName).select("*");
    res.send(data);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/:productID/");

// create a new product
router.post("/:productID/create", (req, res, next) => {});
