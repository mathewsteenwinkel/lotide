const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log('✅');
  }
};

const countLetters = function (strings){
  const results = {};
  for (const count of strings){
    if (letter !== " "){
      if (result[letter]){
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};