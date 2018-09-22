'use strict'
var nodemailer = require('nodemailer')

// function generateMessage (messages) {
//   messages = [''] // your love messages you can think of
//   return messages
// }
// generateMessage()

var config = {
  service: 'gmail', // self-explanatory
  auth: {
    user: 'name@email.com',
    pass: 'encoded password'
  }
}

var transporter = nodemailer.createTransport(config)

var mailOptions = {
  from: config.auth.user, // you
  to: 'target@email.com', // your love one
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

//  TODO: function that creates a message and pushes it into an array of all messages
//  TODO: function that gets a random message from an array of messages
//  TODO: an anniversary function that creates a message with anniversary info
//  TODO: learn how to program
