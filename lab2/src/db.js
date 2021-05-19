const Sequelize = require("sequelize")

const { PGUSER,
    PGHOST,
    PGPASSWORD,
    PGDATABASE,
    PGPORT } = process.env

const DB = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
    dialect: "postgres",
    host: PGHOST,
    port: PGPORT,
    logging: false,
    define: {
        timestamps: false,
    }
})

module.exports = DB