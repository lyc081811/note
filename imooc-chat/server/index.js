const express = require('express')

// const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express()
const user = require('./user')

app.use('/user', user)

app.listen('1002', () => {
    console.log('server sueecss')
})
