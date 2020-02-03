// eslint-disable-next-line strict
'use strict';

module.exports = exports = {};

exports.readFile = (file, cb) => {

  if( file !== '../data/bad-path.json'){
    cb('Invalid File');
  }
  else {
    cb(null, Buffer.from('File Contents'));
  }

};