const { GPU_TABLENAME } = require("../config/tablenames.json");

exports.up = function (knex) {
  return knex.schema.createTable(GPU_TABLENAME, (table) => {
    table.increments(`${GPU_TABLENAME}_id`).unsigned();
    table.string("gpu").unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(GPU_TABLENAME);
};
