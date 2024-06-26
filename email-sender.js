// email-sender.js

const nodemailer = require('nodemailer');

// Create a transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '', // Add with your email
    pass: '',  // Add with your email password
  },
});

// Setup email data
let mailOptions = {
  from: '', // Add with your email
  to: '',   //Add  recptiant email
  subject: 'Hello from Node.js',
  text: 'Hello Node.js!',
};

// Send mail
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Email sent: ' + info.response);
});
