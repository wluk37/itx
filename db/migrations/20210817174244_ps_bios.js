const {
  PS_BIOS_TABLENAME,
  PRODUCT_SPECS_TABLENAME,
  BIOS_TABLENAME,
} = require("../config/tablenames.json");

exports.up = function (knex) {
  return knex.schema.createTable(PS_BIOS_TABLENAME, (table) => {
    table.increments(`${PS_BIOS_TABLENAME}_id`).unsigned();
    table
      .integer(`fk_${PRODUCT_SPECS_TABLENAME}_id`)
      .unsigned()
      .references(PRODUCT_SPECS_TABLENAME[`${PRODUCT_SPECS_TABLENAME}_id`]);
    table
      .integer(`fk_${BIOS_TABLENAME}_id`)
      .unsigned()
      .references(BIOS_TABLENAME[`${BIOS_TABLENAME}_id`]);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(PS_BIOS_TABLENAME);
};
