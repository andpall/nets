const AuthService = require('../services/auth.service')

const AuthController = {
    async signUp(req, res) {
        const {email, password} = req.body
        try {
            const user = await AuthService.signUp({email, password})
            res.send(user)
        } catch (err) {
            res.statusCode = 500
            console.log(err)
            res.send({error: err.message})
            res.end()
        }
    },

    async login(req, res) {
        const {email, password} = req.body
        try {
            const token = await AuthService.login({email, password})
            res.send({token})
        } catch (err) {
            res.statusCode = 401
            console.log(err)
            res.send({error: err.message})
            res.end()
        }
    },
}

module.exports = AuthController
