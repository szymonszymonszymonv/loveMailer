'use strict'
var nodemailer = require('nodemailer')
var love = {
  config: {
    service: 'gmail', // your service
    auth: {
      user: 'secret', // your email
      pass: 'secret' // your password
    }
  },

  mailOpts: function () {
    var text = this.generateMessage()
    var options = {
      from: 'secret', // you
      to: 'secret', // your loved one
      subject: 'love',
      text: text
    }
    return options
  },

  TransporterConstruct: function () { // create transporter object based on configs
    var config = this.config
    return nodemailer.createTransport(config)
  },

  transporter: function () {
    return this.transporterConstruct()
  },

  anniversary: {

    date: new Date(), // start
    currentDate: new Date(),

    length: function () { // returns length in months, use it as u wish
      var date = this.date
      var difference
      difference = (this.currentDate.getFullYear() - date.getFullYear()) * 12
      difference += this.currentDate.getMonth() - date.getMonth()
      return difference
    },

    isit: function () { // true if it is your anniversary and false if it isnt - it will determine whether or not the message is sent
      if (this.date.getDate() === this.currentDate.getDate()) {
        return true
      } else {
        return false
      }
    }

  },

  messages: [],

  createMessage: function (string) { // create multiple messages so that you can use one of them randomly - EXAMPLE: 'hi sweet i love you' // use this.anniversary.length
    console.log('Message added successfully.')
    this.messages.push(string)
  },
  generateMessage: function () { // randomly generates a message from your array
    var index = Math.floor(Math.random() * this.messages.length)
    return this.messages[index]
  },

  sendMessage: function () {
    this.transporter.sendMail(this.mailOpts(), function (error, info) {
      if (error) {
        console.log(error)
      } else {
        console.log('Email sent: ' + info.response)
      }
    })
  }
}

love.createMessage('hej kici')
love.createMessage('przytulkam cie')
love.createMessage('ale jestes fajna')
console.log(love.mailOpts())
// love.sendMessage()

//  TODO: i want it to be a cool app with an interface so maybe lets use react or angular
//  TODO: learn how to program
//  TODO: get a brain
