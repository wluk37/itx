const { LOGO_PLACEMENT_TABLENAME } = require("../config/tablenames.json");

exports.up = function (knex) {
  return knex.schema.createTable(LOGO_PLACEMENT_TABLENAME, (table) => {
    table.increments(`${LOGO_PLACEMENT_TABLENAME}_id`).unsigned();
    table.string("logo_top");
    table.string("logo_left");
    table.string("logo_right");
    table.string("logo_voltage");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(LOGO_PLACEMENT_TABLENAME);
};
