const { seedCreater } = require("../config/seedCreater");
const { SOCKET_TABLENAME } = require("../config/tablenames.json");
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  return await knex(SOCKET_TABLENAME)
    .del()
    .then(async function () {
      // Inserts seed entries
      let fakeData = await seedCreater(["str"], ["socket"], 7, 10);
      return await knex(SOCKET_TABLENAME)
        .insert(fakeData)
        .onConflict("socket")
        .ignore();
    });
};
