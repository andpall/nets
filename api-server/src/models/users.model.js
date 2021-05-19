const Sequelize = require('sequelize')
const DB = require('../db')

const Users = DB.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
    },
    passwordHash: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

module.exports = Users
