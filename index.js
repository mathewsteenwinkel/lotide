// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const countOnly  = require('./countOnly');
const letterPosition = require('./letterPosition');
const findKeyByValue = require('./findKeyByValue');
const eqObjects = require('./eqObjects');
const eqArrays = require('./eqArrays');


module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  countOnly: countOnly,
  letterPosition: letterPosition,
  findKeyByValue: findKeyByValue,
  eqObjects: eqObjects,
  eqArrays: eqArrays
};