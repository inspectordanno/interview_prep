function binarySearch(sortedArray, value) {
  let leftPointer = 0;
  let rightPointer = sortedArray.length - 1;
  let middlePointer = Math.floor((leftPointer + rightPointer) / 2);

  while (sortedArray[middlePointer] !== value && leftPointer <= rightPointer) {
    if (value < sortedArray[middlePointer]) {
      rightPointer = middlePointer - 1;
    } else {
      leftPointer = middlePointer + 1;
    } 
    middlePointer = Math.floor((leftPointer + rightPointer) / 2);
  }

  if (sortedArray[middlePointer] === value) {
    return middlePointer;
  } 
  return -1;
}

const sortedArray = [1,2,3,4,5];

const found = binarySearch(sortedArray, 4);
console.log(found);