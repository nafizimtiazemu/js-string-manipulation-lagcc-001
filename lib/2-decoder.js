'use strict';

const encoder = require("./1-encoder");

var decoder = function(encoded){
  //code your solution here
  return encoded
    .split('').reverse().join('')
    .replace(/\$/g, ' ')
    .replace(/3/g, 'e')
    .replace(/8/g, 'g')
    .replace(/5/g, 's')
    .replace(/6/g, 'b')
};

let original = "the great gatsby";
let encoded = encoder(original);
console.log(encoded);
console.log(decoder(encoded));

module.exports = decoder;

