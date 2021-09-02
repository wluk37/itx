const {
  PS_CHIPSET_TABLENAME,
  PRODUCT_SPECS_TABLENAME,
  CHIPSET_TABLENAME,
} = require("../config/tablenames.json");

exports.up = function (knex) {
  return knex.schema.createTable(PS_CHIPSET_TABLENAME, (table) => {
    table.increments(`${PS_CHIPSET_TABLENAME}_id`).unsigned();
    table
      .integer(`fk_${PRODUCT_SPECS_TABLENAME}_id`)
      .unsigned()
      .references(PRODUCT_SPECS_TABLENAME[`${PRODUCT_SPECS_TABLENAME}_id`]);
    table
      .integer(`fk_${CHIPSET_TABLENAME}_id`)
      .unsigned()
      .references(CHIPSET_TABLENAME[`${CHIPSET_TABLENAME}_id`]);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(PS_CHIPSET_TABLENAME);
};
