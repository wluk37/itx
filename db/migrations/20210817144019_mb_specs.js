const { MB_SPECS_TABLENAME } = require("../config/tablenames.json");

exports.up = function (knex) {
  return knex.schema.createTable(MB_SPECS_TABLENAME, (table) => {
    table.increments(`${MB_SPECS_TABLENAME}_id`).unsigned();
    table.string("mb_specs_type").unique();
    table.integer("width_in").unsigned();
    table.integer("depth_in").unsigned();
    table.integer("ram_slots").unsigned();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(MB_SPECS_TABLENAME);
};
