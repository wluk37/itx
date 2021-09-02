const { PERIPHERAL_TABLENAME } = require("../config/tablenames.json");

exports.up = function (knex) {
  return knex.schema.createTable(PERIPHERAL_TABLENAME, (table) => {
    table.increments(`${PERIPHERAL_TABLENAME}_id`).unsigned();
    table.string("peripheral_type").unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(PERIPHERAL_TABLENAME);
};
