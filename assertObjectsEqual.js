const eqObjects = (object1, object2) => {
  const obj1keys = Object.keys(object1)
  const obj2keys = Object.keys(object2)

  if (obj1keys.length !== obj2keys.length){
    return false;
  } for (let objKey of obj1keys) {
    if (Array.isArray (object1 [objKey]) && (Array.isArray (object2 [objKey]))){
     const result = eqArrays(object1 [objKey],object2 [objKey])
     if(!result){
      return false;
     }
    } 

    if (object1[objKey] !== object2[objKey]) {
      return false;
    }
  }
  return true;
};
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  // ...
};
