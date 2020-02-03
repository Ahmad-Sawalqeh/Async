// eslint-disable-next-line strict
'use strict';

const fs = require('fs');
// const util = require('util');
const validator = require('./validate-schema.js');

let file = `${__dirname}/data/person.json`;
// let args = process.argv;
process.argv[1] = file;
// print process.argv
// process.argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// });

// let promiseReadFile = util.promisfy(fs.readFile);

let newData, content;

function editFile(file){

  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;
    newData = editFileContent(data);
    writeNewData(file, newData);
    readNewData(file);
  });

}

// editFile(file);

function editFileContent(data){
  content = JSON.parse(data);
  // console.log('\nfile before write:\n',  content);
  // console.log('\nIs it an Object: ', validator.isValid(content, validator.isObject),'\n');
  content.firstName = 'Ahmad Sawalqeh';
  content.married = true;
  content.kids = 3;
  return content;
}

function writeNewData(file, newData){
  let data = JSON.stringify(newData);
  fs.writeFile(file, data, err => {
    if (err) throw err;
  });
}

function readNewData(file){
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;
    content = JSON.parse(data);
    console.log('file after write:\n', content,'\n');
  });
}


module.exports = editFile;
