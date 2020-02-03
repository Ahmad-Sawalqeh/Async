// eslint-disable-next-line strict
'use strict';

const fs = require('fs');
let path = require('path');

const editFile = require('../edit-file.js');
// const fsMocks = require('../__mocks__/fs.js');

let pathFile1 = path.join(__dirname, '../data/test-file1.json');
let pathFile2 = path.join(__dirname, '../data/test-file2.json');


describe('tests our Module', () => {

  it('Test File 1', () => {
    editFile(pathFile1);
    fs.readFile(pathFile1, 'utf8', (err, data) => {
      if (err) throw err;
      let content = JSON.parse(data);
      expect(content.married).toBeTruthy();
    });
  });

  it('Test File 2', () => {
    editFile(pathFile2);
    fs.readFile(pathFile2, 'utf8', (err, data) => {
      if (err) throw err;
      let content = JSON.parse(data);
      expect(content.kids).toEqual(3);
    });
  });

});

