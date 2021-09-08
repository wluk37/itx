const { seedCreater } = require("../config/seedCreater");
const { FAMILY_TABLENAME } = require("../config/tablenames.json");
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex(FAMILY_TABLENAME)
    .del()
    .then(async function () {
      // Inserts seed entries
      let fakeData = await seedCreater(["str"], ["family"], 30, 50);
      return await knex(FAMILY_TABLENAME)
        .insert(fakeData)
        .onConflict("family")
        .ignore();
    });
};
