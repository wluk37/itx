const {
  PS_AUDIO_TABLENAME,
  PRODUCT_SPECS_TABLENAME,
  AUDIO_TABLENAME,
} = require("../config/tablenames.json");

exports.up = function (knex) {
  return knex.schema.createTable(PS_AUDIO_TABLENAME, (table) => {
    table.increments(`${PS_AUDIO_TABLENAME}_id`).unsigned();
    table
      .integer(`fk_${PRODUCT_SPECS_TABLENAME}_id`)
      .unsigned()
      .references(PRODUCT_SPECS_TABLENAME[`${PRODUCT_SPECS_TABLENAME}_id`]);
    table
      .integer(`fk_${AUDIO_TABLENAME}_id`)
      .unsigned()
      .references(AUDIO_TABLENAME[`${AUDIO_TABLENAME}_id`]);
    table.string("spdif_location");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(PS_AUDIO_TABLENAME);
};
