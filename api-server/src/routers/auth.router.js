const router = require('express').Router()
const AuthController = require('../controllers/auth.controller')
const passport = require('passport')

router.post('/signup', AuthController.signUp)
router.post('/login', AuthController.login)

// router.get('/auth/facebook',
//     passport.authenticate('facebook'))
//
// router.get('/auth/facebook/callback',
//     passport.authenticate('facebook', { failureRedirect: '/login' }),
//     function(req, res) {
//         res.redirect('/')
//     })

module.exports = router
