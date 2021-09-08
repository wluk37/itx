const { seedCreater } = require("../config/seedCreater");
const { RAM_TABLENAME } = require("../config/tablenames.json");
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  return await knex(RAM_TABLENAME)
    .del()
    .then(async function () {
      // Inserts seed entries
      let fakeData = await seedCreater(["str"], ["ram_type"], 7, 10);
      return await knex(RAM_TABLENAME)
        .insert(fakeData)
        .onConflict("ram_type")
        .ignore();
    });
};
