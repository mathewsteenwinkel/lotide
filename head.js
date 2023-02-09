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

const head = function(arr) {
  return arr[0]
}




assertEqual(head([1,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");