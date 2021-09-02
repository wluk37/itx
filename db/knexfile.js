// Update with your config settings.

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      port: 5432,
      host: process.env.DB_HOST || "postgres",
      database: "itx_db",
      user: "polywell",
      password: "polywell",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },
};
