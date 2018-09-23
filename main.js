'use strict'
var nodemailer = require('nodemailer')

var love = {
  anniversary: { // idk?????????????? needs tweaking its useless as it is
    date: new Date(/* year, month(0-11 not 1-12), day */), // start
    getLength: function () { // returns length in months
      var date = this.date
      var currentDate = new Date()
      var difference
      difference = (currentDate.getFullYear() - date.getFullYear()) * 12
      difference += currentDate.getMonth() - date.getMonth()
      return difference
    }
  },
  messages: [],
  createMessage: { // 2 types of messages
    normal: function (string) { // create multiple messages so that you can use one of them randomly - EXAMPLE: 'hi sweet i love you'
      this.messages.push(string)
    },
    anniversary: function (string) {
      var length = this.anniversary.getLength()
      this.messages.push(string)
      return length
    }
  },
  generateMessage: function () {
    return this.messages[Math.random() * this.messages.length]
  }
}

var config = {
  service: 'gmail',
  auth: {
    user: 'name@email.com',
    pass: 'encoded password'
  }
}
var transporter = nodemailer.createTransport(config)

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

//  TODO: figure out what to do with anniversaries
//  TODO: learn how to program
//  TODO: get a brain
