const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false

  for(i = 0; i < arr1.length; i++ ){
    if (arr1[i] !== arr2[i]) return false
  }
  return true;
};
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log('✅');
  }
};



const letterPositions = function(sentence) {
  
  const results = {};
  for (i = 0; i < sentence.length; i++){
    //console.log(sentence[i])
    //console.log (results[sentence[i]]);
    if (results[sentence[i].trim()]){
      results[sentence[i]] .push(i) 
    } else {
      results[sentence[i]] = [i]
    }
  }
    console.log (results)

    return results;
};


letterPositions('hello')
//assertArraysEqual(letterPositions("hello").e, [1]);