const { EXPANSION_TABLENAME } = require("../config/tablenames.json");

exports.up = function (knex) {
  return knex.schema.createTable(EXPANSION_TABLENAME, (table) => {
    table.increments(`${EXPANSION_TABLENAME}_id`).unsigned();
    table.string("expansion_type").unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(EXPANSION_TABLENAME);
};
