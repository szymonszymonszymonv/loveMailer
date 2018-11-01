'use strict'
var express = require('express')
var app = express()
var Mailer = require('./Mailer.js')
app.post('/', (req, res, next) => {
  var data = req.body
  var myMailer = new Mailer(data)
  myMailer.transporterConstruct()
  myMailer.sendMessage()
})

module.exports = app
