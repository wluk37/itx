const {
  GPU_TABLENAME,
  CPU_GPU_TABLENAME,
} = require("../config/tablenames.json");

exports.up = function (knex) {
  return knex.schema.createTable(CPU_GPU_TABLENAME, (table) => {
    table.increments(`${CPU_GPU_TABLENAME}_id`).unsigned();
    table
      .integer(`fk_${GPU_TABLENAME}_id`)
      .unsigned()
      .references(`${GPU_TABLENAME}.${GPU_TABLENAME}_id`);
    table.integer("num_displays").unsigned();
    table.string("4k_res");
    table.string("hdmi_res");
    table.string("dp_res");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(CPU_GPU_TABLENAME);
};
