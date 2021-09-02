const {
  PS_OS_TABLENAME,
  PRODUCT_SPECS_TABLENAME,
  OS_TABLENAME,
} = require("../config/tablenames.json");

exports.up = function (knex) {
  return knex.schema.createTable(PS_OS_TABLENAME, (table) => {
    table.increments(`${PS_OS_TABLENAME}_id`).unsigned();
    table
      .integer(`fk_${PRODUCT_SPECS_TABLENAME}_id`)
      .unsigned()
      .references(PRODUCT_SPECS_TABLENAME[`${PRODUCT_SPECS_TABLENAME}_id`]);
    table
      .integer(`fk_${OS_TABLENAME}_id`)
      .unsigned()
      .references(OS_TABLENAME[`${OS_TABLENAME}_id`]);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(PS_OS_TABLENAME);
};
