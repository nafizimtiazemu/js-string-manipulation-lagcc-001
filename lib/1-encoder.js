'use strict';

var encoder = function(phrase){
  //code your solution here
  return phrase
  .replace(/e/g, '3')
  .replace(/g/g, '8')
  .replace(/s/g, '5')
  .replace(/b/g, '6')
  .replace(/\s/g, '$')
  .split('').reverse().join('');
};

console.log(encoder("the great gatsby"))
module.exports = encoder;
