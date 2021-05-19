const Sequelize = require('sequelize')
const DB = require('../db')

const Groups = DB.define('groups', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    number: {
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

module.exports = Groups
