const request = require('request');
const fs = require('fs');
// take URL and paht using command line arguments
const arg = process.argv.slice(2);

let URL = arg[0];
let path = arg[1];

// making http request
request(URL,(error, response, content) => {
  if (error) {
    return console.log('ERROR:', error);
  }
  // take the data we received and write it to a file in my local filesystem using fs.writeFile() API.
  fs.writeFile(path, content, err => {
    let size = content.length;
    if (err) {
      console.error(err);
    }
    console.log(`Downloaded and saved ${size} bytes to ${path}`);
  });


});