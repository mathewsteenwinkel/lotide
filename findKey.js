const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log('✅');
  }
};
//Implement the function findKey which takes in an object and a callback.
//It should scan the object and return the first key for which the callback returns a truthy value. 
//If no key is found, then it should return undefined.

const findKey = function (object, callback){
for (let key in object) {
  // console.log('key', key)
  // console.log('value', object[key])
  const value = object[key]
  if (callback(value) === true) {
    return key
  }
}
}


console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma"