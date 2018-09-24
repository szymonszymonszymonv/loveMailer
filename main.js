'use strict'
require('module')
console.log(__filename)
// var nodemailer = require('C:/Users/Szymon/Documents/PROJECTS/loveMailer/node_modules/nodemailer')
var love = {
  anniversary: {
    date: new Date(/* year, month(0-11 not 1-12), day */), // start
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
    this.messages.push(string)
  },

  generateMessage: function () {
    var index = Math.floor(Math.random() * this.messages.length)
    return this.messages[index]
  }
}
love.createMessage('hej kici')
console.log(love.generateMessage())
/*
var config = {
  service: 'gmail',
  auth: {
    user: 'name@email.com',
    pass: 'encoded password'
  }
}
var transporter = nodemailer.createTransport(config)
console.log(transporter)
var mailOptions = {
  from: config.auth.user, // you
  to: 'target@email.com', // your loved one
  subject: 'subject',
  text: 'your message'
}

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error)
  } else {
    console.log('Email sent: ' + info.response)
  }
})
*/
//  TODO: figure out what to do with anniversaries
//  TODO: learn how to program
//  TODO: get a brain
