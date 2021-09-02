const { PLATFORM_TABLENAME } = require("../config/tablenames.json");

exports.up = function (knex) {
  return knex.schema.createTable(PLATFORM_TABLENAME, (table) => {
    table.increments(`${PLATFORM_TABLENAME}_id`).unsigned();
    table.string("platform").unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(PLATFORM_TABLENAME);
};
