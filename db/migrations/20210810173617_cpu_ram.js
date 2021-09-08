const {
  CPU_RAM_TABLENAME,
  RAM_TABLENAME,
  CPU_TABLENAME,
} = require("../config/tablenames.json");

exports.up = function (knex) {
  return knex.schema.createTable(CPU_RAM_TABLENAME, (table) => {
    table.increments(`${CPU_RAM_TABLENAME}_id`).unsigned();
    table
      .integer(`fk_${RAM_TABLENAME}_id`)
      .unsigned()
      .references(`${RAM_TABLENAME}.${RAM_TABLENAME}_id`);
    table
      .integer(`fk_${CPU_TABLENAME}_id`)
      .unsigned()
      .references(`${CPU_TABLENAME}.${CPU_TABLENAME}_id`);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(CPU_RAM_TABLENAME);
};
