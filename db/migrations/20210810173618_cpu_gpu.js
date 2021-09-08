const {
  GPU_TABLENAME,
  CPU_GPU_TABLENAME,
  CPU_TABLENAME,
} = require("../config/tablenames.json");

exports.up = function (knex) {
  return knex.schema.createTable(CPU_GPU_TABLENAME, (table) => {
    table.increments(`${CPU_GPU_TABLENAME}_id`).unsigned();
    table
      .integer(`fk_${GPU_TABLENAME}_id`)
      .unsigned()
      .references(`${GPU_TABLENAME}.${GPU_TABLENAME}_id`);
    table
      .integer(`fk_${CPU_TABLENAME}_id`)
      .unsigned()
      .references(`${CPU_TABLENAME}.${CPU_TABLENAME}_id`);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(CPU_GPU_TABLENAME);
};
