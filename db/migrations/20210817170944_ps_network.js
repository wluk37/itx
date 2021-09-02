const {
  PS_NETWORK_TABLENAME,
  PRODUCT_SPECS_TABLENAME,
  NETWORK_TABLENAME,
} = require("../config/tablenames.json");

exports.up = function (knex) {
  return knex.schema.createTable(PS_NETWORK_TABLENAME, (table) => {
    table.increments(`${PS_NETWORK_TABLENAME}_id`).unsigned();
    table
      .integer(`fk_${PRODUCT_SPECS_TABLENAME}_id`)
      .unsigned()
      .references(PRODUCT_SPECS_TABLENAME[`${PRODUCT_SPECS_TABLENAME}_id`]);
    table
      .integer(`fk_${NETWORK_TABLENAME}_id`)
      .unsigned()
      .references(NETWORK_TABLENAME[`${NETWORK_TABLENAME}_id`]);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(PS_NETWORK_TABLENAME);
};
