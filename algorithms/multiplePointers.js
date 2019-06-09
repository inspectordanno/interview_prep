//finds the first pair of numbers that sum to zero. only works on an ordered array

const fixture = [-4,-3,-2,-1,0,1,2,5];

function sumZeroNaive(arr){
  for(let i = 0; i < arr.length; i++){
      for(let j = i+1; j < arr.length; j++){
          if(arr[i] + arr[j] === 0){
              return [arr[i], arr[j]];
          }
      }
  }
}

const sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  } 
}

sumZeroNaive(fixture);
console.log(sumZero(fixture));