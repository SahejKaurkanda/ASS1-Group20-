// Import the 'fs' (file system) module
const fs = require('fs');

// Specify the file path. Update 'file.txt' with your actual file name.
const filePath = 'file.txt';

// Use the 'readFile' function to asynchronously read the file content
fs.readFile(filePath, 'utf8', (err, data) => {
  // Check for errors during file read
  if (err) {
    console.error(`Error reading file: ${err.message}`);
    return;
  }

  // If no error, log the file content to the console
  console.log('File content:');
  console.log(data);
});
