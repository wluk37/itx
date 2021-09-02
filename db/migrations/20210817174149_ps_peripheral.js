const {
  PS_PERIPHERAL_TABLENAME,
  PRODUCT_SPECS_TABLENAME,
  PERIPHERAL_TABLENAME,
} = require("../config/tablenames.json");

exports.up = function (knex) {
  return knex.schema.createTable(PS_PERIPHERAL_TABLENAME, (table) => {
    table.increments(`${PS_PERIPHERAL_TABLENAME}_id`).unsigned();
    table
      .integer(`fk_${PRODUCT_SPECS_TABLENAME}_id`)
      .unsigned()
      .references(PRODUCT_SPECS_TABLENAME[`${PRODUCT_SPECS_TABLENAME}_id`]);
    table
      .integer(`fk_${PERIPHERAL_TABLENAME}_id`)
      .unsigned()
      .references(PERIPHERAL_TABLENAME[`${PERIPHERAL_TABLENAME}_id`]);
    table.integer("quantity").unsigned();
    table.string("location");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(PS_PERIPHERAL_TABLENAME);
};
