const { CPU_LOGO_TABLENAME } = require("../config/tablenames.json");

exports.up = function (knex) {
  return knex.schema.createTable(CPU_LOGO_TABLENAME, (table) => {
    table.increments(`${CPU_LOGO_TABLENAME}_id`).unsigned();
    table.string("cpu_logo_type").unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(CPU_LOGO_TABLENAME);
};
