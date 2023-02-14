// FUNCTION IMPLEMENTATION
const assertEquals = function(actual, expected) {
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
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = (object1, object2) => {
  const obj1keys = Object.keys(object1)
  const obj2keys = Object.keys(object2)

  if (obj1keys.length !== obj2keys.length){
    return false;
  } for (let objKey of obj1keys) {
    if (Array.isArray (object1 [objKey]) && (Array.isArray (object2 [objKey]))){
     const result = eqArrays(object1 [objKey],object2 [objKey])
     if(!result){
      return false
     }
    } 

    if (object1[objKey] !== object2[objKey]) {
      return false;
    }
  }
  return true
};

// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject= { size: "medium", color: "red" };
// eqObjects(shirtObject , anotherShirtObject); // => true
// assertEquals(eqObjects(shirtObject , anotherShirtObject), true);

// const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
// eqObjects(shirtObject , longSleeveShirtObject); // => false
// assertEquals(eqObjects(shirtObject , anotherShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEquals(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true)

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEquals(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false)