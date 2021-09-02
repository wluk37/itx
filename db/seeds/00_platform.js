const { seedCreater } = require("../config/seedCreater");
const { PLATFORM_TABLENAME } = require("../config/tablenames.json");
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  return await knex(PLATFORM_TABLENAME)
    .del()
    .then(async function () {
      // Inserts seed entries
      let fakeData = await seedCreater(["str"], ["platform"], 7, 10);
      console.log(fakeData);
      return await knex(PLATFORM_TABLENAME)
        .insert(fakeData)
        .onConflict("platform")
        .ignore();
    });
};
