require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const methodOverride = require('method-override')
const fs = require('fs')

const app = express()

app.set('view engine', 'pug')
app.set('views', './views')

const logStream = fs.createWriteStream('log.txt', {flags: 'a'})

app.use(cors())
app.use(methodOverride('_method', {methods: ['GET', 'POST']}))
app.use(express.urlencoded({extended: true}))
app.use(morgan('combined', {stream: logStream}))

app.use(require('./src/router'))

app.listen(process.env.PORT, () => {
    console.log('Listening on port ' + process.env.PORT)
})
