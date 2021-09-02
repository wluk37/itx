const {
  PLATFORM_TABLENAME,
  FAMILY_TABLENAME,
  SERIES_TABLENAME,
} = require("../config/tablenames.json");

exports.up = function (knex) {
  return knex.schema.createTable(SERIES_TABLENAME, (table) => {
    table.increments(`${SERIES_TABLENAME}_id`).unsigned();
    table.string("series").unique();
    table
      .integer(`fk_${PLATFORM_TABLENAME}_id`)
      .unsigned()
      .references(`${PLATFORM_TABLENAME}.${PLATFORM_TABLENAME}_id`);
    table
      .integer(`fk_${FAMILY_TABLENAME}_id`)
      .unsigned()
      .references(`${FAMILY_TABLENAME}.${FAMILY_TABLENAME}_id`);
    table.integer("generation");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(SERIES_TABLENAME);
};
