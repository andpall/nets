const Sequelize = require('sequelize')
const DB = require('../db')

const Faculties = DB.define('faculties', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

module.exports = Faculties
