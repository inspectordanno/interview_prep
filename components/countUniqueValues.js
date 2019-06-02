const fixture = [1,2,3,4,4,4,7,7,12,12,13];

//Implement a function called countUniqueValues,
//which accepts a sorted array, and counts the 
//unique values in the array. There can be negative
//numbers in the array, but it will always be sorted

function countUniqueValues(array) {
  //records unique value position
  let i = 0;
  //"scout" variable
  let j = 1;

  //if array has no numbers, return 0
  if (array.length === 0) {
    return 0;
  }

  //repeat until end of the array
  while (j < array.length) {

    const firstPointerValue = array[i];
    const secondPointerValue = array[j];

    //if i value doesn't equal j value, move j value right
    if (firstPointerValue === secondPointerValue) {
      j++;
    }

    //if i doesn't equal j, put value in front of i index, then move i right
    if (firstPointerValue !== secondPointerValue) {
      i++; //move i right
      array[i] = secondPointerValue; //change first pointer to second pointer
      j++; //move j right
    }

  }

  //unique values is i + 1
  return i + 1;
}

console.log(countUniqueValues(fixture));

export default countUniqueValues;