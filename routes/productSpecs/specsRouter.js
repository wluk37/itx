const express = require("express");
const router = express.Router();
const db = require("../../db/db");
const tableNames = require("../../db/config/tablenames.json");

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

router.get("/", async (req, res, next) => {
  try {
    const { PLATFORM_TABLENAME, SERIES_TABLENAME, FAMILY_TABLENAME } =
      tableNames;
    let data = await db(SERIES_TABLENAME)
      .select(
        `${SERIES_TABLENAME}.${SERIES_TABLENAME}_id`,
        `${SERIES_TABLENAME}.series`,
        `${PLATFORM_TABLENAME}.platform`,
        `${FAMILY_TABLENAME}.family`,
        `generation`
      )
      .join(
        PLATFORM_TABLENAME,
        `${SERIES_TABLENAME}.fk_${PLATFORM_TABLENAME}_id`,
        `=`,
        `${PLATFORM_TABLENAME}.${PLATFORM_TABLENAME}_id`
      )
      .join(
        FAMILY_TABLENAME,
        `${SERIES_TABLENAME}.fk_${FAMILY_TABLENAME}_id`,
        `=`,
        `${FAMILY_TABLENAME}.${FAMILY_TABLENAME}_id`
      );

    res.send(data);
  } catch (error) {
    console.error("error:", error);
    next(error);
  }
});

router.get("/:productID/", async (req, res, next) => {
  try {
    const productID = req.params.productID;
    const { PLATFORM_TABLENAME, SERIES_TABLENAME, FAMILY_TABLENAME } =
      tableNames;
    let data = await db(SERIES_TABLENAME)
      .select(
        `${SERIES_TABLENAME}.${SERIES_TABLENAME}_id`,
        `${SERIES_TABLENAME}.series`,
        `${PLATFORM_TABLENAME}.platform`,
        `${FAMILY_TABLENAME}.family`,
        `generation`
      )
      .join(
        PLATFORM_TABLENAME,
        `${SERIES_TABLENAME}.fk_${PLATFORM_TABLENAME}_id`,
        `=`,
        `${PLATFORM_TABLENAME}.${PLATFORM_TABLENAME}_id`
      )
      .join(
        FAMILY_TABLENAME,
        `${SERIES_TABLENAME}.fk_${FAMILY_TABLENAME}_id`,
        `=`,
        `${FAMILY_TABLENAME}.${FAMILY_TABLENAME}_id`
      )
      .where(`${SERIES_TABLENAME}.${SERIES_TABLENAME}_id`, `=`, `${productID}`);

    res.send(data);
  } catch (error) {
    console.error("error:", error);
    next(error);
  }
});

// create a new product
router.post("/:productID/create", (req, res, next) => {});
