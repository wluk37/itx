const { seedCreater } = require("../config/seedCreater");
const {
  SERIES_TABLENAME,
  SOCKET_TABLENAME,
  CPU_TABLENAME,
} = require("../config/tablenames.json");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex(CPU_TABLENAME)
    .del()
    .then(async function () {
      // Inserts seed entries
      let fakeData = await seedCreater(
        [
          { min: 1, max: 50 },
          { min: 1, max: 10 },
          "str",
          "int",
          "int",
          "int",
          "int",
          "int",
          "int",
          "int",
          "int",
          "int",
          "int",
          "str",
          "str",
          "str",
          "bool",
        ],
        [
          `fk_${SERIES_TABLENAME}_id`,
          `fk_${SOCKET_TABLENAME}_id`,
          "cpu_model",
          "min_speed_ghz",
          "max_speed_ghz",
          "min_cores",
          "max_cores",
          "process_nm",
          "l3_cache_mb",
          "tdp_w",
          "max_gb",
          "num_channels",
          "num_displays",
          "4k_res",
          "hdmi_res",
          "dp_res",
          "ecc",
        ],
        30,
        50,
        CPU_TABLENAME
      );
      return knex(CPU_TABLENAME)
        .insert(fakeData)
        .onConflict("cpu_model")
        .ignore();
    });
};
