require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const methodOverride = require('method-override')
const fs = require('fs')
const passport = require('passport')
const Strategy = require('passport-facebook').Strategy
const app = express()
const DB = require('./src/db')
const logStream = fs.createWriteStream('log.txt', {flags: 'a'})

DB.sync()

// passport.use(new Strategy({
//         clientID: '963787901094355',
//         clientSecret: 'e8b949bcaa27d9c43d1492a470546c46',
//         callbackURL: '/'
//     },
//     function (accessToken, refreshToken, profile, cb) {
//         console.log(profile)
//         return cb(null, profile)
//     }))

// passport.use(new InstagramStrategy({
//         clientID: INSTAGRAM_CLIENT_ID,
//         clientSecret: INSTAGRAM_CLIENT_SECRET,
//         callbackURL: "http://127.0.0.1:3000/auth/instagram/callback"
//     },
//     function(accessToken, refreshToken, profile, done) {
//         User.findOrCreate({ instagramId: profile.id }, function (err, user) {
//             return done(err, user)
//         })
//     }
// ))

// passport.serializeUser(function(user, cb) {
//     cb(null, user)
// })
//
// passport.deserializeUser(function(obj, cb) {
//     cb(null, obj)
// })

app.use(cors())
// app.use(methodOverride('_method', {methods: ['GET', 'POST']}))
app.use(express.json())
app.use(morgan('combined', {stream: logStream}))

app.use(require('./src/router'))

app.listen(process.env.PORT, () => {
    console.log('Listening on port ' + process.env.PORT)
})
