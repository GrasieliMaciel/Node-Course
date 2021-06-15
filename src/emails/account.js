const sgMail = require('@sendgrid/mail')

const sendAPIKey = 'a1017797ad5c1c1964b68ebb5d07ad16'

sgMail.setApiKey(sendAPIKey)

sgMail.send({
    to: 'grasi.l.maciel@gmail.com',
    from: 'grasi.l.maciel@gmail.com',
    subject: 'This is my first creation!',
    text: 'I hope this one actually get to you'
})