const { SOCKET_TABLENAME } = require("../config/tablenames.json");

exports.up = function (knex) {
  return knex.schema.createTable(SOCKET_TABLENAME, (table) => {
    table.increments(`${SOCKET_TABLENAME}_id`).unsigned();
    table.string("socket").unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(SOCKET_TABLENAME);
};
