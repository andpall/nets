const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { StatusCodes } = require('http-status-codes')
const Users = require('../models/users.model')
const { AuthError } = require('../errors')

const AuthService = {
    async signUp(userData) {
        const {email, password} = userData
        if(!process.env.HASH_SALT) throw Error('No salt for bcrypt hash provided')
        const passwordHash = await bcrypt.hash(password, process.env.HASH_SALT)
        const {dataValues} = await Users.create({
            email,
            passwordHash,
        }).catch(err => {
            throw Error('Unable to create new user', err)
        })
        return {
            user: {
                id: dataValues.id,
                email: dataValues.email
            }
        }
    },
    async generateToken(data) {
        const signature = process.env.JWT_SECRET
        return jwt.sign({data}, signature)
    },
    async login(userData) {
        const {email, password} = userData
        const identifiedUser = await Users.findOne({where: {email}})
        if(!identifiedUser) throw new AuthError('No such user', StatusCodes.BAD_REQUEST)
        const result = await bcrypt.compare(password, identifiedUser.passwordHash)
        if(result) {
            return this.generateToken({
                id: identifiedUser.id,
                email: identifiedUser.email
            })
        } else {
            throw new Error('Wrong password')
        }
    },
}

module.exports = AuthService
