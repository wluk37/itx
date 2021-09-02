const { RAM_TABLENAME } = require("../config/tablenames.json");

exports.up = function (knex) {
  return knex.schema.createTable(RAM_TABLENAME, (table) => {
    table.increments(`${RAM_TABLENAME}_id`).unsigned();
    table.string("ram_type").unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(RAM_TABLENAME);
};
