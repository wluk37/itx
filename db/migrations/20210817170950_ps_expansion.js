const {
  PS_EXPANSION_TABLENAME,
  PRODUCT_SPECS_TABLENAME,
  EXPANSION_TABLENAME,
} = require("../config/tablenames.json");

exports.up = function (knex) {
  return knex.schema.createTable(PS_EXPANSION_TABLENAME, (table) => {
    table.increments(`${PS_EXPANSION_TABLENAME}_id`).unsigned();
    table
      .integer(`fk_${PRODUCT_SPECS_TABLENAME}_id`)
      .unsigned()
      .references(PRODUCT_SPECS_TABLENAME[`${PRODUCT_SPECS_TABLENAME}_id`]);
    table
      .integer(`fk_${EXPANSION_TABLENAME}_id`)
      .unsigned()
      .references(EXPANSION_TABLENAME[`${EXPANSION_TABLENAME}_id`]);
    table.integer("quantity").unsigned();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(PS_EXPANSION_TABLENAME);
};
