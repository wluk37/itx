const { CHASSIS_TABLENAME } = require("../config/tablenames.json");

exports.up = function (knex) {
  return knex.schema.createTable(CHASSIS_TABLENAME, (table) => {
    table.increments(`${CHASSIS_TABLENAME}_id`).unsigned();
    table.string("chassis_type").unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(CHASSIS_TABLENAME);
};
