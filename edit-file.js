'use strict';

const fs = require('fs');
const util = require('util');
const validator = require('./validate-schema.js');

let file = `${__dirname}/data/person.json`;
// let args = process.argv;
process.argv[1] = file;
// print process.argv
// process.argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// });


const editFileCallback = (file, callback) => {
  fs.readFile(file, (err, data) => { // fs.readFileSync(file, (err, data) => {
    if (err) throw err;
    let content = JSON.parse(data.toString());
    console.log('Is it an Object: ', validator.isValid(content, validator.isObject));
    content.firstName = 'Ahmad Sawalqeh';
    content.kids = 3;
    let newData = JSON.stringify(content);
    fs.writeFile(file, newData, (err) => {
      if (err) throw err;
      console.log('\n\nDone modifying the file!\n\n');
    });
  });
};

editFileCallback(file);

fs.readFile(file, (err, data) => {
  if (err) throw err;
  console.log('content of file after edited:\n\n',JSON.parse(data.toString()));
});

module.exports = editFileCallback;

