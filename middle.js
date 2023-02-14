
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

module.exports = middle;