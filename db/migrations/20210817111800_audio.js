const { AUDIO_TABLENAME } = require("../config/tablenames.json");

exports.up = function (knex) {
  return knex.schema.createTable(AUDIO_TABLENAME, (table) => {
    table.increments(`${AUDIO_TABLENAME}_id`).unsigned();
    table.string("audio_type").unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(AUDIO_TABLENAME);
};
