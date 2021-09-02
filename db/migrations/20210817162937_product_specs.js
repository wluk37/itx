const {
  FORM_FACTOR_TABLENAME,
  PRODUCT_SPECS_TABLENAME,
} = require("../config/tablenames.json");

exports.up = function (knex) {
  return knex.schema.createTable(PRODUCT_SPECS_TABLENAME, (table) => {
    table.increments(`${PRODUCT_SPECS_TABLENAME}_id`).unsigned();
    table
      .integer(`fk_${FORM_FACTOR_TABLENAME}_id`)
      .unsigned()
      .references(FORM_FACTOR_TABLENAME[`${FORM_FACTOR_TABLENAME}_id`]);
    table.string("power_supply");
    table.integer("temp_rating_c").unsigned();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(PRODUCT_SPECS_TABLENAME);
};
