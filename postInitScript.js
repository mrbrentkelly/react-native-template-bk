#!/usr/bin/env node

var fs = require('fs');

const pieces = process.cwd().split('/');
const projectName = pieces[pieces.length - 1];

fs.readFile('./package.json', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }

  var result = data.replace(/ReplaceMe/g, projectName);

  fs.writeFile('./package.json', result, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});
