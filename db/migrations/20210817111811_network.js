const { NETWORK_TABLENAME } = require("../config/tablenames.json");

exports.up = function (knex) {
  return knex.schema.createTable(NETWORK_TABLENAME, (table) => {
    table.increments(`${NETWORK_TABLENAME}_id`).unsigned();
    table.string("network_type");
    table.string("network_model").unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(NETWORK_TABLENAME);
};
