const express = require('express')
const router = require('./router')

const app = express()

// app should always use router
app.use(router)

module.exports = app;
