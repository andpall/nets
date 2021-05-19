const Sequelize = require('sequelize')
const DB = require('../db')

const Cathedras = DB.define('cathedras', {
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
    faculty_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'faculties',
            key: 'id',
        }
    }
})

module.exports = Cathedras
