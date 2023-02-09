const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  } else {
   console.log('✅');
  }
};
const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false

  for(i = 0; i < arr1.length; i++ ){
    if (arr1[i] !== arr2[i]) return false
  }
  return true;
};

const middle = function (arr){
  const start = Math.floor((arr.length-1) / 2)
  if(arr.length < 3){
    return [];
  } else {
    if(arr.length % 2 === 0){
      return [arr[start], arr[start + 1]]
    }
  return [arr[start]]  } 
}


console.log(middle([1])) // => []
console.log(middle([1, 2]))

console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]

console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]