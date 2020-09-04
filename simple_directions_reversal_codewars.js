/*
In this Kata, you will be given directions and your task will be to find your way back.

solve(["Begin on Road A","Right on Road B","Right on Road C","Left on Road D"]) = ['Begin on Road D', 'Right on Road C', 'Left on Road B', 'Left on Road A']
solve(['Begin on Lua Pkwy', 'Right on Sixth Alley', 'Right on 1st Cr']) =  ['Begin on 1st Cr', 'Left on Sixth Alley', 'Left on Lua Pkwy']
*/

const solve = (arr) => {
  let array = [];
  if(arr.length === 1) {
      return arr;
  }
  for(let i = arr.length - 1; i > -1; i--) {
    if(i === arr.length - 1) {
        if(arr[i][0] === 'L') {
            array.push('Begin' + arr[i].slice(4));
        }
        if(arr[i][0] === 'R') {
            array.push('Begin' + arr[i].slice(5));
        }
        continue;
    }
    if(arr[i + 1][0] === 'L') {
        array.push('Right' + arr[i].slice(5))
    }
    if(arr[i + 1][0] === 'R') {
        array.push('Left' + arr[i].slice(5))
    }
  }

  return array;
}