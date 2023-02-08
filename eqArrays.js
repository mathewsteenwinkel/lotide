// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  } else {
   console.log('✅');
  }
};

//test code
assertEqual("lighthouse labs", "Bootcamp");
assertEqual(1,1);

const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false

  for(i = 0; i < arr1.length; i++ ){
    if (arr1[i] !== arr2[i]) return false
  }
  return true;
};
console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false