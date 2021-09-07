const express = require("express");
const router = express.Router();
const db = require("../../db/db");
const tableNames = require("../../db/config");

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

router.get("/:productID/", async (req, res, next) => {
  try {
    const { PRODUCT_SPECS_TABLENAME, FORM_FACTOR_TABLENAME } = tableNames;
    let data = await db(PRODUCT_SPECS_TABLENAME).select("*").join(FORM_FACTOR_TABLENAME, function() {
      this.on()
    })
  } catch (error) {
    
  }
});

// create a new product
router.post("/:productID/create", (req, res, next) => {});
