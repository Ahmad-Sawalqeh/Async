'use strict';

// jest.mock('fs');

const editFile = require('../edit-file.js');

describe('File edit-file Module', () => {

  describe('as a callback', () => {

    it('when given a bad file, returns an error', (done) => {
      let file = `${__dirname}/../data/bad.txt`;
      editFile.editFileCallback(file, (err, data) => {
        expect(err).toBeDefined();
        done();
      });
    });

    it('when given a real file, returns the contents', (done) => {
      let file = `${__dirname}/../data/file1.txt`;
      editFile.editFileCallback(file, (err, data) => {
        expect(err).toBeUndefined();
        expect(typeof data).toBe('object');
        done();
      });
    });

  });

});