const { seedCreater } = require("../config/seedCreater");
const { GPU_TABLENAME } = require("../config/tablenames.json");
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  return await knex(GPU_TABLENAME)
    .del()
    .then(async function () {
      // Inserts seed entries
      let fakeData = await seedCreater(["str"], ["gpu"], 7, 10);
      return await knex(GPU_TABLENAME)
        .insert(fakeData)
        .onConflict("gpu")
        .ignore();
    });
};
