const { BIOS_TABLENAME } = require("../config/tablenames.json");

exports.up = function (knex) {
  return knex.schema.createTable(BIOS_TABLENAME, (table) => {
    table.increments(`${BIOS_TABLENAME}_id`).unsigned();
    table.string("bios_type").unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(BIOS_TABLENAME);
};
