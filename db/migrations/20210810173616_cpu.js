const {
  SERIES_TABLENAME,
  SOCKET_TABLENAME,
  CPU_TABLENAME,
} = require("../config/tablenames.json");

exports.up = function (knex) {
  return knex.schema.createTable(CPU_TABLENAME, (table) => {
    table.increments(`${CPU_TABLENAME}_id`).unsigned();
    table
      .integer(`fk_${SERIES_TABLENAME}_id`)
      .unsigned()
      .references(`${SERIES_TABLENAME}.${SERIES_TABLENAME}_id`);
    table
      .integer(`fk_${SOCKET_TABLENAME}_id`)
      .unsigned()
      .references(`${SOCKET_TABLENAME}.${SOCKET_TABLENAME}_id`);
    table.string("cpu_model").unique();
    table.integer("min_speed_ghz").unsigned();
    table.integer("max_speed_ghz").unsigned();
    table.integer("min_cores").unsigned();
    table.integer("max_cores").unsigned();
    table.integer("process_nm").unsigned();
    table.integer("l3_cache_mb").unsigned();
    table.integer("tdp_w").unsigned();
    table.integer("max_gb").unsigned();
    table.integer("num_channels").unsigned();
    table.integer("num_displays").unsigned();
    table.string("4k_res");
    table.string("hdmi_res");
    table.string("dp_res");
    table.bool("ecc");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(CPU_TABLENAME);
};
