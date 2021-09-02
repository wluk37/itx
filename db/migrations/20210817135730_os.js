const { OS_TABLENAME } = require("../config/tablenames.json");

exports.up = function (knex) {
  return knex.schema.createTable(OS_TABLENAME, (table) => {
    table.increments(`${OS_TABLENAME}_id`).unsigned();
    table.string("os_type").unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(OS_TABLENAME);
};
