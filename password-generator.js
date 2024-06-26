// password-generator.js

const generatePassword = require('generate-password');

const password = generatePassword.generate({
  length: 10,
  numbers: true,
});

console.log('Generated password:', password);
