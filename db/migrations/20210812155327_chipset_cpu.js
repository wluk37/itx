const {
  CPU_TABLENAME,
  CHIPSET_TABLENAME,
  CHIPSET_CPU_TABLENAME,
} = require("../config/tablenames.json");

exports.up = function (knex) {
  return knex.schema.createTable(CHIPSET_CPU_TABLENAME, (table) => {
    table.increments(`${CHIPSET_CPU_TABLENAME}_id`).unsigned();
    table
      .integer(`fk_${CPU_TABLENAME}_id`)
      .unsigned()
      .references(`${CPU_TABLENAME}.${CPU_TABLENAME}_id`);
    table
      .integer(`fk_${CHIPSET_TABLENAME}_id`)
      .unsigned()
      .references(`${CHIPSET_TABLENAME}.${CHIPSET_TABLENAME}_id`);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(CHIPSET_CPU_TABLENAME);
};
