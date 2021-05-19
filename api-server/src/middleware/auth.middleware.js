const jwt = require('jsonwebtoken')
const passport = require('passport')
const superagent = require('superagent')
const { StatusCodes } = require('http-status-codes')
const { TokenError } = require('../errors')

const getTokenFromHeader = (req) => {
    if (req.headers.authorization) {
        return req.headers.authorization
    } else {
        throw new TokenError('No token presented')
    }
}

const verifyFacebookToken = async (token) => {
    return await superagent
        .get('https://graph.facebook.com/me')
        .query({access_token: token})
}

const auth = async (req, res, next) => {
    console.log(req.headers)
    if(req.headers.authtype === 'jwt') {
        try {
            const token = getTokenFromHeader(req)
            const decoded = await jwt.verify(token, process.env.JWT_SECRET)
            req.id = decoded.data.id
            next()
        } catch (err) {
            res.statusCode = StatusCodes.UNAUTHORIZED
            res.send({TokenError: 'Bad token'})
        }
    } else if(req.headers.authtype === 'facebook') {
        // console.log(1111)
        try {
            const token = getTokenFromHeader(req)
            const response = await verifyFacebookToken(token)
            // console.log(response)
            req.id = res.user_id
            next()
        } catch (err) {
            res.statusCode = StatusCodes.UNAUTHORIZED
            res.send({TokenError: 'Bad token'})
        }
    }
}

module.exports = auth
