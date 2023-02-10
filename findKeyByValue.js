const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log('✅');
  }
};



// cycle through the entire object and return the given key
//create loop to cycle through the object looking for the right key
// if  no key is found return undefined.
// use object.keys and a for...of loop

let findByKeyValue = function (object, value) {
  for(let key of object){
    if (value === key) {
      console.log (value);
    }
  }
}



const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

//assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
//assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);