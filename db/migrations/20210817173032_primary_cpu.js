const {
  PRIMARY_CPU_TABLENAME,
  PRODUCT_SPECS_TABLENAME,
  CPU_TABLENAME,
} = require("../config/tablenames.json");

exports.up = function (knex) {
  return knex.schema.createTable(PRIMARY_CPU_TABLENAME, (table) => {
    table.increments(`${PRIMARY_CPU_TABLENAME}_id`).unsigned();
    table
      .integer(`fk_${PRODUCT_SPECS_TABLENAME}_id`)
      .unsigned()
      .references(PRODUCT_SPECS_TABLENAME[`${PRODUCT_SPECS_TABLENAME}_id`]);
    table
      .integer(`fk_${CPU_TABLENAME}_id`)
      .unsigned()
      .references(CPU_TABLENAME[`${CPU_TABLENAME}_id`]);
    table.integer("quantity").unsigned();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(PRIMARY_CPU_TABLENAME);
};
