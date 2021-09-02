const { CHIPSET_TABLENAME } = require("../config/tablenames.json");

exports.up = function (knex) {
  return knex.schema.createTable(CHIPSET_TABLENAME, (table) => {
    table.increments(`${CHIPSET_TABLENAME}_id`).unsigned();
    table.string("chipset_model").unique();
    table.boolean("soc");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(CHIPSET_TABLENAME);
};
