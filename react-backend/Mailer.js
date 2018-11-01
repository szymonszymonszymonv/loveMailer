'use strict'
var nodemailer = require('nodemailer')
class Mailer {
  constructor (object) {
    this.transporter = {}
    this.messages = object.messages
    this.user = object.form.email
    this.password = object.form.password
    this.target = object.form.target_email
    this.subject = object.form.subject
    this.config = {
      service: 'gmail', // your service
      auth: {
        user: this.user, // your email
        pass: this.password // your password
      }
    }
  }
  mailOpts () {
    var text = this.generateMessage()
    var options = {
      from: this.user, // you
      to: this.target, // your target
      subject: this.subject,
      text: text
    }
    return options
  }
  transporterConstruct () {
    // create transporter object based on configs
    this.transporter = nodemailer.createTransport(this.config)
  }

  generateMessage () { // randomly generates a message from your array of messages
    var index = Math.floor(Math.random() * this.messages.length)
    return this.messages[index]
  }
  sendMessage () {
    this.transporter.sendMail(this.mailOpts(), function (error, info) {
      if (error) {
        console.log(error)
      } else {
        console.log('Email sent: ' + info.response)
      }
    })
  }
}

module.exports = Mailer
