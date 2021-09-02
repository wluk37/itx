const {
  FORM_FACTOR_TABLENAME,
  CHASSIS_TABLENAME,
  FF_CHASSIS_TABLENAME,
} = require("../config/tablenames.json");

exports.up = function (knex) {
  return knex.schema.createTable(FF_CHASSIS_TABLENAME, (table) => {
    table.increments(`${FF_CHASSIS_TABLENAME}_id`).unsigned();
    table
      .integer(`fk_${FORM_FACTOR_TABLENAME}_id`)
      .unsigned()
      .references(FORM_FACTOR_TABLENAME[`${FORM_FACTOR_TABLENAME}_id`]);
    table
      .integer(`fk_${CHASSIS_TABLENAME}_id`)
      .unsigned()
      .references(CHASSIS_TABLENAME[`${CHASSIS_TABLENAME}_id`]);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(FF_CHASSIS_TABLENAME);
};
