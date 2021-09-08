const { seedCreater } = require("../config/seedCreater");
const {
  PLATFORM_TABLENAME,
  FAMILY_TABLENAME,
  SERIES_TABLENAME,
} = require("../config/tablenames.json");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex(SERIES_TABLENAME)
    .del()
    .then(async function () {
      // Inserts seed entries
      let fakeData = await seedCreater(
        ["str", { min: 1, max: 7 }, { min: 1, max: 30 }, "int"],
        [
          "series",
          `fk_${PLATFORM_TABLENAME}_id`,
          `fk_${FAMILY_TABLENAME}_id`,
          "generation",
        ],
        30,
        50,
        SERIES_TABLENAME
      );
      return knex(SERIES_TABLENAME)
        .insert(fakeData)
        .onConflict("series")
        .ignore();
    });
};
