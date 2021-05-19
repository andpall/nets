const Sequelize = require('sequelize')
const DB = require('../db')

const Students = DB.define('students', {
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
    age: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    sex: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    group_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'groups',
            key: 'id',
        }
    }
})

module.exports = Students
