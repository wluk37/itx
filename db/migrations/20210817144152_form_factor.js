const {
  FORM_FACTOR_TABLENAME,
  MB_SPECS_TABLENAME,
} = require("../config/tablenames.json");

exports.up = function (knex) {
  return knex.schema.createTable(FORM_FACTOR_TABLENAME, (table) => {
    table.increments(`${FORM_FACTOR_TABLENAME}_id`).unsigned();
    table
      .integer(`fk_${MB_SPECS_TABLENAME}_id`)
      .unsigned()
      .references(MB_SPECS_TABLENAME[`${MB_SPECS_TABLENAME}_id`]);
    table.integer("heigth_in").unsigned();
    table.integer("depth_in").unsigned();
    table.integer("width_in").unsigned();
    table.integer("weight_lbs").unsigned();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(FORM_FACTOR_TABLENAME);
};
