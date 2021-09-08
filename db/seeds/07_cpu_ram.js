const { seedCreater } = require("../config/seedCreater");
const {
  CPU_RAM_TABLENAME,
  RAM_TABLENAME,
  CPU_TABLENAME,
} = require("../config/tablenames.json");
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  return await knex(CPU_RAM_TABLENAME)
    .del()
    .then(async function () {
      // Inserts seed entries
      let fakeData = await seedCreater(
        [
          { min: 1, max: 10 },
          { min: 1, max: 10 },
        ],
        [`fk_${RAM_TABLENAME}_id`, `fk_${CPU_TABLENAME}`],
        25,
        30
      );
      return await knex(CPU_RAM_TABLENAME).insert(fakeData).ignore();
    });
};
