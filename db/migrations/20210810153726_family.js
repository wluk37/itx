const { FAMILY_TABLENAME } = require("../config/tablenames.json");

exports.up = function (knex) {
  return knex.schema.createTable(FAMILY_TABLENAME, (table) => {
    table.increments(`${FAMILY_TABLENAME}_id`).unsigned();
    table.string("family").unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(FAMILY_TABLENAME);
};
