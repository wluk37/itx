const knex = require("knex");
const knexfile = require("./knexfile");

// TODO don't access knexfile.development directly
// decide with env vars which config to use
const db = knex(knexfile.development);

module.exports = db;
