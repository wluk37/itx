const { MARKETING_LOGO_TABLENAME } = require("../config/tablenames.json");

exports.up = function (knex) {
  return knex.schema.createTable(MARKETING_LOGO_TABLENAME, (table) => {
    table.increments(`${MARKETING_LOGO_TABLENAME}_id`).unsigned();
    table.string("marketing_logo_type").unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(MARKETING_LOGO_TABLENAME);
};
