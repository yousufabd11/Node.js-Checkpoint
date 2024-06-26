//operations.js

const fs = require('fs');
  // Read and console.log data from "welcome.txt"
  fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File content:', data);
  });

